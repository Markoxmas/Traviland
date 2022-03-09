import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    field: {
        width: '100px',
        height: '80px',
        margin: '2px',
    },
}))

export default function UpgradeField({ field, openUpgradeWindow }) {
    const classes = useStyles()

    return (
        <Button
            className={classes.field}
            style={{ background: field.color }}
            variant="contained"
            onClick={() => openUpgradeWindow(field)}
        >
            <div>
                {field.name && field.name}
                <div>{field.level}</div>
            </div>
        </Button>
    )
}
