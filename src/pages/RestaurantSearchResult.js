import {useSearchParams} from 'react-router-dom';
import { searchRestaurant } from '../api/RestaurantAPI';
import {useEffect, useState} from 'react';
import RestaurantItem from '../components/RestaurantItem';
import boxStyle from './Restaurant.module.css'
import { Link } from "react-router-dom"
import detailsStyle from './RestaurantDetails.module.css';

function RestaurantSearchResult () {

    const[searchParam] = useSearchParams();
    const searchcategoryName = searchParam.get('categoryName');
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(
        () => {
            setRestaurantList(searchRestaurant(searchcategoryName));              
        }, []
    );

    return (
        <>
            <h1>검색된 가게 입니다.</h1>
            <div className={boxStyle.RestaurantBox}>
                {restaurantList.length > 0 ? restaurantList.map(restaurant => <RestaurantItem key={restaurant.id} restaurant={restaurant}/>) : (<div>검색된 데이터가 존재하지 않습니다.</div>)}
                <Link to={"/search"}>
                    <button className={detailsStyle.button2}>
                        '검색목록'으로 돌아 가기
                    </button> 
                 </Link>
            </div>
        </>
    );
}

export default RestaurantSearchResult;