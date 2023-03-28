import {NavLink} from 'react-router-dom';
import navstyle from './Navbar.module.css'


function Navbar() {
    const activeStyle = {
        backgroundColor: '#696969',
        color: 'white',
    }

    /* 각 태그마다 버튼 넣고 따로 CSS파일 만들어서 먹이기 */
    return (
        <div className={navstyle.navStyle}>
            <ul>
                <li><NavLink to="/restaurant" style={({isActive}) => isActive? activeStyle: undefined}>가게 목록</NavLink></li>
                <li><NavLink to="/search" style={({isActive}) => isActive? activeStyle: undefined}>검색창</NavLink></li>
                <li><NavLink to="/weather" style={({isActive}) => isActive? activeStyle: undefined}>추천</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;