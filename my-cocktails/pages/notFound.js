import Error from 'next/error';

const notFound = () => {
    return (
        <Error statusCode="404" title="Recipe for this cocktail could not be found" />
    )
};

export default notFound;