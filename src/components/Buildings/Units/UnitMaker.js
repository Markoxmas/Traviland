import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import UnitRow from './UnitRow'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}))

export default function UnitMaker() {
    const classes = useStyles()
    const { field } = useSelector((state) => state.fieldReducer)
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const { villageId } = useSelector((state) => state.villageMenuReducer)
    const villages = useSelector((state) => state.villagesReducer)
    const [village, setVillage] = useState(undefined)
    const units =
        field.type === 'barracks'
            ? ['dog', 'cat', 'lizard', 'pidgeon']
            : ['horse', 'catapult', 'aligator']

    useEffect(() => {
        setVillage(villages.find((village) => village.id === villageId))
    }, [villageId])

    return (
        <div className={classes.root}>
            {village && field && (
                <Grid>
                    <Grid>
                        <div className={classes.demo}>
                            <List>
                                {units.map((unit) => (
                                    <UnitRow
                                        village={village}
                                        serverConfig={serverConfig}
                                        field={field}
                                        unit={unit}
                                        key={field.type + unit}
                                    />
                                ))}
                            </List>
                        </div>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}
