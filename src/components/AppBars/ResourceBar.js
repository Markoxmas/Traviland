import React from 'react'
import Production from './Production'
import Resources from './Resources'

export default function ResourceBar({ village }) {
    return (
        <>
            <Resources village={village} />
            <Production village={village} />
        </>
    )
}
