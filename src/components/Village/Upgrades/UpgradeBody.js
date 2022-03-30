import React from 'react'
import ResourceUpgradeInfo from '../../Buildings/Resources/ResourceUpgradeInfo'
import Warehouse from '../../Buildings/Resources/Warehouse'
import UnitMaker from '../../Buildings/Units/UnitMaker'
import UnitUpgrader from '../../Buildings/Units/UnitUpgrader'
import MainBuilding from '../../Buildings/MainBuilding'
import ResourceIncrease from '../../Buildings/Resources/ResourceIncrease'
import RallyPoint from '../../Buildings/Units/RallyPoint'
import Palace from '../../Buildings/Palace'
import Marketplace from '../../Buildings/Resources/Marketplace'

export default function UpgradeBody({ village, field }) {
    const propsToPass = {
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
            {field.type === 'rally_point' && <RallyPoint {...propsToPass} />}
            {field.type === 'palace' && <Palace {...propsToPass} />}
            {field.type === 'marketplace' && <Marketplace {...propsToPass} />}
            {field.type === 'main_building' && (
                <MainBuilding {...propsToPass} />
            )}
        </>
    )
}
