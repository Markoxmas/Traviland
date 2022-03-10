import React from 'react'
import ResourceUpgradeInfo from '../../Buildings/Resources/ResourceUpgradeInfo'
import Warehouse from '../../Buildings/Resources/Warehouse'
import UnitMaker from '../../Buildings/Units/UnitMaker'
import UnitUpgrader from '../../Buildings/Units/UnitUpgrader'
import MainBuilding from '../../Buildings/MainBuilding'
import ResourceIncrease from '../../Buildings/Resources/ResourceIncrease'

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
            {(field.type === 'brickyard' ||
                field.type === 'sawmill' ||
                field.type === 'iron_foundry') && (
                <ResourceIncrease {...propsToPass} />
            )}
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
