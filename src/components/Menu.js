import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { onSetMenu } from '../redux/actions/menuActions'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})

export default function Menu() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { tab } = useSelector((state) => state.menuReducer)

    const handleChange = (event, newValue) => {
        dispatch(onSetMenu(newValue))
    }

    return (
        <Paper className={classes.root}>
            <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Profile" />
                <Tab label="Resources" />
                <Tab label="Buildings" />
                <Tab label="Reports" />
            </Tabs>
        </Paper>
    )
}
