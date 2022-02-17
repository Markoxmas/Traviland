import React from 'react'
import Button from '@material-ui/core/Button'
import formatNumber from '../lib/formatNumber'

export default function ProductionInfo({ village }) {
    const { army } = village
    return (
        <div>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.dogs) : 0} dogs
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.cats) : 0} cats
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.lizards) : 0} lizards
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.pidgeons) : 0} pidgeons
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.horses) : 0} horses
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.catapults) : 0} catapults
            </Button>
            <Button style={{ fontWeight: 'bold' }}>
                {army ? formatNumber(army.aligators) : 0} aligators
            </Button>
        </div>
    )
}
