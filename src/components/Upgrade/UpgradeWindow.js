import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Cost from './Cost'
import UnitMaker from '../UnitMaker'
import ResourceUpgradeInfo from './ResourceUpgradeInfo'
import getUpgradeCost from '../../lib/getUpgradeCost'
import getTimeToUpgrade from '../../lib/getTimeToUpgrade'
import formatMsToDate from '../../lib/formatMsToDate'
import { onUpgradeRequested } from '../../redux/actions/upgradeActions'

export default function UpgradeWindow({ open, closeWindow, field, village }) {
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const dispatch = useDispatch()
    let cost, timeToUpgrade, canBeUpgraded
    if (field.id) {
        cost = getUpgradeCost(village, serverConfig, field)
        timeToUpgrade = getTimeToUpgrade(village, cost)
        canBeUpgraded = timeToUpgrade === 0
    }

    const handleUpgrade = (village, upgrade, serverConfig) => {
        dispatch(onUpgradeRequested(village, upgrade, serverConfig))
        closeWindow()
    }

    return (
        <React.Fragment>
            <Dialog open={open} onClose={closeWindow}>
                <DialogTitle>
                    Upgrade {field.name} to level {field.temporaryLevel + 1}
                </DialogTitle>
                {['clay', 'wood', 'iron'].includes(field.type) && (
                    <ResourceUpgradeInfo field={field} />
                )}
                {(field.type === 'barracks' || field.type === 'stable') && (
                    <UnitMaker
                        village={village}
                        field={field}
                        serverConfig={serverConfig}
                    />
                )}
                <DialogContent>
                    <DialogContentText>
                        <Cost cost={cost} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() =>
                            handleUpgrade(
                                village.id,
                                {
                                    id: field.id,
                                },
                                serverConfig
                            )
                        }
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
        </React.Fragment>
    )
}
