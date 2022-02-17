import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ArmyInfo from './ArmyInfo'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default function ArmyBar({ village }) {
    const classes = useStyles()

    return (
        <>
            <Paper square className={classes.root}>
                <ArmyInfo village={village} />
            </Paper>
        </>
    )
}
