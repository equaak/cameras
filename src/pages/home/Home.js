import './Home.css';
import camera from './camera.png';
import triangle from './triangle.svg';
import device from './Device - Macbook Pro.png';
import phone from './phone.png';
import prot from './prot.png';
import infinity from './infinity.png';
import keyboard from './keyboard.png';
import userStore from '../../store/userstore/UserStore';

const Home = () => {
    return(
        <main>
            <div className='main-block between-center'>
                <div className='main-left'>
                    <p className='main-subtitle'>Встречайте Argocam</p>
                    <p className='main-title'>HD Умная Видеокамера <br></br>Безопасности</p>
                    <p className='main-text'>Argocam -- это премиумная камера, микрофон и спикер, который обеспечивает самый безопасный опыт для вашего ребенка в разных средах.</p>
                    <button className='main-button'>Добавить в корзину</button>
                </div>

                <div className='main-right between-center'>
                    <img className='main-triangle' src={triangle} alt=''/>
                    <p>Посмотреть <br></br> видеоролик</p>
                    <img className='main-camera' src={camera} alt=''/>
                </div>
            </div>

            <div className='protect-block'>
                <div className='wrapper between-center'>
                    <div className='protect-left'>
                        <p className='protect-title'>Защити своего ребенка</p>
                        <p className='protect-subtitle'>Повысьте уровень безопасности своего ребенка с помощью инновационных технологий в области видеонаблюдения, автоматического определения и предупреждения случаев насилия.</p>
                    </div>
                    <div className='protect-right'>
                        <img className='protect-device' src={device} alt='' />
                    </div>  
                </div>
            </div>

            <div className='be-block'>
                <div className='between-center'>
                    <img src={phone} alt='' />
                    <div className='be-right'>
                        <p className='be-title'>Будьте там откуда угодно</p>
                        <p className='be-subtitle'>Мы понимаем, насколько важна безопасность детей в образовательных учреждениях. Наша система разработана для того, чтобы обеспечить максимально быстрое реагирование на случаи насилия и предоставить все необходимые данные для решения проблемы.</p>
                    </div>
                </div>
            </div>

            <div className='stage-block'>
                <div className='stage-up between-center'>
                    <div className='up-circle'>1</div>
                    <div className='up-devisor' />
                    <div className='up-circle'>2</div>
                    <div className='up-devisor' />
                    <div className='up-circle'>3</div>
                </div>
                <div className='stage-down between-center'>
                    <div className='stage-desc'>
                        <p className='desc-title'>Купи</p>
                        <p className='desc-subtitle'>Найдите камеру в нашем ассортименте, которая удостоверит вас в безопасности вашего ребенка.</p>
                    </div>
                    <div className='stage-desc'>
                        <p className='desc-title'>Поставь</p>
                        <p className='desc-subtitle'>Установите камеры сами или с помощью наших онлайн специалистов</p>
                    </div>
                    <div className='stage-desc'>
                        <p className='desc-title'>Убедись</p>
                        <p className='desc-subtitle'>В случае инцидента система автоматически сохранит видеоматериал и отправит уведомления</p>
                    </div>
                </div>
            </div>

            <div className='receive-block'>
                <p className='receive-title'>Вы получаете</p>
                <div className='receive-desc'>
                    <div>
                        <img src={prot} alt='' />
                        <p>Безопасность ваших детей</p>
                    </div>
                    <div>
                        <img src={infinity} alt='' />
                        <p>Мгновенную помощь при любой опасности</p>
                    </div>
                    <div>
                        <img src={keyboard} alt='' />
                        <p>Доступность из любой точки мира</p>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;