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
            currentPage : this.state.currentPage - 1,
        });
    }

    goNext = () => {

        this.setState({
            currentPage: this.state.currentPage + 1,
        });
    }


    render() {

        const currentPage = this.state.currentPage;
        const usersList = this.props.users.slice(currentPage * 3, currentPage * 3 + 3);


        return (
            <div>
                <Pagination
                    goPrev={this.goPrev}
                    currentPage={this.state.currentPage}
                    totalItems={3}
                    itemsPerPage={2}
                    goNext={this.goNext}
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