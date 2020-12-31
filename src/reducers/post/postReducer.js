import axios from "axios"

export const types = {
  GET_POST: "GETPOST"
}

export const getPosts = () => async dispatch => {
  try {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    dispatch({
      type: types.GET_POST,
      payload: posts.data
    })
  } catch (error) {
    console.log(error)
  }
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