import { useState } from 'react';
import './Auth.css';
import img from './Group 206.svg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import userStore from '../../store/userstore/UserStore';

const Auth = () => {
    const [authType, setAuthType] = useState(0)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')
    const [iin, setIin] = useState('')

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (email === '' || password === '') {
            return;
        }
        const responce = await axios.post('http://localhost:5000/auth/login/customer', {email: email, password: password, iin: iin})
        if(responce.data !== undefined){
            userStore.setUser(responce.data[1]);
            userStore.setToken(responce.data[0]);
            console.log(responce.data);
            navigate('/');
        }
    }

    const handleSignUp = async () => {
        if (email === '' || password === '' || firstname === '' || lastname === '' || phone === '' || iin === ''){
            //, {firstname: firstname, lastname: lastname, email: email , phone: phone, password: password, phoneNumber: phone, address: '', iin: iin}
            if(iin.length !== 0) return;
            return;
        }
        console.log(email, password, firstname, lastname, phone, iin)
        
        const responce = await axios.post('http://localhost:5000/auth/registration/customer', {firstName: firstname, lastName: lastname, middleName: '', phoneNumber: phone, address: 'asdfasdf' , email: email, iin: iin, password: password, telegramUsername: ''})
        console.log(responce);
        if(responce.data !== undefined){
            userStore.setUser(responce.data[1]);
            userStore.setToken(responce.data[0]);
            navigate('/');
        }
    }

    const handleClick = () => {
        if(authType === 0){
            setAuthType(1);
        }

        else{
            setAuthType(0);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleIIN = (e) => {
        setIin(e.target.value);
    }

    return(
        <main className='wrapper'>
            <div className={authType === 1 ? 'auth-type left' : 'auth-type right'}>
                {authType === 1 ? <button className='auth-button' onClick={handleClick}>Войти</button> : <button className='auth-button' onClick={handleClick}>Зарегистрироваться</button>}
            </div>
            <div className='auth-content'>
                <img src={img} alt='' />
                <p className='auth-title'>Давайте начнем!</p>
                {authType === 1 ? 
                <>
                    <input className='pink-input' placeholder='Ваш эл.адрес' value={email} onChange={handleEmail}></input>
                    <input className='white-input' placeholder='Пароль' type='password' value={password} onChange={handlePassword}></input>
                    <button className='auth-button' onClick={handleLogin}>Войти</button>
                </> 
                : 
                <>
                    <input onChange={handleEmail} value={email} className='pink-input' placeholder='Ваш эл.адрес'></input>
                    <div className='auth-inputs'>
                        <input className='white-input' placeholder='Имя' value={firstname} onChange={handleFirstname}></input>
                        <input className='white-input' placeholder='Фамилия' value={lastname} onChange={handleLastname}></input>
                    </div>
                    <input className='pink-input' placeholder='Пароль' value={password} onChange={handlePassword}></input>
                    <input className='white-input' placeholder='Номер телефона' value={phone} onChange={handlePhone}></input>

                    <p className='input-label'>ИИН</p>
                    <input className='pink-input' placeholder='Пример. 061130550327' value={iin} onChange={handleIIN}></input>
                    <button className='auth-button' onClick={handleSignUp}>Зарегистрироваться</button>
                </>}
            </div>
        </main>
    )
}

export default Auth;