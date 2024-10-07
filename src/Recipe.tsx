import { useEffect } from "react";

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

interface IRecipeProps {
    recipeData: IRecipe;
    setScreen: (screen: string) => void;

}



function Recipe({recipeData, setScreen}: IRecipeProps) {

    useEffect (() => {
        console.log("Recipe mounted", recipeData);
        return () => {
            console.log("Recipe unmounted", recipeData);
        }
    }
    , [recipeData]);

    return(
        <div style={{border:"1px solid black", padding:"5px", marginTop:"5px"}}>
         
            <h2>
        {recipeData.name}

            </h2>

            <h3>Ingredients</h3>

            <ul>
                {recipeData.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>

            <h3>Instructions</h3>

            <ol>
                {recipeData.instructions.map(instruction => (
                    <li key={instruction}>{instruction}</li>
                ))}
            </ol>

           



        </div>
    )
}

export default Recipe;
