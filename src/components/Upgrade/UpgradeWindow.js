import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Cost from './Cost'
import ResourceUpgradeInfo from './ResourceUpgradeInfo'
import getUpgradeCost from '../../lib/getUpgradeCost'
import getTimeToUpgrade from '../../lib/getTimeToUpgrade'

export default function UpgradeWindow({ open, closeWindow, field, village }) {
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    let cost, timeToUpgrade, canBeUpgraded
    if (field.id) {
        cost = getUpgradeCost(serverConfig, field)
        timeToUpgrade = getTimeToUpgrade(village, cost)
        canBeUpgraded = timeToUpgrade === 0
    }
    return (
        <React.Fragment>
            <Dialog maxWidth="sm" open={open} onClose={closeWindow}>
                <DialogTitle>
                    Upgrade {field.name} to level {field.level + 1}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {['clay', 'wood', 'iron'].includes(field.type) && (
                            <ResourceUpgradeInfo field={field} />
                        )}
                        <Cost cost={cost} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={closeWindow} color="primary">
                        {canBeUpgraded ? 'Upgrade' : timeToUpgrade}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
