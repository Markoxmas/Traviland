import React from 'react'
import ResourceField from './ResourceField'
import BuildingField from './BuildingField'

export default function Village({ village }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                {village.resourceFields.slice(0, 5).map((field) => (
                    <ResourceField field={field} />
                ))}
            </div>
            <div>
                {village.resourceFields.slice(5, 10).map((field) => (
                    <ResourceField field={field} />
                ))}
            </div>
            <div>
                {village.resourceFields.slice(10, 15).map((field) => (
                    <ResourceField field={field} />
                ))}
            </div>
            <div>
                {village.buildings.slice(0, 5).map((field) => (
                    <BuildingField field={field} />
                ))}
            </div>
        </div>
    )
}
