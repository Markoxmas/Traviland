import React from 'react'
import Button from '@material-ui/core/Button'
import formatNumber from '../lib/formatNumber'

export default function ProductionInfo({ village }) {
    const { production } = village
    return (
        <div>
            <Button style={{ color: 'red', fontWeight: 'bold' }}>
                {production ? formatNumber(production.clay) : 0} per hour
            </Button>
            <Button style={{ color: 'green', fontWeight: 'bold' }}>
                {production ? formatNumber(production.wood) : 0} per hour
            </Button>
            <Button style={{ color: 'blue', fontWeight: 'bold' }}>
                {production ? formatNumber(production.iron) : 0} per hour
            </Button>
        </div>
    )
}
