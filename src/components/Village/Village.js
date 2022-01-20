import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import UpgradeField from './UpgradeField'
import UpgradeWindow from '../Upgrade/UpgradeWindow'

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: 'auto',
    },
})

export default function Village({ village }) {
    const classes = useStyles()
    const [openUpgrade, setOpenUpgrade] = React.useState(false)
    const [field, setField] = React.useState({})
    const { tab } = useSelector((state) => state.menuReducer)

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
        </Grid>
    )
}
