import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    paper: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
        },
        textAlign: 'center',
    },
}))

export default function UnitUpgradeRow({ village, serverConfig, field, unit }) {
    const classes = useStyles()
    return (
        <div className={classes.paper}>
            <Paper>
                <div>{unit}</div>
                <div>
                    level:{' '}
                    {field.type === 'blacksmith'
                        ? village.units[unit].attack
                        : village.units[unit].defense}
                </div>
                <Button variant="contained" color="primary">
                    Upgrade
                </Button>
            </Paper>
        </div>
    )
}
