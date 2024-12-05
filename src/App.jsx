import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// src/App.jsx

import { useState } from 'react'
import './App.css';
import IngredientList from './assets/components/IngredientList.jsx';
import BurgerStack from './assets/components/BurgerStack.jsx';

const App = () => {

  // took export oiut
const availableIngredients = [
      { name: 'Kaiser Bun', color: 'saddlebrown' },
      { name: 'Sesame Bun', color: 'sandybrown' },
      { name: 'Gluten Free Bun', color: 'peru' },
      { name: 'Lettuce Wrap', color: 'olivedrab' },
      { name: 'Beef Patty', color: '#3F250B' },
      { name: 'Soy Patty', color: '#3F250B' },
      { name: 'Black Bean Patty', color: '#3F250B' },
      { name: 'Chicken Patty', color: 'burlywood' },
      { name: 'Lettuce', color: 'lawngreen' },
      { name: 'Tomato', color: 'tomato' },
      { name: 'Bacon', color: 'maroon' },
      { name: 'Onion', color: 'lightyellow' },
      { name: 'Cheddar Cheese', color: '#FDE18B' },
      { name: 'Swiss Cheese', color: '#F1E1A8' },
    ];
    

//state for burger stack, and empty array
  const [stack, setStack] = useState([])

  //add an ingredient
  const addIngredient = (ingredient) => {
    setStack([...stack, ingredient])
  }

//remove an ingredient
const removeIngredient = (index) => {
  //filter through the stack array and keep anything that does not match the index of the item I am removing
  const updateStack = stack.filter((_, i) => i !== index);
  //update stack
  setStack(updateStack)
}

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      {/* List & Stack components */}
      <IngredientList 
        ingredients={availableIngredients} //passes the ingredients to the child
        addIngredient={addIngredient} // passes the addIngredient function to the child
        />
      <BurgerStack 
        stack={stack} //passes the stack array
        removeIngredient={removeIngredient} // passes the remove ingredient function
      />
      </section>
    </main>
  );
};

export default App;
