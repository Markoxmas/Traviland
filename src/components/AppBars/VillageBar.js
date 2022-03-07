import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import VillagesList from './VillagesList'
import ResourceBar from './ResourceBar'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default function VillageBar({ villages, village }) {
    const classes = useStyles()

    return (
        <>
            <Paper square className={classes.root}>
                <VillagesList villages={villages} chosenVillage={village} />
                <ResourceBar village={village} />
            </Paper>
        </>
    )
}
