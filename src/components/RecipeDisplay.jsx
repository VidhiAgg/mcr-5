import React, { useContext } from 'react'
import "./add.css"
import { Delete } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { RecipieContext } from '../context/RecipieContext';
import { toast } from 'react-toastify';
const RecipeDisplay = (data) => {
    const {recepies, setRecpies} = useContext(RecipieContext);
    console.log(data);
    const {id,name, cusine, image} = data;
    const navigate = useNavigate();

    const handleDelete =() =>{
      const upatedList =   recepies?.filter(data => data.id !== Number(id));
      setRecpies(upatedList);
      toast.success("Delete")
    }
  return (
    
    <div className='container' >
        <div className="image-container">
            <img src={image} width="200px" height="300px" alt="" />
            <button onClick={handleDelete}><Delete /></button>
        </div>
<div className="conte" onClick={()=> navigate(`recipe/${id}`)}>
    <h3>{name}</h3>
    <p className='content-p'>
        <span>Cusine Type:</span>
        <span>{cusine}</span>
    </p>
    <p className='content-p'>
        <span>Ingredients:</span>
        <span>See Recipe</span>
    </p>
    <p className='content-p'>
        <span>Instructions:</span>
        <span>See Recipe</span>
    </p>
</div>
    </div>
  )
}

export default RecipeDisplay