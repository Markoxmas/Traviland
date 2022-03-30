import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import formatNumber from '../../../lib/formatNumber'

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        },
        textAlign: 'center',
    },
}))

export default function Warehouse() {
    const classes = useStyles()
    const { field } = useSelector((state) => state.fieldReducer)
    const serverConfig = useSelector((state) => state.serverConfigReducer)
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
                Currently warehouse can hold {formatNumber(currentMaxResources)}{' '}
                resources at level {field.level}.
            </Paper>
            <Paper>
                Level {field.temporaryLevel + 1} upgrade will be able to hold{' '}
                {formatNumber(nextMaxResources)} resources.
            </Paper>
        </div>
    )
}
