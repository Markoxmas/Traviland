import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
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

export default function RallyPoint({ field }) {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const config = serverConfig.RALLY_POINT
    const currentDecrease = Math.floor(config.DECREASE * 100 * field.level)
    const nextDecrease =
        field.temporaryLevel + 1 <= config.MAX_LEVEL
            ? Math.floor(config.DECREASE * 100 * field.temporaryLevel + 1)
            : Math.floor(config.DECREASE * 100 * field.temporaryLevel)
    return (
        <div className={classes.paper}>
            <Paper>
                Currently unit travel time is decreased by {currentDecrease} %
            </Paper>
            <Paper>
                Next level will decrease unit travel time by {nextDecrease} %
            </Paper>
        </div>
    )
}
