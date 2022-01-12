import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import VillagesList from './VillagesList'
import Village from './Village'

export default function Villages() {
    const { villageId } = useSelector((state) => state.villageMenu)
    const village = useSelector((state) => state.villagesReducer).filter(
        (village) => village.id === villageId
    )[0]
    return (
        <>
            <Paper square>
                <VillagesList />
            </Paper>
            <Village village={village} />
        </>
    )
}
