import React from 'react'
import { useSelector } from 'react-redux'
import VillageBar from './VillageBar'
import Village from './Village'
import ProductionBar from '../ProductionBar'

export default function Villages() {
    const { villageId } = useSelector((state) => state.villageMenuReducer)
    const villages = useSelector((state) => state.villagesReducer)
    const village = villages.find((village) => village.id === villageId)
    return (
        <>
            <VillageBar villages={villages} village={village} />
            <ProductionBar village={village} />
            <Village village={village} />
        </>
    )
}
