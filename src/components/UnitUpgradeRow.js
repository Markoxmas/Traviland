export default function UnitUpgradeRow({ village, serverConfig, field, unit }) {
    return (
        <div>
            <div>{unit}</div>
            <div>
                level:{' '}
                {field.type === 'blacksmith'
                    ? village.units[unit].attack
                    : village.units[unit].defense}
            </div>
        </div>
    )
}
