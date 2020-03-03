import React, { Component } from 'react';
import User from User;
import Filter from './Filter';

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            userNames: props.users,
        };


        onChange = event => {
            const { name, value } = event.target;

            this.setState({
                [name]: value,
            });
        };

       
        render() {
            return (
                <div>
                    <Filter />
                    <ul className="users">
                        {usersList.map(user => (
                            <User key={name} age={age} />
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
export default UserList