import React from 'react'
import ResourceUpgradeInfo from '../Buildings/ResourceUpgradeInfo'
import Warehouse from '../Buildings/Warehouse'
import UnitMaker from '../Buildings/UnitMaker'
import UnitUpgrader from '../Buildings/UnitUpgrader'
import MainBuilding from '../Buildings/MainBuilding'

export default function UpgradeBody({ serverConfig, village, field }) {
    const propsToPass = {
        serverConfig,
        village,
        field,
    }
    return (
        <>
            {['clay', 'wood', 'iron'].includes(field.type) && (
                <ResourceUpgradeInfo {...propsToPass} />
            )}
            {field.type === 'warehouse' && <Warehouse {...propsToPass} />}
            {(field.type === 'barracks' || field.type === 'stable') && (
                <UnitMaker {...propsToPass} />
            )}
            {(field.type === 'blacksmith' || field.type === 'armoury') && (
                <UnitUpgrader {...propsToPass} />
            )}
            {field.type === 'main_building' && (
                <MainBuilding {...propsToPass} />
            )}
        </>
    )
}
