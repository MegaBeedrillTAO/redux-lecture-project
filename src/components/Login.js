import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {UPDATE_USERNAME} from '../store';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
        let action = {
            type: UPDATE_USERNAME,
            payload: e.target.value
        }
        store.dispatch(action);
        }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input placeholder='Username' onChange={this.handleUsernameChange}/>
                <input placeholder='Password' onChange={this.handlePasswordChange}/>
                <Link to='/profile'>Log in</Link>
            </div>
        )
    }
}