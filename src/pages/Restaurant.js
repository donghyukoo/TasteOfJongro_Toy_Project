import { useEffect, useState } from 'react';
import RestaurantItem from '../components/RestaurantItem';
import restaurantStyle from './Restaurant.module.css';
import { getRestaurantList } from '../api/RestaurantAPI';


function Restaurant() {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(
        () => {
            setRestaurantList(getRestaurantList());   // 20개 가게 배열 가져오기
        },
        []
    );
    return (
        <>
            <div className={restaurantStyle.RestaurantBox}>
                {/* 맛집 list 배열 안에서 필요한 정보들 가져오기  */}
                {restaurantList.map(restaurant => <RestaurantItem key={restaurant.id} restaurant={restaurant} />)}
            </div>
        </>
    );
}

export default Restaurant;