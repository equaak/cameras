import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

import logo from './logo.svg';
import userStore from '../../store/userstore/UserStore';
import { observer } from 'mobx-react-lite';
import Dropdown from '../dropdown/Dropdown';

const Layout = observer(() => {
    return(
        <main>
            <div className='wrapper'>
                <header className='layout-header between-center'>
                    <Link to='/'>                    
                        <div className='layout-logo between-center'>
                            <img src={logo} alt=''/>
                            <p className='logo-title'><span>Agro</span>cam</p>
                            <div className='layout-devisor'/>
                            <p className='logo-subtitle'>Безопасность <br></br>вашего ребенка</p>
                        </div>
                    </Link>
                    <div className='layout-nav between-center'>
                        <Link to='/solutions'><p>Решения</p></Link>
                        <Link to='/price'><p>Цены</p></Link>
                        <Link to='/us'><p>О нас</p></Link>
                    </div>
                    {userStore.user == undefined ? 
                    
                    <div className='layout-buttons between-center'>
                        <Link to='auth'><button className='white'>Войти</button></Link>
                        <Link to='auth'><button className='green'>Зарегистрироваться</button></Link>                        
                    </div>
                
                    :
                        <Dropdown />
                    }
                   
                </header>
            </div>
            <Outlet />
        </main>
    )
});

export default Layout;