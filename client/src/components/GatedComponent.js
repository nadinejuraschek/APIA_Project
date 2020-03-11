import React, { Component } from 'react';

import axios from 'axios';

import Register from './pages/auth/Register';

class GatedComponent extends Component {
    state = { user: null };

    componentDidMount() {
        // check if user is signed in
        axios.get('/api/user').then(response => {
             this.setState({ user: response.data })
        }).catch(error => {
            console.log('Error: ' + error.message)
        });
    };
  
    render() {
        return (
            <div>
                { this.state.user ? <>{this.props.children}</> : <Register /> }
            </div>
        );
    };
};

export default GatedComponent;