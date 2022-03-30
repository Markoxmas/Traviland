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

export default function MainBuilding() {
    const classes = useStyles()
    const field = useSelector((state) => state.fieldReducer)
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const decrease = Math.floor(
        field.level * serverConfig.MAIN_BUILDING.DECREASE * 100
    )
    const nextDecrease = Math.floor(
        (field.temporaryLevel + 1) * serverConfig.MAIN_BUILDING.DECREASE * 100
    )
    return (
        <div className={classes.paper}>
            <Paper>
                <b>Upgrade times are reduced by {decrease}%</b>
            </Paper>

            {field.level < serverConfig.MAIN_BUILDING.MAX_LEVEL && (
                <Paper>
                    <b>
                        Next level will reduce upgrade times by {nextDecrease}%
                    </b>
                </Paper>
            )}
        </div>
    )
}
