import { useState } from "react";
import loginStyle from "./Login.module.css";
import { Link } from "react-router-dom"


function Login() {
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    
    return (
        <>
            <div className={loginStyle.page}>
                <h3 className={loginStyle.titleWrap}>
                    아이디와 비밀번호를 입력하세요.
                </h3>
                
                <div className={loginStyle.contentWrap}>
                    <h2 className={loginStyle.inputTitle}>아이디 </h2>
                        <div className={loginStyle.inputWrap}>
                            
                            <input 
                                type='text'
                                className="input" 
                                placeholder="아이디를 입력하세요."
                                value={id}
                                onChange={(e) => {setId(e.target.value)}}
                                />
                        </div>
                 
                    <h2 className={loginStyle.inputTitle}>비밀번호 </h2>
                    <div className={loginStyle.inputWrap}>
                            <input 
                                type='password'
                                className="input" 
                                placeholder="비밀번호를 입력하세요."
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                />
                        </div>
                </div>
                <Link to={"/restaurant"}>
                    <button className={loginStyle.bottomButton}>
                        <h3>확인</h3>
                    </button>
                </Link>
            </div>
            </>
    );
}

export default Login;