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

export default function Warehouse({ serverConfig, field }) {
    const classes = useStyles()
    const config = serverConfig.WAREHOUSE
    const currentMaxResources = Math.floor(
        config.MAX_RES_A1 *
            config.MAX_RES_K ** (field.level - 1) *
            serverConfig.SERVER_SPEED
    )
    const nextMaxResources = Math.floor(
        config.MAX_RES_A1 *
            config.MAX_RES_K ** field.temporaryLevel *
            serverConfig.SERVER_SPEED
    )
    return (
        <div className={classes.paper}>
            <Paper>
                Currently warehouse can hold {currentMaxResources} resources at
                level {field.level}.
            </Paper>
            <Paper>
                Level {field.temporaryLevel + 1} upgrade will be able to hold{' '}
                {nextMaxResources} resources.
            </Paper>
        </div>
    )
}
