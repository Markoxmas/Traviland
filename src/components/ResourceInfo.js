import React from 'react'
import Button from '@material-ui/core/Button'
import formatNumber from '../lib/formatNumber'

export default function ResourceInfo({ village }) {
    return (
        <div>
            <Button style={{ color: 'red', fontWeight: 'bold' }}>
                Clay: {formatNumber(village.resources.clay)}/
                {formatNumber(village.maxResources.clay)}
            </Button>
            <Button style={{ color: 'green', fontWeight: 'bold' }}>
                Wood: {formatNumber(village.resources.wood)}/
                {formatNumber(village.maxResources.wood)}
            </Button>
            <Button style={{ color: 'blue', fontWeight: 'bold' }}>
                Iron: {formatNumber(village.resources.iron)}/
                {formatNumber(village.maxResources.iron)}
            </Button>
        </div>
    )
}
