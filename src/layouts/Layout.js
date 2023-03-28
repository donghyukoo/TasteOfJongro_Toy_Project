import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Outlet} from 'react-router-dom';
import Footer from '../components/Footer';

function Layout() {
    return(
        <div>
            <Header/>   {/* 전체 고정 타이틀 */}
            <Navbar/>   {/* 검색, 추천, 메인 등 버튼 */}
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
