import './Journal.css';

import info from './info.svg';
import warning from './warning.svg';
import danger from './danger.svg';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import userStore from '../../store/userstore/UserStore';

const Journal = observer(() => {
    const [notifications, setNotifications] = useState([]);

    const initNotifications = async () => {
        if(userStore.user != undefined){
            const responce = await axios.get(`http://localhost:5000/notifications/parent-email/dias`);

            console.log(userStore.user.email);
            console.log(responce.data);
            
            if(responce.data == undefined){
                setNotifications([]);
                return;
            }
            setNotifications(responce.data);
        }
    }

    useEffect(() => {
        initNotifications();
    }, [])

    useEffect(() => {
        console.log(notifications);
    }, [notifications])


    return(
        <main>
            <div className='wrapper'>
                <div className='journal'>
                    <p className='journal-title'>Журнал Аудита</p>
                    <div className='journal-header'>
                        <p className='journal-subtitle'>Важность</p>
                        <div className='journal-nav between-center'>
                            <button><div className='journal-rect'><img src={info} alt='' /></div></button>
                            <button><div className='journal-rect'><img src={warning} alt='' /></div></button>
                            <button><div className='journal-rect'><img src={danger} alt='' /></div></button>
                        </div>
                        <input type='text' placeholder='Поиск...' className='journal-input' />
                    </div>
                    <div className='journal-main between-center'>
                        <p className='journal-headers'>Приоритет</p>
                        <div className='journal-devisor' />
                        <p className='journal-headers'>Дата события</p>
                        <div className='journal-devisor' />
                        <p className='journal-headers'>Событие</p>
                        <div className='journal-devisor' />
                        <p className='journal-headers'>Принятые меры</p>
                        <div className='journal-devisor' />
                        <p className='journal-headers'>Детали</p>
                    </div>
                    <div className='journal-datas between-center'>
                        {notifications.map((notification) => {
                            return(
                                <div className='journal-data'>
                                    {
                                        notification.importance == 'high' ? <img src={danger} /> : ''
                                    }
                                    {
                                        notification.importance == 'mid' ? <img src={warning} /> : ''
                                    }
                                    {
                                        notification.importance == 'low' ? <img src={info} /> : ''
                                    }
                                    <p className='journal-headers'>{notification.date}</p>
                                    <p className='journal-headers'>{notification.content}</p>
                                    <p className='journal-headers'>{notification.measures}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
});

export default Journal;