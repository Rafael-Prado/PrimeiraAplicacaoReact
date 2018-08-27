import React from 'react'
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props =>{

    const KeyHandler = (e) => {
        if (e.Key === 'Enter'){
            e.shiftKey ? props.handlerSearch() : props.handleAdd()
        }else if(e.Key === 'Escape'){
            props.handlerClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                    value={ props.description } 
                    onChange={ props.handleChange  }
                    onKeyUp ={ KeyHandler }/>
            </Grid>
    
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                 onClick ={ props.handleAdd }>
                </IconButton>
                <IconButton style='info' icon='search'
                 onClick ={ props.handlerSearch}>
                </IconButton>
                <IconButton style='default' icon='close'
                 onClick ={ props.handlerClear }>
                </IconButton>
            </Grid>
        </div>
    )
}