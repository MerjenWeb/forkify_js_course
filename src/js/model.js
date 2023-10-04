export const state = {
  recipe: {},
};

// This function is not going to return anything, all it will do is to change our state object
export const loadRecipe = async function (id) {
  try {
    // fetch function returns a promise, and since we are in an async function, we can then await that promise
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // and once we have that result, we convert that to json
    const data = await res.json();
    // throwing the error
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    // we have recipe on both sides, so we can use destructuring
    // let recipe = data.data.recipe;
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err);
  }
};
