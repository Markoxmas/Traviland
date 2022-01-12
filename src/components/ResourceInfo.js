import React from 'react'
import Button from '@material-ui/core/Button'

export default function ResourceInfo({ village }) {
    return (
        <div>
            <Button style={{ color: 'red', fontWeight: 'bold' }}>
                {village.resources.clay}/{village.maxResources.clay}
            </Button>
            <Button style={{ color: 'green', fontWeight: 'bold' }}>
                {village.resources.wood}/{village.maxResources.wood}
            </Button>
            <Button style={{ color: 'blue', fontWeight: 'bold' }}>
                {village.resources.iron}/{village.maxResources.iron}
            </Button>
        </div>
    )
}
