


const initialState = {
    auth:[]
}

const authReducer = (state = {}, action) => {
   switch (action.type){
       case 'IS_AUTHORIZED':
           return {
               ...state,
               auth:[...state, action.payload]
           }
       case 'UNAUTHORIZED':
           return {
               ...state,
               auth:[...state, action.payload]
           }
   }

}

export default authReducer;