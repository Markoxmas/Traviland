import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import getProductionInfo from '../../lib/getProductionInfo'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

export default function ResourceUpgradeInfo({ field }) {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const production = getProductionInfo(serverConfig, field)
    return (
        <Card className={classes.root}>
            <CardContent>
                <h3>
                    Next level will increase production from{' '}
                    {production.currentLevel} to {production.nextLevel}
                </h3>
            </CardContent>
        </Card>
    )
}
