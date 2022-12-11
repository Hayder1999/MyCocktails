import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 'auto',
    }
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Typography variant="caption">&#169; Copyright 2022. All rights reserved</Typography>
        </footer>
    )
}

export default Footer;