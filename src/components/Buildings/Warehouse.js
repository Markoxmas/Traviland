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
    return (
        <div className={classes.paper}>
            <Paper></Paper>
            <Paper></Paper>
        </div>
    )
}
