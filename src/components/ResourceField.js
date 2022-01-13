import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    field: {
        width: '50px',
        height: '50px',
        margin: '2px',
        fontWeight: 'bold',
    },
}))

const getColor = (type) => {
    return type === 'clay'
        ? 'rgba(255, 0, 0, 0.7)'
        : type === 'wood'
        ? 'rgba(0, 255, 0, 0.7)'
        : 'rgba(0, 0, 255, 0.7)'
}

export default function UpgradeField({ field }) {
    const classes = useStyles()

    return (
        <Button
            className={classes.field}
            style={{ background: getColor(field.type) }}
            variant="contained"
        >
            {field.level}
        </Button>
    )
}
