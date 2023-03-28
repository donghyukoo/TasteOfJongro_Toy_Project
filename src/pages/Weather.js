import React from 'react';
import Restaurant from './Restaurant';
import WeatherInfo from '../api/WeatherAPI';

    function Weather() {

            return (
                <>
                    <WeatherInfo/>
                    <Restaurant/>
                </>
            );
        }

export default Weather;