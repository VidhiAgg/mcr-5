import React, { useContext, useState } from 'react'
import "./add.css"
import { RecipieContext } from '../context/RecipieContext'
import { toast } from 'react-toastify'
const AddRecipe = ({setShowAddModal}) => {
 
  const {recepies, setRecpies, generateUniqueId} = useContext(RecipieContext)
  
  const id = generateUniqueId
  const defaultState = {
    id:id,
    image: "",
    name:"",
    ingredients:"",
    instructions:"",
    cusine:""
  }
  const [receData, setReceData] = useState();
  const handleSave = (e)=>{
e.preventDefault();
  
    setRecpies([...recepies, receData])
    setShowAddModal(false);
    toast.success("Added")

  }

  const onAddHandler =(event, field)=>{
    setReceData({ ...receData, [field]: event.target.value });
  }

  const closeHandle = ()=>{
    setReceData(defaultState)
    setShowAddModal(false)
   
  }
  return (
    <div className='modal'>
      <h1>Add Recepie</h1>
      <form className="modal-content" onSubmit={handleSave}>
        <div>
        <label> Recipe Name: <br />
  <input required type="text" onChange={(event) => {
          onAddHandler(event, "name");
        }}/>
</label>
        </div>

        <div>
  <label>
   Cusine:
    <input required type="text" name="image"  
    onChange={(event) => {
      onAddHandler(event, "cusine");
    }}
    />
  </label>
</div>
<div>
<label> Ingredients: <br />
  <textarea required name="ingredient" id="" cols="30" rows="10"
  
  onChange={(event) => {
    onAddHandler(event, "ingredients");
  }}  
  />
</label>
</div>
<div>
<label> Instructions <br />
 <textarea required name="instruction" cols="30" rows="10" 
 onChange={(event) => {
  onAddHandler(event, "instructions");
}}/>
</label>
</div>
<div>
  <label>
    Image URL:
    <input required type="text" name="image"  
    onChange={(event) => {
      onAddHandler(event, "image");
    }}
    />
  </label>
</div>

    <div>
      <button onClick={closeHandle}>Close</button>
      <button>Save</button>
    </div>
    </form>
    </div>
  )
}

export default AddRecipe