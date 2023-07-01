import { AddCircleOutline } from '@mui/icons-material';
import React, { useContext, useState } from 'react'
import AddRecipe from '../components/AddRecipe';
import { RecipieContext } from '../context/RecipieContext';
import RecipeDisplay from '../components/RecipeDisplay';

const HomePage = () => {
    const[showAddMoal, setShowAddModal] = useState(false);
    const {recepies,sortedResult, recipeDispatch
    } = useContext(RecipieContext);
const handleAddNewClick = ()=>{
    setShowAddModal(true);
   
}
console.log(recepies);

  return (
    <div className='home-page'>
        <div className="search-conatiner">
            <div className="search-field">
                <label htmlFor="search-input"></label>
                    <input type="text" id="search-input"
                    placeholder='Search the item you want' 
                    onChange={(event=> recipeDispatch({type:"_INPUT", payload:event.target.value}))}/>
               
            </div>
            <div className="filter-container">
                <span>Filters: </span>
                <label >
    <input type="radio" value="name" name="filter"  onChange={(event=> recipeDispatch({type:"_Catgory_", payload:event.target.value}))}  />Name</label>
    <label >
    <input type="radio" value="ingredients" name="filter" 
    
    onChange={(event=> recipeDispatch({type:"_Catgory_", payload:event.target.value}))}
    
    />Ingredients</label>
    <label >
    <input type="radio" value="cusine" name="filter"  
    
    onChange={(event=> recipeDispatch({type:"_Catgory_", payload:event.target.value}))}
    
    />Cusine</label>
            </div>
        </div>
        <div className="header">
            <h1>All Recipes: </h1>
        </div>
        <div className="main-conatiner">
            <div className="display">
            {
                sortedResult?.length> 0  ?
                sortedResult.map(data=> <RecipeDisplay {...data} key ={data.id}/> )
                 :
                <p>No data found</p>
            }
            </div>
            <div className="add-container">
                <button onClick={handleAddNewClick}>
                    <AddCircleOutline /></button>
            </div>
            </div>

            {
                showAddMoal &&  <AddRecipe setShowAddModal={setShowAddModal}/>
            }
    </div>
  )
}

export default HomePage