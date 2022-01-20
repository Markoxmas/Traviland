import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}))

export default function Cost({ cost }) {
    const classes = useStyles()
    return (
        <Paper component="ul" className={classes.root}>
            <li key={1}>
                Clay:
                <Chip label={cost.clay} className={classes.chip} />
            </li>
            <li key={1}>
                Wood:
                <Chip label={cost.wood} className={classes.chip} />
            </li>
            <li key={1}>
                Iron:
                <Chip label={cost.iron} className={classes.chip} />
            </li>
            <li key={1}>
                Time:
                <Chip label={cost.time} className={classes.chip} />
            </li>
        </Paper>
    )
}
