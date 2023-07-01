export const intialState = {
   
    filters:"name",
    search:""
}

export const reducer = (state, action) =>{
    switch(action.type){

    case "_INPUT" : return{...state, search:action.payload}
    case "_Catgory_" : return{...state, filters:action.payload}


        default: return state
    }


        

    
}