import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import UnitUpgradeRow from './UnitUpgradeRow'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function UnitUpgrader({ village, field }) {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const units = [
        'dog',
        'cat',
        'lizard',
        'pidgeon',
        'horse',
        'catapult',
        'aligator',
    ]
    return (
        <div className={classes.root}>
            <Grid>
                <Grid>
                    <div className={classes.demo}>
                        <List>
                            {units.map((unit) => (
                                <UnitUpgradeRow
                                    village={village}
                                    serverConfig={serverConfig}
                                    field={field}
                                    unit={unit}
                                    key={field.type + unit}
                                />
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
