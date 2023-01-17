import React from 'react';
import axios from 'axios'

const UsersList = ({usersList, setForm, selectUser, getUsers}) => {

    const orderedList = usersList.sort((a,b) => a.first_name.localeCompare(b.first_name))

    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
        .then(() => getUsers())
    }


    return (
        <div>
            <div className='top'>
            <h2>User List</h2>
            <p><strong>Registered Users</strong>{usersList.length}</p>
            <button onClick={() => setForm(true)}>Add User</button>
            </div>
            {
                orderedList.map((user) => (
                    <div className='card' key={user.id}>
                        <h4>{user.first_name}, {user.last_name}</h4>
                        <br />
                        <p><strong>Email: </strong>{user.email}</p>
                        <p><strong>Birthday: </strong>{user.birthday}</p>
                        <div className='button' onClick={() => selectUser(user)}>
                            <i className='bx bx-edit-alt' ></i>
                        </div>
                        <div className='button' onClick={() => deleteUser(user)}> 
                            <i className='bx bx-trash'></i>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;