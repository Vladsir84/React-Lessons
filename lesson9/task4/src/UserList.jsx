import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            userNames: props.users,
        };

    }
        onChange = event => {
            const { name, value } = event.target;

            const arr = this.props.users.filter(user => user.name.toLowercase())                       
            
            this.setState({
                [name]: value,
                userNames: arr,
            });
        };

       
        render() {
            return (
                <div>
                    <Filter count={this.state.name} 
                            onChange={this.onChange}
                            filterText={this.state.name}
                    />
                    <ul className="users">
                        {this.state.userNames.map(({name, age}) => 
                            <User key={name} age={age} />
                        )}
                    </ul>
                </div>
            );
        }
    }

export default UserList