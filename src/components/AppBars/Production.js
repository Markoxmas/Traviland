import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
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

export default function Production() {
    const classes = useStyles()
    const { village } = useSelector((state) => state.villageMenuReducer)

    return (
        <Paper className={classes.root}>
            <Button className={classes.clay}>
                <b>
                    {village && village.production
                        ? formatNumber(village.production.clay)
                        : 0}{' '}
                    per hour
                </b>
            </Button>
            <Button className={classes.wood}>
                <b>
                    {village && village.production
                        ? formatNumber(village.production.wood)
                        : 0}{' '}
                    per hour
                </b>
            </Button>
            <Button className={classes.iron}>
                <b>
                    {village && village.production
                        ? formatNumber(village.production.iron)
                        : 0}{' '}
                    per hour
                </b>
            </Button>
        </Paper>
    )
}
