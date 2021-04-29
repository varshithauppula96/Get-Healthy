import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import NavSideBar from "./nav-sidebar";
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import MealTable from "./meal-table";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        width: "inherit"
    },
    hide_above_sm: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    horizontalItems: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

function UserHome({user, logoutClick}) {
    const classes = useStyles();

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [dateValue, setDateValue] = React.useState(new Date())

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6"
                                className={classes.hide_above_sm}>
                        {user.name}
                    </Typography>
                </Toolbar>
            </AppBar>

            <NavSideBar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} logoutClick={logoutClick} user={user}/>

            <main className={classes.content}>
                <div className={classes.toolbar}/>

                <div className={classes.horizontalItems}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date"
                            value={dateValue}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>

                <div>
                    <MealTable dateValue={dateValue} user={user}/>
                </div>
            </main>
        </div>
    )
}

export default UserHome;
