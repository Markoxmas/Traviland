import React from 'react'
import { useSelector } from 'react-redux'
import ResourceUpgradeInfo from '../../Buildings/Resources/ResourceUpgradeInfo'
import Warehouse from '../../Buildings/Resources/Warehouse'
import UnitMaker from '../../Buildings/Units/UnitMaker'
import UnitUpgrader from '../../Buildings/Units/UnitUpgrader'
import MainBuilding from '../../Buildings/MainBuilding'
import ResourceIncrease from '../../Buildings/Resources/ResourceIncrease'
import RallyPoint from '../../Buildings/Units/RallyPoint'
import Palace from '../../Buildings/Palace'
import Marketplace from '../../Buildings/Resources/Marketplace'

export default function UpgradeBody() {
    const { field } = useSelector((state) => state.fieldReducer)
    return (
        <>
            {['clay', 'wood', 'iron'].includes(field.type) && (
                <ResourceUpgradeInfo />
            )}
            {field.type === 'warehouse' && <Warehouse />}
            {(field.type === 'brickyard' ||
                field.type === 'sawmill' ||
                field.type === 'iron_foundry') && <ResourceIncrease />}
            {(field.type === 'barracks' || field.type === 'stable') && (
                <UnitMaker />
            )}
            {(field.type === 'blacksmith' || field.type === 'armoury') && (
                <UnitUpgrader />
            )}
            {field.type === 'rally_point' && <RallyPoint />}
            {field.type === 'palace' && <Palace />}
            {field.type === 'marketplace' && <Marketplace />}
            {field.type === 'main_building' && <MainBuilding />}
        </>
    )
}
