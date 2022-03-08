import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import formatNumber from '../../lib/formatNumber'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    clay: {
        color: 'red',
    },
    wood: {
        color: 'green',
    },
    iron: {
        color: 'blue',
    },
})

export default function Production({ village }) {
    const classes = useStyles()
    const { production } = village
    return (
        <Paper className={classes.root}>
            <Button className={classes.clay}>
                <b>{production ? formatNumber(production.clay) : 0} per hour</b>
            </Button>
            <Button className={classes.wood}>
                <b>{production ? formatNumber(production.wood) : 0} per hour</b>
            </Button>
            <Button className={classes.iron}>
                <b>{production ? formatNumber(production.iron) : 0} per hour</b>
            </Button>
        </Paper>
    )
}
