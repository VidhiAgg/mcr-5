import React, { createContext, useEffect, useReducer, useState } from 'react'
import { recipes } from '../data/data';
import { intialState, reducer } from '../reducer/RecipeReducer';

export const RecipieContext = createContext();



const RecipieContextProvder = ({children, data=recipes}) => {
    const {state, recipeDispatch} = useReducer(reducer, intialState)
    const [recepies, setRecpies] = useState(data);
    useEffect(() => {
       
        const getRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        setRecpies(getRecipes);
      }, []);


useEffect(()=>{
    localStorage.setItem('recipes', JSON.stringify(recipes));
}, [recepies]);

const generateUniqueId = () => {
    const existingIds = recepies?.map((data) => data.id);
    const maxId = Math.max(...existingIds);
    return maxId + 1;
  };
const sortedResult = state?.search.length> 0 ?
recepies.filter(
    (data) =>
      data[state?.filters]
        .toLowerCase()
        .includes(state?.search.toLowerCase())
  )

:recepies
console.log(sortedResult);

  return (
    <RecipieContext.Provider value={{recepies, setRecpies,
        generateUniqueId,sortedResult,
        state, recipeDispatch}}>
        {children}
    </RecipieContext.Provider>
  )
}

export default RecipieContextProvder