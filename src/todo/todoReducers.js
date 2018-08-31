const INITIAL_STATE = {
    descripion: '', list: []
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, descripion: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}  
        case 'TODO_ADDED':
            return { ...state, descripion: '' }
        default:
            return state
    }
}