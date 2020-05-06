import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {


    constructor(props) {
        super(props)

        this.state = {
            name: '',
            users: props.users,
        };

    }
    onChange = event => {
        const { name, value } = event.target;

        const filters = this.props.users.filter(user => user.name.toUpperCase().includes(value.toUpperCase()));
        
        this.setState({
            [name]: value,
            users: filters,
        });
    };


    render() {

        return (
            <div>
                < Filter count={this.state.users.length}
                    onChange={this.onChange}
                    filterText={this.state.name} />

                <ul className="users">
                {this.state.users.map(user =>
                        <User key={user.id} {...user} />
                    )}
                </ul>
            </div>
        );
    }
}


export default UsersList;