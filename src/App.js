import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Menu from './components/Menu'
import Profile from './components/Profile'
import Villages from './components/Village/Villages'
import Reports from './components/Reports'
import { onLoadData } from './redux/actions/loadDataActions'
import { onSetMenu } from './redux/actions/menuActions'

export default function App() {
    const { tab } = useSelector((state) => state.menuReducer)
    const user = useSelector((state) => state.userReducer)
    const { pending } = useSelector((state) => state.serverConfigReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(onLoadData(user))
        dispatch(onSetMenu(1))
    }, [])
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Menu />
                {tab === 0 && !pending && <Profile />}
                {tab === 1 && !pending && <Villages />}
                {tab === 2 && !pending && <Villages />}
                {tab === 3 && !pending && <Reports />}
                <Typography component="div" />
            </Container>
        </React.Fragment>
    )
}
