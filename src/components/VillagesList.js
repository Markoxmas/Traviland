import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemText from '@material-ui/core/ListItemText'
import { onSetVillage } from '../redux/actions/villageMenuActions'

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

export default function VillagesList() {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const { villageId } = useSelector((state) => state.villageMenu)
    const villages = useSelector((state) => state.villagesReducer)
    const chosenVillage = villages.filter(
        (village) => village.id === villageId
    )[0]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (newId) => {
        dispatch(onSetVillage(newId))
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                {chosenVillage.name}
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
        </div>
    )
}
