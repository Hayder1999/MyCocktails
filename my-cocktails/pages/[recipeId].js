import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import { endpoints } from '../src/utils/endpoints';
import axios from 'axios';
import Image from "next/image";
import Grid from '@material-ui/core/Grid';
import { useRouter } from "next/router";
import { Button, LoadingSpinner } from '../src/components/index';
import { useEffect, useState } from "react";
import getCleanedDrinkObject from "../src/utils/getCleanedDrinkObject";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    imageWrapper: {
        position: 'relative',
        height: 'auto',
        maxHeight: '70vh',
        minHeight: '30vh',
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden'
    },
    listStyle: {
        listStylePosition: 'inside',
        paddingLeft: '0',
        marginTop: '0'
    },
    instructions: {
        marginBottom: theme.spacing(2)
    },
    topSection: {
        marginBottom: theme.spacing(3)
    }
}));

const Recipe = () => {
    const classes = useStyles();
    const router = useRouter();
    const [drink, setDrink] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { recipeId } = router.query; 
        axios.get(`${endpoints.cocktailRecipe}?i=${recipeId}`)
            .then((response) => {
                const { data } = response;
                if(data.drinks === null){
                    router.push('/notFound');
                }
                else {
                setDrink(getCleanedDrinkObject(data.drinks[0]));
            }
            })
            .catch(() => router.push('/notFound'))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <div>
            { isLoading ? <LoadingSpinner/> : 
            <main>
                <section className={classes.topSection}>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={6} md={4} l={4}>
                            {
                                drink?.image ? <div className={classes.imageWrapper}>
                                <Image priority={true} src={drink.image} width={700} height={700} layout="responsive" alt={drink.name} />
                            </div> : null
                            }
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h1">{drink.name}</Typography>
                            <Typography variant="subtitle1">Category: {drink.category}</Typography>
                            <Typography variant="subtitle1">Alcoholic: {drink.alcoholic}</Typography>
                            <Button variant="outlined" color="default" text="Back to search" onClick={() => router.push('/')} />
                        </Grid>
                    </Grid>
                </section>
                <Grid container>
                    <Grid item xs={12}>
                        <section>
                            <Typography variant="h6" component="h2">Ingredients</Typography>
                            <ul className={classes.listStyle}>
                                {drink?.ingredients?.map(({ name, measure }, index) => (
                                    <li key={index}>{measure} {name}</li>
                                ))}
                            </ul>
                        </section>
                    </Grid>
                    <Grid item xs={12}>
                        <section>
                            <Typography variant="h6" component="h2">Instructions</Typography>
                            {
                                drink?.instructions?.map((instruction, index) => (
                                    <Typography className={classes.instructions} variant="body2" key={index}>{instruction}</Typography>
                                ))
                            }
                        </section>
                    </Grid>
                </Grid>
            </main>}
        </div>
    );
};

export default Recipe;