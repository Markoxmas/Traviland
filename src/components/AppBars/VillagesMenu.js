import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { onSetVillage } from '../../redux/actions/villageMenuActions'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    card: {
        minWidth: 150,
        minHeight: 150,
        textAlign: 'center',
    },
})

export default function VillageMenu({ villagesMenu, handleClose }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleChoice = (newId) => {
        if (typeof newId === 'number') {
            dispatch(onSetVillage(newId))
        }
        handleClose()
    }

    return (
        <div className={classes.root}>
            {villagesMenu.map((villageItem) => (
                <Card
                    className={classes.card}
                    onClick={() => handleChoice(villageItem.id)}
                >
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            {villageItem.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
