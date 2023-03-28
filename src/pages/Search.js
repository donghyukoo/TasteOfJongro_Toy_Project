import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';       
import {getRestaurantList} from '../api/RestaurantAPI';
import boxStyle from './Restaurant.module.css';
import RestaurantItem from '../components/RestaurantItem';


function Search() {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    useEffect(
        () => {
            setRestaurantList(getRestaurantList());                         
        },
        []
    );

    /* 검색 버튼을 누르면 쿼리스트링 형태로 검색어를 전달한다. */
    const onClickHandler = () => {
        

        /* useNavigate 훅을 이용하여 링크를 이동시킬 수 있다. */
        navigate(`/restaurant/search?categoryName=${searchValue}`);
    };

    const style = {
        marginLeft: '20%',
        width: '700px',
        height: '40px',
        backgroundColor: 'white',
    }

    const button = {
        height: '40px',
        backgroundColor: 'white',
        marginLeft: '5px',
    }

    return (
        <>
            <div>
                <input type="search" name="restaurantName" onChange={(e) => {setSearchValue(e.target.value)}} style={style} placeholder='카테고리를 입력해주세요.'/>
                <button onClick={onClickHandler} style={button}>검색</button>
            </div> 

            <div className={boxStyle.RestaurantBox}>
                {restaurantList.map(restaurant => <RestaurantItem key={restaurant.id} restaurant={restaurant}/>)}
            </div>
        </>
    );
}

export default Search;
