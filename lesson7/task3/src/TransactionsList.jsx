import React, { Component } from 'react';
import User from './User'

class TransactionsList extends Component {
    state = {
        sorting: null,
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc'
        ? 'desc'
        : 'asc';  
        
        this.setState({
         sorting: newSorting, 
        });
    }
    
    
    
    render() {
        let transactionsList;
        
        if (this.state.sorting) {
            transactionsList = this.props.users.slice().sort((a, b) => 
             this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age
            );
        } else {
            transactionsList = this.props.users;  
        }
        
        return (
            <div>
                <button className="btn" onClick={this.toggleSorting}>
                    {this.state.sorting || '-'  }
                </button>


                <ul className="users">
                    {transactionsList.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}


export default TransactionsList;