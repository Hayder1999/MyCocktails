import axios from 'axios';
import Head from 'next/head';
import { endpoints } from '../src/utils/endpoints';
import { cocktailNameValidator } from '../src/utils/validators';
import { useState, useEffect } from 'react';
import { Search, Card, Notification, LoadingSpinner } from '../src/components/index';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  searchSection: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '40%'
    }
  },
  cocktailsSection: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
    '& a': {
      textDecoration: 'none'
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  const [cocktailName, setCocktailName] = useState('');
  const [cocktailNameIsValid, setCocktailIsValid] = useState(true);
  const [cocktails, setCocktails] = useState([]);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [randomCocktailError, setRandomCocktailError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


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

  const onSubmitCocktailName = () => {
    setIsLoading(true);
    if (cocktailNameIsValid) {
      axios.get(`${endpoints.searchCocktail}?s=${cocktailName}`)
        .then(result => {
          if (result.data.drinks === null) {
            setCocktails([]);
            setNoResultsFound(true);
          }
          else {
            setNoResultsFound(false);
            setCocktails(result.data.drinks);
          }
          setSearchError(false)
        })
        .catch(() => setSearchError(true))
        .finally(() => setIsLoading(false))
    }
  };

  useEffect(() => {
    axios.get(endpoints.randomSingleCocktail)
      .then(response => setCocktails(response.data.drinks))
      .catch(() => setRandomCocktailError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <Head>
        <title>Cocktails4You</title>
        <meta name="description" content="a place to search your favorite cocktails" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={classes.searchSection}>
          <Search value={cocktailName} noResultsFound={noResultsFound} validationError={!cocktailNameIsValid} onValueChangeHandler={onCocktailNameChange} onSearchHandler={onSubmitCocktailName} />
          {
            searchError ? <Notification type="error" message="Something went wrong while searching, try again later!" /> : null
          }
          {
            randomCocktailError ? <Notification type="error" message="Could not retrieve a random cocktail, try again later!" /> : null
          }
        </section>
        <section>
        { isLoading ? <LoadingSpinner /> : 
          <Grid container spacing={2} className={classes.cocktailsSection} alignItems="stretch">
            {cocktails.map(cocktail => (
              <Grid item xs={12} sm={4} md={3} lg={2} key={cocktail.idDrink}>
                <Link href={`/${cocktail.idDrink}`} legacyBehavior={true} passHref={true}>
                  <a>
                    <Card title={cocktail.strDrink} subtitle={cocktail.strCategory} img={cocktail.strDrinkThumb} />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
          }
        </section>
      </main>
    </div>
  );
};
export default Home;