import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import getFieldProduction from '../../../lib/getFieldProduction'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
})

export default function ResourceUpgradeInfo() {
    const classes = useStyles()
    const serverConfig = useSelector((state) => state.serverConfigReducer)
    const { field } = useSelector((state) => state.fieldReducer)

    const production = getFieldProduction(serverConfig, {
        ...field,
        level: field.temporaryLevel,
    })

    return (
        <DialogContent>
            <DialogContentText>
                <Card className={classes.root}>
                    <CardContent>
                        <h3>
                            Next level will increase production from{' '}
                            {production.currentLevel} to {production.nextLevel}
                        </h3>
                    </CardContent>
                </Card>
            </DialogContentText>
        </DialogContent>
    )
}
