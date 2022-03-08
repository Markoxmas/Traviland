import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
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

export default function Resources({ village }) {
    const classes = useStyles()
    const { clay, wood, iron } = useSelector((state) => state.resourcesReducer)
    const { maxResources } = village
    return (
        <Paper className={classes.root}>
            <Button className={classes.clay}>
                <b>
                    Clay: {formatNumber(clay)}/{formatNumber(maxResources.clay)}
                </b>
            </Button>
            <Button className={classes.wood}>
                <b>
                    Wood: {formatNumber(wood)}/{formatNumber(maxResources.wood)}
                </b>
            </Button>
            <Button className={classes.iron}>
                <b>
                    Iron: {formatNumber(iron)}/{formatNumber(maxResources.iron)}
                </b>
            </Button>
        </Paper>
    )
}
