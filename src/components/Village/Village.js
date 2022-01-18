import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UpgradeField from './UpgradeField'

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: 'auto',
    },
})

export default function Village({ village }) {
    const classes = useStyles()
    const { tab } = useSelector((state) => state.menuReducer)

    return (
        <Grid container className={classes.root}>
            {tab === 1 &&
                village.resourceFields.map((field) => (
                    <Grid item xs={6} sm={4} md={3} lg={3}>
                        <UpgradeField field={field} />
                    </Grid>
                ))}
            {tab === 2 &&
                village.buildings.map((field) => (
                    <Grid item lg={3}>
                        <UpgradeField field={field} />
                    </Grid>
                ))}
        </Grid>
    )
}
