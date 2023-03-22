import boxStyle from './Weather.module.css';
import {useEffect, useState} from 'react';
import React from 'react';



/* 날씨에 관한 api들 모아놓은 컴포넌트 */
function WeatherInfo() {

    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';
    const [position] = useState({});
    const [weather, setWeather] = useState({});     
    const [imgUrl, setImgUrl] = useState(''); 

    /* 날씨에 관한 정보 가져오는 비동기 함수(외부 API 요청)*/
    async function getWeather() {
        // console.log("패치 시작");
        return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.5586816&lon=126.976&appid=${API_KEY}`)
                .then(response => response.json());
    }
        
            useEffect(() => {
                getWeather(position).then(res =>{
                            setWeather(res.weather[0]);
                            getImage(res.weather[0].main);
                                
                            // console.log("useEffect 실행");
                            })
                                
                        },
                    []
                );
        
        /* 이모지 크기 조정 함수 */
        function ImageBox({imgUrl}) {

            return (
                !!imgUrl? <img src={ imgUrl } width="200" height="100%"/>: null
            );
        }   

        /* 날씨에 알맞는 이모지 나오는 함수 */
        async function getImage(weather) {
            // console.log(weather);

            let imojiName = '';                
            switch(weather) {
                case 'Clear': imojiName = 'sunny'; break;
                case 'Rain': imojiName = 'umbrella'; break;
                case 'Thunderstom': imojiName = 'cloud_with_lightning_and_rain'; break;
                case 'Drizzle': imojiName = 'cloud_with_rain'; break;
                case 'Snow': imojiName = 'snowman'; break;
                case 'Clouds': imojiName = 'cloud'; break;
                case 'Atmosphere': imojiName = 'airplane';
                case 'Mist' : imojiName = 'fog' ;
            }

            const response = await fetch('https://api.github.com/emojis');
            const json = await response.json();
            // console.log(json);       // 패치를 통해 외부 api를 잘 가져오는지 확인
            setImgUrl(json[imojiName]);
        }

        
        /* 반환 */
        return (
            <div className={boxStyle.weatherTitle}>
                <div>
                    <ImageBox imgUrl={ imgUrl } />
                </div>
                <div className={boxStyle.weatherText}>
                <div className={boxStyle.weatherText}>
                    <h1>{`현재 날씨는 ${weather.main}! 오늘은 여기 어떤가요?`}</h1>
                </div>
                </div>
            </div>
        );

    }

export default WeatherInfo;