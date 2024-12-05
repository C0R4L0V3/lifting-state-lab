import { useState } from "react";

const BurgerStack = ({ stack, removeIngredient }) => {
    
    return (
        <div id='Burger'>
            <h3>Your Burger</h3>
                {stack.length === 0 
                    ? <p>No Ingredients</p>
                    :
            <ul>
                {/* map through props.ingredients */}
                {/* burger was building top down */}
                {stack
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
                    .slice() // makes a shallow copy of the array
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
                    .reverse() // reveses the array to render bottom up
                    .map((ingredient, index) => (       // map through array
            <li key={index} style={{ backgroundColor: ingredient.color }}>
                <p>{ingredient.name}</p>
                <button onClick={() => removeIngredient(ingredient)}>X</button>
            </li>
            ))}
        </ul>
        }
        </div>
    )

}

export default BurgerStack 