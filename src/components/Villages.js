import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import VillagesList from './VillagesList'
import Village from './Village'
import ResourceInfo from './ResourceInfo'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
})

export default function Villages() {
    const classes = useStyles()
    const { villageId } = useSelector((state) => state.villageMenu)
    const villages = useSelector((state) => state.villagesReducer)
    const village = villages.filter((village) => village.id === villageId)[0]
    return (
        <>
            <Paper square className={classes.root}>
                <VillagesList villages={villages} chosenVillage={village} />
                <ResourceInfo village={village} />
            </Paper>
            <Village village={village} />
        </>
    )
}
