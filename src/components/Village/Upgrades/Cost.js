import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import formatMsToTime from '../../../lib/formatMsToTime'
import formatNumber from '../../../lib/formatNumber'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    listItem: {
        padding: theme.spacing(1),
    },
}))

export default function Cost({ cost }) {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <b className={classes.listItem} key={1}>
                Clay: {formatNumber(cost.clay)}
            </b>
            <b className={classes.listItem} key={2}>
                Wood:{formatNumber(cost.wood)}
            </b>
            <b className={classes.listItem} key={3}>
                Iron:{formatNumber(cost.iron)}
            </b>
            <b className={classes.listItem} key={4}>
                Time:{formatMsToTime(cost.time)}
            </b>
        </Paper>
    )
}
