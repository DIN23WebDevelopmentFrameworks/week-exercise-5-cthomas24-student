import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps { tagList: string[]; onSelectTag: (tagName: string) => void; }

function RecipeTagList({ tagList, onSelectTag }: IRecipeTagListProps) {

    return(
      
<div >

<h2>Choose a tag below</h2>
<div style={{ maxHeight:"60vh", overflow:"auto"}}>
                {tagList.map(tag => (
                  <div key={tag} >
                   
                        <RecipeTag tagName={tag} onSelectTag={onSelectTag} />
                  
                    </div>
                ))}

</div>
</div>
            
        
      
    )
}

export default RecipeTagList;
