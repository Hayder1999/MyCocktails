import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Fragment } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        marginBottom: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    validationError: {
        color: 'red'
    },
}));

const Search = (props) => {
    const classes = useStyles();
    const { value, validationError, noResultsFound, onValueChangeHandler, onSearchHandler } = props;
    const onKeyReleasedHandler = (event) => {
        if (event.key === 'Enter') onSearchHandler();
    };
    return (
        <Fragment>
            <Paper className={classes.root} role="search">
                <InputBase
                    id="search"
                    className={classes.input}
                    placeholder="Search a cocktail by name"
                    value={value}
                    onChange={event => onValueChangeHandler(event)}
                    onKeyUp={event => onKeyReleasedHandler(event)}
                />
                <IconButton onClick={onSearchHandler} type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {
                validationError ? <FormHelperText className={classes.validationError} id="search">
                    Please use only letters and spaces in the search
                </FormHelperText> : null
            }
            {
                noResultsFound ? <FormHelperText id="search">
                    No results were found
                </FormHelperText> : null
            }
        </Fragment>
    );
};

export default Search;