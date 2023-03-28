import restaurants from '../DB/menu-detail.json';

export function getRestaurantList() {
    return restaurants;
}

export function getRestaurantDetail(id){
    return restaurants.filter(restaurant => restaurant.id === parseInt(id))[0];                 // id를 불러와서 숫자 부분 제외하고 잘라내기?
}

export function searchRestaurant(searchcategoryName) {
    return restaurants.filter(restaurant => restaurant.categoryName.match(searchcategoryName));
}