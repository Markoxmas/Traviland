import React from 'react'
import VillageBar from './VillageBar'
import ProductionBar from './ProductionBar'
import ArmyBar from './ArmyBar'

export default function Bars({ villages, village }) {
    return (
        <>
            <VillageBar villages={villages} village={village} />
            <ProductionBar village={village} />
            <ArmyBar village={village} />
        </>
    )
}
