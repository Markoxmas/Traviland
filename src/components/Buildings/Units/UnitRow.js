import { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import getUnitCost from '../../../lib/getUnitCost'
import formatMsToTime from '../../../lib/formatMsToTime'
import getMaxUnitAmount from '../../../lib/getMaxUnitAmount'

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        },
        textAlign: 'center',
    },
}))

export default function UnitRow({ unit }) {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const { village } = useSelector((state) => state.villageMenuReducer)
    const { field } = useSelector((state) => state.fieldReducer)
    const [units, setUnits] = useState(undefined)
    const cost = getUnitCost(serverConfig, field)[unit]
    const maxUnits = getMaxUnitAmount(village, field, serverConfig)
    const handleInput = (e) => {
        setUnits(e.target.value)
    }
    return (
        <div className={classes.paper}>
            <Paper>
                <div>
                    <b>{unit.toUpperCase()}</b>
                </div>
                <div style={{ margin: '5px' }}>
                    clay: {cost.clay} iron: {cost.iron} wood: {cost.wood} time:{' '}
                    {formatMsToTime(cost.time)}
                </div>
                <Input
                    style={{ width: '50px' }}
                    onChange={(e) => handleInput(e)}
                    value={units}
                />
                <Button
                    color="primary"
                    onClick={() => setUnits(maxUnits[unit])}
                >
                    {maxUnits[unit]}
                </Button>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Paper>
        </div>
    )
}
