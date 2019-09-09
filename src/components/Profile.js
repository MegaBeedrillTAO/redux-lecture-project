import React, {Component} from 'react';
import store, {UPDATE_SHOW} from '../store';


export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            favShow: ''
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState({favShow: store.getState().favShow})
        })
    }
    handleChange = e => {
        let action = {
            type: UPDATE_SHOW,
            payload: e.target.value
        }
        store.dispatch(action);
    }
    render() {
        return(
            <div>
                <input placeholder="Favorite Show" onChange={this.handleChange}/>
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <h1>Welcome back, {store.getState().username}</h1>
                <h2>Favorite Movie: {this.state.favShow}</h2>
            </div>
        )
    }
}