import React from 'react'
import { useSelector } from 'react-redux'
import Bars from '../AppBars/Bars'
import Village from './Village'

export default function Villages() {
    const { village } = useSelector((state) => state.villageMenuReducer)
    const villages = useSelector((state) => state.villagesReducer)
    return (
        <>
            <Bars villages={villages} village={village} />
            {village && <Village village={village} />}
        </>
    )
}
