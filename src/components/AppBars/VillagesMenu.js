import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        display: 'flex',
    },
    card: {
        minWidth: 150,
        minHeight: 150,
        textAlign: 'center',
    },
})

export default function VillageMenu({ villagesMenu }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {villagesMenu.map((villageItem) => (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            {villageItem.name}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
