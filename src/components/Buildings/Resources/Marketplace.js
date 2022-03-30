import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import formatMsToTime from '../../../lib/formatMsToTime'

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        },
        textAlign: 'center',
    },
}))

export default function Marketplace() {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const config = serverConfig.MARKETPLACE
    const [clay, setClay] = useState(0)
    const [wood, setWood] = useState(0)
    const [iron, setIron] = useState(0)

    const handleInput = (e, setter) => {
        setter(e.target.value)
    }
    return (
        <div className={classes.paper}>
            <Paper>
                <Input
                    style={{ width: '50px' }}
                    onChange={(e) => handleInput(e, setClay)}
                    value={clay}
                />
                <Button
                    color="primary"
                    onClick={() => setClay(clay + config.MERCHANT)}
                >
                    {config.MERCHANT}
                </Button>
                <Input
                    style={{ width: '50px' }}
                    onChange={(e) => handleInput(e, setWood)}
                    value={wood}
                />
                <Button
                    color="primary"
                    onClick={() => setWood(wood + config.MERCHANT)}
                >
                    {config.MERCHANT}
                </Button>
                <Input
                    style={{ width: '50px' }}
                    onChange={(e) => handleInput(e, setIron)}
                    value={iron}
                />
                <Button
                    color="primary"
                    onClick={() => setIron(iron + config.MERCHANT)}
                >
                    {config.MERCHANT}
                </Button>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
            </Paper>
        </div>
    )
}
