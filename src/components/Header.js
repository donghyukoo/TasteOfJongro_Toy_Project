import {Link} from 'react-router-dom';
import HeaderStyle from './Header.module.css';

function Header() {
    return (
        <div className={HeaderStyle.HeaderStyle}>
        <Link to={"/restaurant"} style={{textDecoration: 'none'}} >
                <h1>종로의 맛</h1>
        </Link>
        </div>
    );

}

export default Header;