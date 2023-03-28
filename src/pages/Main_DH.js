import boxStyle from './pages/Main.module.css';

function Main_DH() {
    const onClickHandler = () => {
        navigate(Gu)
    };

    return (
        <>
            <h1>서울의 맛</h1>

            <div>
                {/* 검색창 자리*/}
            </div>

            <div className={boxStyle.GuBox}>
                <button onClick={onClickHandler}>종로구</button>
                <button onClick={onClickHandler}>강북구</button>
                <button onClick={onClickHandler}>중구</button>
                <button onClick={onClickHandler}>성동구</button>
            </div>

        </>
        
        
    );
}

export default Main_DH;