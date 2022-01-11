import React from 'react'
import { useSelector } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Menu from './components/Menu'
import Profile from './components/Profile'
import Village from './components/Village'

export default function App() {
    const { tab } = useSelector((state) => state.menuReducer)
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Menu />
                {tab === 0 && <Profile />}
                {tab === 1 && <Village />}
                <Typography component="div" />
            </Container>
        </React.Fragment>
    )
}
