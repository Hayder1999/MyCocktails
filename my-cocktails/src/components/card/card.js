import { makeStyles } from '@material-ui/core/styles';
import MuiCard from '@material-ui/core/Card';
import MuiCardActionArea from '@material-ui/core/CardActionArea';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiCardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    title: {
        fontWeight: 800
    },
    subtitle: {
        fontWeight: 500,
        color: '#6d7278'
    }
});

const Card = (props) => {
    const classes = useStyles();
    const { title, subtitle, img } = props;
    return (
        <MuiCard className={ classes.root }>
            <MuiCardActionArea>
                <MuiCardMedia
                    component="img"
                    className={ classes.media }
                    image={img}
                    title={title}
                    alt={title}
                />
                <MuiCardContent>
                    <Typography component="h1" className={classes.title}>
                        { title }
                    </Typography>
                    <Typography component="h2" className={classes.subtitle}>
                        { subtitle }
                    </Typography>
                </MuiCardContent>
            </MuiCardActionArea>
        </MuiCard>
    );
};

export default Card;