import {GET_MOVIES,SET_LOADING,GET_MOVIE,GET_SEARCHED_MOVIES,GET_TRAILER,GET_PERSON} from '../Types'
const movieReducer=(state,action)=>{
    switch (action.type) {
        case SET_LOADING:
            return ({...state,loading:true})
        case GET_MOVIES:
            
            return ({...state,movies:action.payload,loading:false})
        case GET_SEARCHED_MOVIES:
            
            return ({...state, searchmovies:action.payload,loading:false})
            case GET_MOVIE:
                return ({...state,movie:action.payload,loading:false})
            case GET_TRAILER:
                return({...state,trailer:action.payload})
            case GET_PERSON:
                return({...state,person:action.payload,loading:false})

        default:
           return state;
    }
}
export default movieReducer