import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.KeyHandler = this.KeyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    KeyHandler(e) {
        const {add, clear, search, descripion } = this.props
        if (e.Key === 13) {
            e.shiftKey ? search() : add(descripion)
        } else if (e.Key === 'Escape') {
            clear()
        }
    }

    render() {
        const {add, search, description } = this.props
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
                        onClick={ () => add(description) }>
                    </IconButton>
                    <IconButton style='info' icon='search'
                        onClick={ () => search() }>
                    </IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}>
                    </IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.descripion })
const mapDispachToProps = dispatch => bindActionCreators({ add, changeDescription, search , clear}, dispatch)
export default connect(mapStateToProps, mapDispachToProps)(TodoForm)