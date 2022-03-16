import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import formatMsToTime from '../../lib/formatMsToTime'
import { onUpgradeFinished } from '../../redux/actions/upgradeActions'

const useStyles = makeStyles({
    paper: {
        width: '100%',
        textAlign: 'center',
        padding: '5px',
    },
})

export default function BasicTimer({ timer }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const endTime = timer.displayStartTime + timer.displayLength
    const now = new Date().getTime()
    const [time, setTime] = React.useState(
        endTime - now > 0 ? endTime - now : 0
    )

    React.useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date().getTime()
            setTime(endTime - now > 0 ? endTime - now : 0)
            if (endTime < now) {
                dispatch(onUpgradeFinished(timer, serverConfig))
            }
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <div className={classes.paper}>
            <Paper>
                <div>
                    {timer.field.name} to level {timer.level}
                </div>
                <div>{formatMsToTime(time)}</div>
            </Paper>
        </div>
    )
}
