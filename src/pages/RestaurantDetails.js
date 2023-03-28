import {useParams} from 'react-router-dom';                     // 정보를 불러오는 기능
import {useEffect, useState} from 'react';                      // 
import {getRestaurantDetail} from '../api/RestaurantAPI';       // APi 페이지에서 불러오기
import detailsStyle from './RestaurantDetails.module.css';      // CSS 페이지 불러오기
import { Link } from "react-router-dom"                         // Link 가능하게 해주는 기능

function RestaurantDetails() {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState({              // DB의 이름 , 가격, 카테고리, 설명, 계절, 타입, 리뷰 값의 형태 설정
        
        menuName: '',               // 문자열
        menuPrice: 0,
        categoryName: '',
        detail: {},                 // 함수
        season: '',
        menuType: '',
        review: 0,                  // 숫자
    });

    
    useEffect(
        () => {
            setRestaurant(getRestaurantDetail(id));             // 렌더링 될때마다 DB의 id를 가진 값들을 배열로 나타낸다.
        },[]
        );

    return (
        <>
        <div className={detailsStyle.RestaurantDetails}>
            <img src={restaurant.detail.image} 
                style={{ height: 400, width: 300, borderRadius: 50, margin:20}}/>                         {/* 음식 사진의 크기, 모양, 위치 설정 */}

            <div className={detailsStyle.text}>
                <h1>{restaurant.restaurantName}</h1>
                <h3>추천 음식: {restaurant.menuName}</h3>
                <h3>가격: {restaurant.menuPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</h3>  {/* 정규식사용. 숫자에 천 단위마다 ,를 표기한다. */}
                <h3>분류: {restaurant.categoryName}</h3>   
                <h3>음식과 어울리는 계절: {restaurant.season}</h3>  
                <h3>음식 타입: {restaurant.menuType}</h3>           
                <h3>평점: ★{restaurant.review}</h3>      
                <h3>메뉴 설명: {restaurant.detail.description}</h3>

                <Link to={"/restaurant"}>                               {/* Link to를 이용하여 다른 페이지로 넘어 가기. */}
                    <button className={detailsStyle.button1}>
                        '가게목록'으로 돌아 가기
                    </button>
                </Link>

                <Link to={"/search"}>
                    <button className={detailsStyle.button2}>
                        '검색목록'으로 돌아 가기
                    </button>
                </Link>

                <Link to={"/weather"}>
                    <button className={detailsStyle.button3}>
                        '음식추천'으로 돌아 가기
                    </button>
                </Link>
            </div>
        </div>     
        </>
    );
}

export default RestaurantDetails;
