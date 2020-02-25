import React, { Component } from 'react';
import User from './User'
import Pagination from './Pagination'

class UsersList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 0,
        }
    }
    
    goPrev = () => {

        this.setState({
            currentPage: this.state - 1,
        });
    }

    goNext = () => {

        this.setState({
            currentPage: this.state + 1,
        });
    }


    render() {

        let usersList = this.props.users
            .slice(this.state.currentPage * 3, this.state.currentPage * 3 + 3)
            .sort((a, b) => a.age - b.age);


        return (
            <div>
                <Pagination
                    goPrev={this.state.goPrev}
                    currentPage={this.state.currentPage}
                    totalItems={this.props.users.length}
                    itemsPerPage={this.state.Users}
                    goNext={this.state.goNext}
                />

                <ul className="users">
                    {usersList.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}


export default UsersList;