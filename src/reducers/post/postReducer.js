export const types = {
  GET_POST: "GETPOST"
}

const postReducer = (state=[], action) => {
  switch(action.type){
    case types.GET_POST: 
      return action.payload
    default:
      return state
  }
}

export default postReducer;