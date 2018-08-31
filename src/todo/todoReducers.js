const INITIAL_STATE = {
    descripion: 'Ler livro',
    list: [{
        _id: 1,
        descripion: 'Pagar fatura',
        done: true
    }, {
        _id: 2,
        descripion: 'Reunião com a equipe',
        done: false
    }, {
        _id: 3,
        descripion: 'Consulta médica na terça',
        done: false
    }]

}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, descripion: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}        
        default:
            return state
    }
}