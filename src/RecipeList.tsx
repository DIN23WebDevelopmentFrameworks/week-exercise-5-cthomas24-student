import Recipe from "./Recipe";

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

interface IRecipeListProps {
    recipes: IRecipe[];
    setScreen: (screen: string) => void;
    chosenTag: string;
}

function RecipeList(
    {recipes, setScreen, chosenTag}: IRecipeListProps
){

    return(
        <div style={{ maxHeight:"60vh", overflow:"auto"}}>
        <h2 style={{color:"#243548"}}>Recipes for {chosenTag}</h2>
        <button  style={{backgroundColor:"#F9F9F9", color:"black"}} onClick={() => setScreen("home")}>Back</button>
        {recipes.map(recipe => (
            <Recipe recipeData={recipe} setScreen={setScreen}/>
        ))}

        

   
        </div>
    )
}

export default RecipeList;
