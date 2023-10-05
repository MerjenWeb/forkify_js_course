// Into this file we put all the variables that should be constants and should be reused across the project (the variables that we want here are the ones that are responsible for defining some important data). The goal of having this file with all these variables is that it will allow us to easily configure (формировать) or project by simply changing some data that is here in this configuration file

// Using uppercase. because this constant will never change :
export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd09
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza
export const TIMEOUT_SEC = 30;
export const RES_PER_PAGE = 10;
