import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    root: {},
    field: {
        width: '100px',
        height: '50px',
        margin: '2px',
        background: 'rgba(165, 42, 42, 0.7)',
    },
}))

export default function BuildingField({ field }) {
    const classes = useStyles()

    return (
        <Button className={classes.field} variant="contained">
            {field.name} {field.level}
        </Button>
    )
}
