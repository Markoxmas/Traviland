import React from 'react'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import formatNumber from '../lib/formatNumber'

export default function ResourceInfo({ village }) {
    const { clay, wood, iron } = useSelector((state) => state.resourcesReducer)
    return (
        <div>
            <Button style={{ color: 'red', fontWeight: 'bold' }}>
                Clay: {formatNumber(clay)}/
                {formatNumber(village.maxResources.clay)}
            </Button>
            <Button style={{ color: 'green', fontWeight: 'bold' }}>
                Wood: {formatNumber(wood)}/
                {formatNumber(village.maxResources.wood)}
            </Button>
            <Button style={{ color: 'blue', fontWeight: 'bold' }}>
                Iron: {formatNumber(iron)}/
                {formatNumber(village.maxResources.iron)}
            </Button>
        </div>
    )
}
