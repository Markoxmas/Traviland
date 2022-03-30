import { useSelector } from 'react-redux'
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

export default function UnitUpgradeRow({ unit }) {
    const classes = useStyles()
    const { village } = useSelector((state) => state.villageMenuReducer)
    const { field } = useSelector((state) => state.fieldReducer)
    return (
        <div className={classes.paper}>
            {village && field && (
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
            )}
        </div>
    )
}
