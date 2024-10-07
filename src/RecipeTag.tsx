
interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

function RecipeTag({tagName, onSelectTag}: IRecipeTagProps) {
 

      

  return(
    
        <button onClick={() => onSelectTag(tagName)} style={{width:"100%", height:"100%", backgroundColor:"white", color:"#243548", border:"solid   1px black", borderRadius:"0"}} >
      <h2>{tagName}</h2>
      </button>
    
 
  );
}

export default RecipeTag;
