import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
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

export default function UnitMaker() {
    const classes = useStyles()
    const { field } = useSelector((state) => state.fieldReducer)
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
                                <UnitRow unit={unit} key={field.type + unit} />
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
