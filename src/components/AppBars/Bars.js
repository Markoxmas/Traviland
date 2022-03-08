import React from 'react'
import VillagesList from './VillagesList'
import ResourceBar from './ResourceBar'
import ArmyBar from './ArmyBar'

export default function Bars({ villages, village }) {
    return (
        <>
            <VillagesList villages={villages} village={village} />
            <ResourceBar villages={villages} village={village} />
            <ArmyBar village={village} />
        </>
    )
}
