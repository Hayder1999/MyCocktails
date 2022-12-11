import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Link from "next/link";

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(5),
        width: '100%',
    },
    appBar: {
        background: "transparent",
        boxShadow: "none",
        color: "black",
    },
    toolbar: {
        padding: '0'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 'auto',
        cursor: 'pointer',
        '& svg': {
            fill: '#323232'
        }
    },
    logoText: {
        fontWeight: '800'
    },
    nav: {
        display: "flex",
        alignItems: 'center',
        width: '100%',
        "& a": {
            textDecoration: 'none'
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <nav className={classes.nav}>
                        <Link href="/" legacyBehavior={true} passHref={true}>
                            <a>
                                <div className={classes.logo}>
                                    <LocalBarIcon />
                                    <Typography variant="h6" className={classes.logoText}>
                                        Cocktails4You
                                    </Typography>
                                </div>
                            </a>
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
