import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UpgradeField from './Upgrades/UpgradeField'
import UpgradeWindow from './Upgrades/UpgradeWindow'
import { onSetResources } from '../../redux/actions/resourcesActions'
import getResources from '../../lib/getResources'
import BasicTimer from './BasicTimer'
import Bars from '../AppBars/Bars'
import { onSetField } from '../../redux/actions/villageMenuActions'

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: 'auto',
    },
})

export default function Village() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [openUpgrade, setOpenUpgrade] = React.useState(false)
    const { field } = useSelector((state) => state.fieldReducer)
    const { village } = useSelector((state) => state.villageMenuReducer)
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
        dispatch(onSetField(field))
    }

    function closeUpgradeWindow() {
        setOpenUpgrade(false)
    }

    return (
        <>
            <Bars />
            <Grid container className={classes.root}>
                {tab === 1 &&
                    village.fields
                        .filter((field) =>
                            ['clay', 'iron', 'wood'].includes(field.type)
                        )
                        .map((field) => (
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                lg={3}
                                key={field.id}
                            >
                                <UpgradeField
                                    field={field}
                                    openUpgradeWindow={openUpgradeWindow}
                                />
                            </Grid>
                        ))}
                {tab === 2 &&
                    village.fields
                        .filter(
                            (field) =>
                                !['clay', 'iron', 'wood'].includes(field.type)
                        )
                        .map((field) => (
                            <Grid
                                item
                                xs={6}
                                sm={4}
                                md={3}
                                lg={3}
                                key={field.id}
                            >
                                <UpgradeField
                                    field={field}
                                    openUpgradeWindow={openUpgradeWindow}
                                />
                            </Grid>
                        ))}
                {field && (
                    <UpgradeWindow
                        open={openUpgrade}
                        field={field}
                        closeWindow={closeUpgradeWindow}
                        village={village}
                    />
                )}

                {village.timers.map((timer) => (
                    <BasicTimer timer={timer} key={timer.id} />
                ))}
            </Grid>
        </>
    )
}
