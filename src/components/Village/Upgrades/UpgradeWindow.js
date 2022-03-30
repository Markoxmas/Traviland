import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Cost from './Cost'
import UpgradeBody from './UpgradeBody'
import getUpgradeCost from '../../../lib/getUpgradeCost'
import getTimeToUpgrade from '../../../lib/getTimeToUpgrade'
import formatMsToDate from '../../../lib/formatMsToDate'
import { onUpgradeRequested } from '../../../redux/actions/upgradeActions'

export default function UpgradeWindow({ open, closeWindow, field, village }) {
    const dispatch = useDispatch()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const [cost, setCost] = useState(null)
    const [timeToUpgrade, setTimeToUpgrade] = useState(null)
    const [canBeUpgraded, setCanBeUpgraded] = useState(null)
    const upgrade = {
        type: 'field',
        level: field.temporaryLevel + 1,
        villageId: village.id,
        fieldId: field.id,
    }

    useEffect(() => {
        if (field.id) {
            //calculate
            const cost = getUpgradeCost(village, serverConfig, field)
            const timeToUpgrade = getTimeToUpgrade(village, cost)
            const canBeUpgraded = timeToUpgrade === 0
            //update
            setCost(cost)
            setTimeToUpgrade(timeToUpgrade)
            setCanBeUpgraded(canBeUpgraded)
        }
    }, [village.id, field.id, field.temporaryLevel])

    const handleUpgrade = (upgrade) => {
        dispatch(onUpgradeRequested(upgrade))
        closeWindow()
    }
    return (
        <React.Fragment>
            {field && (
                <Dialog open={open} onClose={closeWindow}>
                    <DialogTitle>
                        Upgrade {field.name} to level {field.temporaryLevel + 1}
                    </DialogTitle>
                    <UpgradeBody village={village} field={field} />
                    <DialogContent>
                        <DialogContentText>
                            {cost && <Cost cost={cost} />}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeWindow} color="secondary">
                            Cancel
                        </Button>
                        <Button
                            onClick={() => handleUpgrade(upgrade)}
                            disabled={!canBeUpgraded}
                            color="primary"
                        >
                            {canBeUpgraded
                                ? 'Upgrade'
                                : formatMsToDate(
                                      new Date().getTime() + timeToUpgrade
                                  )}
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </React.Fragment>
    )
}
