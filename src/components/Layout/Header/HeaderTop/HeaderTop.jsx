import { Link } from 'react-router-dom';

//media
import { FiPhone } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <nav className="header__top-nav">
          <div className="header__top-menu">
            <Link to={'/'} className="header__top-link">
              Главная
            </Link>
            <Link to={'/about'} className="header__top-link">
              О нас
            </Link>
            <Link to={'/contact'} className="header__top-link">
              Контакты
            </Link>
            <Link to={'/catalog'} className="header__top-link">
              Каталог
            </Link>
          </div>
          <div className="header__top-menu">
            <a href="tel: 8 (964) 89 99 119" className="header__top-link">
              <span>
                <FiPhone />
              </span>
              8 (964) 89 99 119
            </a>
            <a href="#" className="header__top-link">
              <span>
                <TbTruckDelivery />
              </span>
              Доставка
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
