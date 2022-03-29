import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import formatNumber from '../../lib/formatNumber'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    clay: {
        color: 'red',
    },
    wood: {
        color: 'green',
    },
    iron: {
        color: 'blue',
    },
})

export default function Resources() {
    const classes = useStyles()
    const { clay, wood, iron } = useSelector((state) => state.resourcesReducer)
    const { villageId } = useSelector((state) => state.villageMenuReducer)
    const villages = useSelector((state) => state.villagesReducer)
    const [village, setVillage] = useState(undefined)

    useEffect(() => {
        setVillage(villages.find((village) => village.id === villageId))
    }, [villageId])
    return (
        <>
            {village && village.maxResources && (
                <Paper className={classes.root}>
                    <Button className={classes.clay}>
                        <b>
                            Clay: {formatNumber(clay)}/
                            {formatNumber(village.maxResources.clay)}
                        </b>
                    </Button>
                    <Button className={classes.wood}>
                        <b>
                            Wood: {formatNumber(wood)}/
                            {formatNumber(village.maxResources.wood)}
                        </b>
                    </Button>
                    <Button className={classes.iron}>
                        <b>
                            Iron: {formatNumber(iron)}/
                            {formatNumber(village.maxResources.iron)}
                        </b>
                    </Button>
                </Paper>
            )}
        </>
    )
}
