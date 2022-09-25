import React,  { useEffect, useState }  from 'react';
import {Link, useParams} from 'react-router-dom';
import './registration.css';


const Registration = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(user.password === user.passwordConfirm){
            console.log(user)
            alert('Užvivatel '+user.username+' byl zaregistrován s e-amilovou adresou: '+user.email)
        }else alert('Hesla nesouhlasí.')
    }

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
                <input  onChange={(e)=>{
                                    setUser({...user,email:e.target.value})
                                    if(user.email.includes('@') && user.username === ''){
                                        setUser({...user,username: user.email.substring(0,user.email.indexOf('@'))})
                                    }
                                    }}/>
            </label>
            <label>
                User name: 
                <input readOnly value={user.username}/>
            </label>
            <label>
                Password: 
                <input onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password}/>
            </label>
            <label>
                Confirm password: 
                <input onChange={(e)=>{setUser({...user,passwordConfirm:e.target.value})}} value={user.passwordConfirm}/>
            </label>
            <button onSubmit={handleSubmit} type="submit">REGISTER</button>
        </form>
        </>
    )
}

export default Registration;