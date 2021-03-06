import React from 'react'
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
})

export default function ArmyBar() {
    const classes = useStyles()
    const { village } = useSelector((state) => state.villageMenuReducer)

    return (
        <>
            <Paper square className={classes.root}>
                {village &&
                    [
                        'dogs',
                        'cats',
                        'lizards',
                        'pidgeons',
                        'horses',
                        'catapults',
                        'aligators',
                    ].map((unit) =>
                        village.army[unit] > 0 ? (
                            <Button key={unit}>
                                <b>
                                    {formatNumber(village.army[unit])} {unit}
                                </b>
                            </Button>
                        ) : (
                            <></>
                        )
                    )}
            </Paper>
        </>
    )
}
