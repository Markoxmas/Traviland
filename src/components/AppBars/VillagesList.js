import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import VillagesMenu from './VillagesMenu'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
}))

export default function VillagesList() {
    const classes = useStyles()
    const { village } = useSelector((state) => state.villageMenuReducer)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            {village && (
                <Paper className={classes.root}>
                    <Button onClick={handleClickOpen}>{village.name}</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Choose village!</DialogTitle>
                        <DialogContent>
                            <VillagesMenu
                                villagesMenu={{}}
                                handleClose={handleClose}
                            />
                        </DialogContent>
                    </Dialog>
                </Paper>
            )}
        </>
    )
}
