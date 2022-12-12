# MyCocktails

For creating this project I have used NextJS.
This is because of two main reasons:
1. It addresses the general weakness of Single Page Applications
2. It's built with React in mind.
The weakness that it addresses is bad SEO.
In order to fix the problem of bad SEO, one has to write Single Page Applications which are isomorphic.
This can take alot of work to write out, but NextJS delivers this to us out of the box.
Unfortunately I did have problems with this cocktails API, for some reason whenever I made an request using getServersideProps, the response was sometimes null or an actual drink. I used client side rendering to atleast have something functional. But the most ideal solution was using getStaticPaths.

Jest and React testing library are used for unit testing our application.
JSX-a11y was used for linting on accessibility rules.
Material UI was used to quickly built the React app with a minimal amount of styling.
Convential Commits was used in order to write commit messages in a structured and consistent way.
I kept a folder with components and each component has its own folder. 
The folder contains the component itself and in the case of the button folder, also a file with unit tests.
A utils folder was created for keeping files like the endpoints, validators and some utility functions (getCleanedDrinkObject.js).
A CI pipeline was created so one knows if their changes will break the build or not (if merged).

Some additional things that I would add to this project if I were working in a group/longer on this project:
1. Storybook (for documenting a component and testing it in a separate environment)
2. Cypress (for creating End-to-end tests and integration tests)
3. A config file for prettier (so our code gets nicely formatted)
4. Husky (for setting rules on commits, like having a succesful run of your linters + formatting prettier be a requirement)
5. SonarQube (for static code analysis)

### Instructions for running the project
1. Download and install NodeJS 18.x.x (you can also try with lower versions, but don't go lower than 16)
2. Clone the project
3. Change your directory to 'my-cocktails'
4. Run in your terminal 'npm install'
5. Run in your terminal after the installation 'npm run dev'
