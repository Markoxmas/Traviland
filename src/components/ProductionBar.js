import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import ProductionInfo from './ProductionInfo'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
})

export default function ProductionBar({ village }) {
    const classes = useStyles()

    return (
        <>
            <Paper square className={classes.root}>
                <ProductionInfo village={village} />
            </Paper>
        </>
    )
}
