import React from 'react'
import { useSelector } from 'react-redux'
import Bars from '../AppBars/Bars'
import Village from './Village'

export default function Villages() {
    const { villageId } = useSelector((state) => state.villageMenuReducer)
    const villages = useSelector((state) => state.villagesReducer)
    const village = villages.find((village) => village.id === villageId)
    return (
        <>
            <Bars villages={villages} village={village} />
            <Village village={village} />
        </>
    )
}
