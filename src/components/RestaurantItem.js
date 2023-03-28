import itemStyle from './RestaurantItem.module.css';
import {Link} from 'react-router-dom';

function RestaurantItem({restaurant}) {
    return (
        <Link to={`/restaurant/${restaurant.id}`}>
            <div className={itemStyle.RestaurantItem}>
                
            <img src={restaurant.restaurantImages} style={{ width: 300, height: 320, }} />
                    <h3>#{restaurant.restaurantName}#{restaurant.categoryName}#★{restaurant.review}</h3>
            </div>
        </Link>
    );
}

export default RestaurantItem;
