import React from 'react'
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
    const [open, setOpen] = React.useState(false)
    const currentVillageId = useSelector(
        (state) => state.villageMenuReducer
    ).villageId
    const villages = useSelector((state) => state.villagesReducer)
    const village = villages.find((village) => village.id === currentVillageId)
    const villagesMenu = villages.map((village) => {
        return { id: village.id, name: village.name }
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Paper className={classes.root}>
            <Button onClick={handleClickOpen}>{village.name}</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Choose village!</DialogTitle>
                <DialogContent>
                    <VillagesMenu
                        villagesMenu={villagesMenu}
                        handleClose={handleClose}
                    />
                </DialogContent>
            </Dialog>
        </Paper>
    )
}
