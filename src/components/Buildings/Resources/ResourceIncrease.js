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
    const currentIncrease = Math.floor(
        config.INCREASE[field.level] * 100 - 100 + 0.5
    )
    const nextIncrease = Math.floor(
        field.temporaryLevel + 1 <= config.MAX_LEVEL
            ? config.INCREASE[field.temporaryLevel + 1] * 100 - 100 + 0.5
            : config.INCREASE[field.temporaryLevel] * 100 - 100 + 0.5
    )
    const resource = {
        brickyard: 'clay',
        sawmill: 'wood',
        iron_foundry: 'iron',
    }
    return (
        <div className={classes.paper}>
            <Paper>
                This level increases {resource[field.type]} production by{' '}
                {currentIncrease} %
            </Paper>
            <Paper>
                Next level will increase {resource[field.type]} production by{' '}
                {nextIncrease} %
            </Paper>
        </div>
    )
}
