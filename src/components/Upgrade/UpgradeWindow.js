import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function UpgradeWindow({ open, closeWindow, field }) {
    return (
        <React.Fragment>
            <Dialog maxWidth="sm" open={open} onClose={closeWindow}>
                <DialogTitle>
                    Upgrade {field.name} to level {field.level + 1}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Here you put how much upgrade costs and what will it
                        bring.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeWindow} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={closeWindow} color="primary">
                        Upgrade
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
