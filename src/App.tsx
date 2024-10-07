import React, { useState, useEffect } from 'react';
import RecipeTag from './RecipeTag';
import RecipeTagList from './RecipeTagList';
import Recipe from './Recipe';
import RecipeList from './RecipeList';

interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const App = () => {
  const [screen, setScreen] = useState('home');
  const [tagList, setTagList] = useState([]);
  const [chosenTag, setChosenTag] = useState<string | null>(null);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [chosenRecipe, setChosenRecipe] = useState<IRecipe | null>(null);
  const [recipeData, setRecipeData] = useState<IRecipe | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(res => res.json())
      .then(data => setTagList(data))
      .catch(error => console.error('Error fetching tags:', error));
  }, []);

  useEffect(() => {
    if (chosenTag) {
      const url = `https://dummyjson.com/recipes/tag/${encodeURIComponent(chosenTag)}`;
      console.log('Fetching recipes from:', url);

      fetch(url)
        .then(res => res.json())
        .then(data => setRecipes(data.recipes))
        .catch(error => console.error('Error fetching recipes:', error));
    } else {
      console.error("Invalid tag:", chosenTag);
    }
  }, [chosenTag]);

  useEffect(() => {
    if (chosenRecipe) {
      fetch('https://dummyjson.com/recipes/' + chosenRecipe.id)
        .then(res => res.json())
        .then(data => setRecipeData(data))
        .catch(error => console.error('Error fetching recipe:', error));
    }
  }, [chosenRecipe]);

  const onSelectTag = (tag: string) => {
    setChosenTag(tag);
    setScreen("recipeList");
  }

  const onSelectRecipe = (recipe: IRecipe) => {
    setChosenRecipe(recipe);
    setScreen("recipe");
  }

  return (
    <div style={{backgroundColor:"white", color:"#243548", height:"80vh",width:"50vw", padding:"5px"}}>
      <h1>ACME Recipe O'Master</h1>
      {screen === "home" && <RecipeTagList tagList={tagList} onSelectTag={onSelectTag} />}
      {screen === "recipeList" && chosenTag && <RecipeList recipes={recipes} setScreen={setScreen} chosenTag={chosenTag}/>}
      {recipeData && screen === "recipe" && <Recipe recipeData={recipeData} setScreen={setScreen} />}
    </div>
  );
};

export default App;
