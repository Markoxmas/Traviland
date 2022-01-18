import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import VillagesList from './VillagesList'
import ResourceInfo from '../ResourceInfo'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default function Villages({ villages, village }) {
    const classes = useStyles()

    return (
        <>
            <Paper square className={classes.root}>
                <VillagesList villages={villages} chosenVillage={village} />
                <ResourceInfo village={village} />
            </Paper>
        </>
    )
}
