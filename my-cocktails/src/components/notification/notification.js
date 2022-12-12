import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

const Notification = (props) => {
    const classes = useStyles();
    const { message, type } = props;
    return (
        <div className={classes.root}>
            <MuiAlert variant="filled" severity={type}>{message}</MuiAlert>
        </div>
    )
}

export default Notification;