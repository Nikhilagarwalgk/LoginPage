import { AppBar, Button, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
// import Logo from "../../utils/images/SynoFinADMIN.svg"

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuLogin = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#212B36' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography
                        component="div" sx={{ flexGrow: 1 }}>
                        {/* <img src={Logo} alt="Logo"/> */}
                    </Typography>
                    <Button color="inherit" onClick={handleMenuClick}><SupervisedUserCircleIcon /></Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                width: '100px',
                                marginTop: '5px',
                                position: 'sticky'
                            },
                        }}>
                        <MenuItem onClick={handleMenuLogin}><LogoutIcon />Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default Header;