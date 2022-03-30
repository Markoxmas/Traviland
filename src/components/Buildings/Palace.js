import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Cost from '../Village/Upgrades/Cost'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    button: {
        margin: 'auto',
    },
})

export default function Palace() {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const { field } = useSelector((state) => state.fieldReducer)
    const { PALACE, SERVER_SPEED } = serverConfig
    const timeCost = Math.floor(PALACE.COST_TIME / SERVER_SPEED)
    return (
        <>
            {PALACE.EXPANSION.map((expansionLevel) => (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Create a new village at level {expansionLevel}
                        </Typography>
                        <Cost
                            cost={{
                                clay: PALACE.COST_CLAY,
                                wood: PALACE.COST_WOOD,
                                iron: PALACE.COST_IRON,
                                time: timeCost,
                            }}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            disabled={field.level < expansionLevel}
                            className={classes.button}
                        >
                            Create village
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}
