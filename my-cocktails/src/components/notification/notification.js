import MuiAlert from '@material-ui/lab/Alert';

const Notification = (props) => {
    const { message, type } = props;
    return (
        <MuiAlert variant="filled" severity={type}>{message}</MuiAlert>
    )
}

export default Notification;