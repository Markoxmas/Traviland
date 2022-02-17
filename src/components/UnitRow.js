import { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import getUnitCost from '../lib/getUnitCost'
import formatMsToTime from '../lib/formatMsToTime'

export default function UnitRow({ serverConfig, field, unit }) {
    const [units, setUnits] = useState(undefined)
    const cost = getUnitCost(serverConfig, field)[unit]
    const maxUnits = 100
    const handleInput = (e) => {
        setUnits(e.target.value)
    }
    return (
        <ListItem>
            <ListItemText primary={unit} />
            clay: {cost.clay} iron: {cost.iron} wood: {cost.wood} time:{' '}
            {formatMsToTime(cost.time)}
            <Input
                placeholder=""
                onChange={(e) => handleInput(e)}
                value={units}
            />
            <Button color="primary" onClick={() => setUnits(maxUnits)}>
                {maxUnits}
            </Button>
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </ListItem>
    )
}
