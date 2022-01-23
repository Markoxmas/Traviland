import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import formatMsToTime from '../lib/formatMsToTime'
import { onUpgradeFinished } from '../redux/actions/upgradeActions'

function LinearProgressWithLabel(props) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    )
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: 'center',
        border: '2px solid grey',
        borderRadius: '20px',
        padding: '5px',
    },
})

export default function Timer({ timer }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [progress, setProgress] = React.useState(0)
    const [time, setTime] = React.useState(0)

    const updateTimer = () => {
        const now = new Date().getTime()
        const endTime = timer.startTime + timer.length
        const currentLength = endTime - now
        const currentProgress = (1 - currentLength / timer.length) * 100
        setProgress(currentProgress < 100 ? currentProgress : 100)
        currentLength > 0 ? setTime(currentLength) : setTime(0)
    }

    React.useEffect(() => {
        updateTimer()
        const timerId = setInterval(() => {
            updateTimer()
            if (time === 0) {
                dispatch(onUpgradeFinished(timer, dispatch))
            }
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    return (
        <div className={classes.root}>
            <div>
                <div>{formatMsToTime(time)}</div>
                <div>Clay level 4</div>
            </div>
            <LinearProgressWithLabel value={progress} />
        </div>
    )
}
