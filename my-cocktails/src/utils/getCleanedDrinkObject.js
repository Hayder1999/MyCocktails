const getCleanedDrinkObject = (drink) => {
    const ingredientKeys = Object.keys(drink).filter(key => key.startsWith('strIngredient'));
    const ingredients = ingredientKeys.map(key => drink[key]).filter(ingredient => ingredient !== null);
    const ingredientsWithMeasures = ingredients.map((ingredient, index) => (
        { name: ingredient, measure: drink[`strMeasure${index + 1}`] }
    ));
    const cleanedInstructions = drink.strInstructions.split('\r\n').
        filter(instruction => instruction !== '');
    return {
        name: drink.strDrink,
        ingredients: ingredientsWithMeasures,
        instructions: cleanedInstructions,
        image: drink.strDrinkThumb,
        category: drink.strCategory,
        alcoholic: drink.strAlcoholic
    }

}

export default getCleanedDrinkObject;