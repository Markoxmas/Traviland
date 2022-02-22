import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        },
        textAlign: 'center',
    },
}))

export default function ResourceIncrease({ serverConfig, field }) {
    const classes = useStyles()
    const config = serverConfig[field.type.toUpperCase()]
    const increase =
        Math.floor(config.MAX_RES_A1 * config.MAX_RES_K ** (field.level - 1)) *
        serverConfig.SERVER_SPEED
    const nextMaxResources =
        Math.floor(
            config.MAX_RES_A1 * config.MAX_RES_K ** field.temporaryLevel
        ) * serverConfig.SERVER_SPEED
    return (
        <div className={classes.paper}>
            <Paper>
                <b>Max resources are currently {maxResources}</b>
            </Paper>
            <Paper>
                {field.temporaryLevel < config.MAX_LEVEL && (
                    <b>Next level max resources will be {nextMaxResources}</b>
                )}
            </Paper>
        </div>
    )
}
