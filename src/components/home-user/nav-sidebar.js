import React from "react";
import {Link} from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        [theme.breakpoints.down('sm')]: {
            display: "none",
            // flexShrink: 0,
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

const NavSideBar = (props) => {
    const {window, user} = props;
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <h1 className="text-primary">
                    {user.name}
                </h1>
            </div>
            <Divider/>
            <List>
                <ListItem button key={"dashboard"}>
                    {
                        document.URL.endsWith("dashboard") &&
                        <ListItemText primary="Dashboard"/>
                    }
                    {
                        !document.URL.endsWith("dashboard") &&
                        <Link to={"/dashboard"}>Dashboard</Link>
                    }
                </ListItem>
                <ListItem button key={"profile"}>
                    <Link to={"/profile"}>Profile</Link>
                </ListItem>
                <ListItem button key={"allUsers"}>
                    <Link to={"/users"}>Check other users</Link>
                </ListItem>
                <ListItem button key={"logout"} onClick={props.logoutClick}>
                    <ListItemText primary="Logout"/>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={props.mobileOpen}
                        onClose={props.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </>
    )
}
export default NavSideBar