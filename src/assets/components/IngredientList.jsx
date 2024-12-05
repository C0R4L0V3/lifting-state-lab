

const IngredientList = ({ ingredients, addIngredient }) => {
    console.log(ingredients);
    
    return (
       <> 
        <div id="ingredientList">
            <h2> Ingredients </h2>
        <ul>
            {/* map through props.ingredients */}
            {ingredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                <p>{ingredient.name}</p>
                <button onClick={() => addIngredient(ingredient)}>+</button>
            </li>
            ))}
        </ul>
        </div>
        </>
    )
}

export default IngredientList