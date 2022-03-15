import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import getBasicVillage from '../getBasicVillage'
import mockLoad from '../mockLoad'
import mockConfig from '../mockConfig'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

export default function OutlinedButtons() {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleClick = () => {
        const id = 1
        const village = getBasicVillage(id, 'Village 1')
        axios
            .put(`http://localhost:4000/serverConfig`, mockConfig)
            .then((response) => {
                axios
                    .delete(`http://localhost:4000/villages/${id}`)
                    .then((response) => {
                        axios
                            .post(`http://localhost:4000/villages/`, village)
                            .then((response) => {
                                dispatch(
                                    mockLoad(
                                        {
                                            id: 1,
                                            villageIds: [1],
                                        },
                                        dispatch
                                    )
                                )
                            })
                            .catch((error) => console.log(error))
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={handleClick}>
                Restart
            </Button>
        </div>
    )
}
