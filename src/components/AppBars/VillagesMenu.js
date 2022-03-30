import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

export default function VillageMenu({ handleClose }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const villages = useSelector((state) => state.villagesReducer)

    const handleChoice = (newVillage) => {
        dispatch(onSetVillage(newVillage))
        handleClose()
    }

    return (
        <div className={classes.root}>
            {villages.map((village) => (
                <Card
                    className={classes.card}
                    onClick={() => handleChoice(village)}
                >
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            {village.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
