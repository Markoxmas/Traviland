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
})

export default function ArmyBar({ village }) {
    const classes = useStyles()
    const { army } = village
    return (
        <>
            <Paper square className={classes.root}>
                {[
                    'dogs',
                    'cats',
                    'lizards',
                    'pidgeons',
                    'horses',
                    'catapults',
                    'aligators',
                ].map((unit) =>
                    army[unit] > 0 ? (
                        <Button key={unit}>
                            <b>
                                {formatNumber(army[unit])} {unit}
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
