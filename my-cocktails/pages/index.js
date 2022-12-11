import axios from 'axios';
import Head from 'next/head';
import { endpoints } from '../src/utils/endpoints';
import { useState } from 'react';
import { cocktailNameValidator } from '../src/utils/validators';
import { Search } from '../src/components/index';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  searchSection: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '40%'
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailNameIsValid, setCocktailIsValid] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const onCocktailNameChange = (event) => {
    setCocktailName(event.target.value);
    validateCocktailName(event.target.value);
  };

  const validateCocktailName = (cocktailName) => {
    if (cocktailNameValidator.test(cocktailName)) {
      setCocktailIsValid(true);
    }
    else {
      setCocktailIsValid(false);
    }
  };

  const submitCocktailName = () => {
    if (cocktailNameIsValid) {
      axios.get(`${endpoints.searchCocktail}?s=${cocktailName}`)
        .then(result => {
          if (result.data.drinks?.length === 0) {
            setShowNoResults(true);
          }
          else {
            setShowNoResults(false);
          }
          setCocktails(result.data.drinks);
        })
        .catch((error) => console.log(error))
    }
  };


  return (
    <div>
      <Head>
        <title>Cocktails4You</title>
        <meta name="description" content="a place to search your favorite cocktails" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={ classes.searchSection }>
          <Search value={cocktailName} showValidationError={!cocktailNameIsValid} onValueChangeHandler={onCocktailNameChange} onSearchHandler={submitCocktailName} />
          {
            showNoResults ? <Typography variant="body1">No results found</Typography> : null
          }
        </section>
      </main>
    </div>
  );
};
export default Home;