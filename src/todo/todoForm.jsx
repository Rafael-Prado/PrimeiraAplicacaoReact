import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.KeyHandler = this.KeyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    KeyHandler(e) {
        if (e.Key === 'Enter') {
            e.shiftKey ? this.props.handlerSearch() : this.props.handleAdd()
        } else if (e.Key === 'Escape') {
            props.handlerClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' placeholder='Adicione uma tarefa'
                        value={ this.props.description }
                        onChange={ this.props.changeDescription }
                        onKeyUp={ this.KeyHandler } />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}>
                    </IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handlerSearch}>
                    </IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handlerClear}>
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.descripion })
const mapDispachToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(TodoForm)