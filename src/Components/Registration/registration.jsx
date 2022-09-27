import React,  { useEffect, useState }  from 'react';
import {Link, useParams} from 'react-router-dom';
import './registration.css';


const Registration = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(user.password === user.passwordConfirm && user.password != ''){
            console.log(user)
            alert('Užvivatel '+user.username+' byl zaregistrován s e-amilovou adresou: '+user.email)
        }else alert('Špatně vyplněný formulář. Není vyplněný e-mail nebo nesouhlasí hesla.')
    }

    const MailCheck = (e)=>{
        setUser({...user,email:e.target.value})
        if(user.email.includes('@') && user.username === ''){
            setUser({...user,username: user.email.substring(0,user.email.indexOf('@'))})
        }}


    const [user,setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
     })

    return(
        <>
        <form onSubmit={handleSubmit} className='form'>
            <label>
                E-mail Adress: 
                <input  onChange={MailCheck}/>
            </label>
            <label>
                User name: 
                <input readOnly value={user.username}/>
            </label>
            <label>
                Password: 
                <input onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password} type="password"/>
            </label>
            <label>
                Confirm password: 
                <input onChange={(e)=>{setUser({...user,passwordConfirm:e.target.value})}} value={user.passwordConfirm} type="password"/>
            </label>
            <button onSubmit={handleSubmit} type="submit">REGISTER</button>
        </form>
        </>
    )
}

export default Registration;