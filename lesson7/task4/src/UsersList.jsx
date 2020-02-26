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
        const currentPage1 = this.state.currentPage === 0 
        ? 'disabled' 
        : '';
        
        this.setState({
            currentPage : currentPage1 - 1,
        });
    }

    goNext = () => {
        const currentPage2 = (this.props.currentPage + 1) * 3 >= props.totalItems 
        ? 'disabled' 
        : '';
        
        this.setState({
            currentPage: currentPage2 + 1,
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
                    totalItems={this.props.users.length}
                    itemsPerPage={this.state.usersList}
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