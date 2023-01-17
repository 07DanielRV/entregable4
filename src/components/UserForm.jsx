import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({setForm, getUsers, userSelected, setUserSelected}) => {

    const {handleSubmit, register, reset} = useForm()
    const inputNull = {first_name: "", lasta_name : "", email: "", password: "", birthday: ""}

        useEffect(() => {
            if(userSelected){
                reset(userSelected)
            }else{
                reset(inputNull)
            }
        },[userSelected])

        const submit =(data) => {
            if (userSelected){
                axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    closeForm()
                })
            }else{
                axios.post(`https://users-crud.academlo.tech/users/`, data)
                .then(() => {
                    getUsers()
                    closeForm()
                })
            }
        }

        const closeForm = () => {
            setForm(false)
            setUserSelected(null)
            
        }

    return (
        <div className='form'>
            <button onClick={() => closeForm()}>Close</button>
            <h3>Form</h3>
            <form onSubmit={handleSubmit (submit)}>
                <input placeholder='Name' type="text" id="first_name" {...register("first_name")}/>
                <input placeholder='Last Name' type="text" id="last_name" {...register("last_name")}/>
                <input placeholder='Email' type="email" id="email" {...register("email")}/>
                <input placeholder='Password' type="password" id="password" {...register("password")}/>
                <input type="date" id="birthday" {...register("birthday")}/>

                <button type="submit">{userSelected ? "Update" : "Create User"}</button>

            </form>
        </div>
    );
};

export default UserForm;