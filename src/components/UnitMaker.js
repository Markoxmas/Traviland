import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Cost from './Upgrade/Cost'
import UnitRow from './UnitRow'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function UnitMaker({ village, field, serverConfig }) {
    const classes = useStyles()
    const units =
        field.type === 'barracks'
            ? ['dog', 'cat', 'lizard', 'pidgeon']
            : ['horse', 'catapult', 'aligator']
    return (
        <div className={classes.root}>
            <Grid>
                <Grid>
                    <div className={classes.demo}>
                        <List>
                            {units.map((unit) => (
                                <UnitRow
                                    village={village}
                                    serverConfig={serverConfig}
                                    field={field}
                                    unit={unit}
                                />
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
