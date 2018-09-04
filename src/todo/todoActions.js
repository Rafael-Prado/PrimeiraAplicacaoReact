import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event =>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.descripion
        const search = description ? `&descripion__regex=/${ description }/` : ''
        const request = axios.get(`${URL}?sort_createAt${search}`)
        .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data }))
    }    
}

export const add = (descripion) => {
    return dispatch => {
        axios.post(URL, { descripion })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const MarkAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

export const MarkAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return { type: 'TODO_CLEAR'}
}