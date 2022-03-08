import React from 'react'
import { useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import { onSetVillage } from '../../redux/actions/villageMenuActions'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

export default function VillagesList({ villages, village }) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (newId) => {
        if (typeof newId === 'number') {
            dispatch(onSetVillage(newId))
        }
        setAnchorEl(null)
    }

    return (
        <Paper>
            <Button color="primary" onClick={handleClick}>
                {village.name}
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {villages.map((village) => (
                    <StyledMenuItem key={village.id}>
                        <ListItemText
                            primary={village.name}
                            onClick={() => handleClose(village.id)}
                        />
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </Paper>
    )
}
