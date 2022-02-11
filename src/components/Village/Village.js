import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UpgradeField from './UpgradeField'
import UpgradeWindow from '../Upgrade/UpgradeWindow'
import { onSetResources } from '../../redux/actions/resourcesActions'
import getResources from '../../lib/getResources'
import Timer from '../Timer'

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: 'auto',
    },
})

export default function Village({ village }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [openUpgrade, setOpenUpgrade] = React.useState(false)
    const [field, setField] = React.useState({})
    const { tab } = useSelector((state) => state.menuReducer)

    useEffect(() => {
        //when initializing and when changing villages, calculates resources
        dispatch(onSetResources(getResources(village, new Date().getTime())))
        //auto updates resources every second
        const intervalId = setInterval(() => {
            dispatch(
                onSetResources(getResources(village, new Date().getTime()))
            )
        }, 1000)

        return () => clearInterval(intervalId)
    }, [village])

    function openUpgradeWindow(field) {
        setOpenUpgrade(true)
        setField(field)
    }

    function closeUpgradeWindow() {
        setOpenUpgrade(false)
    }

    return (
        <Grid container className={classes.root}>
            {tab === 1 &&
                village.resourceFields.map((field) => (
                    <Grid item xs={6} sm={4} md={3} lg={3} key={field.id}>
                        <UpgradeField
                            field={field}
                            openUpgradeWindow={openUpgradeWindow}
                        />
                    </Grid>
                ))}
            {tab === 2 &&
                village.buildings.map((field) => (
                    <Grid item lg={3} key={field.id}>
                        <UpgradeField
                            field={field}
                            openUpgradeWindow={openUpgradeWindow}
                        />
                    </Grid>
                ))}
            <UpgradeWindow
                open={openUpgrade}
                field={field}
                closeWindow={closeUpgradeWindow}
                village={village}
            />
            {village.timers.map((timer) => (
                <Timer timer={timer} key={timer.id} />
            ))}
        </Grid>
    )
}
