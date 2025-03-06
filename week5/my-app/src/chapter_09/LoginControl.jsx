import React, {useState} from "react";

function LoginControl(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }
    // let loginButton;
    // if (isLoggedIn) {
    //     loginButton = <LogoutButton onClick = {handleLogoutClick}/>
    // } else {
    //     loginButton = <LoginButton onClick = {handleLoginClick}/>
    // }

    return (
        // <div>
        //     <Greeting isLoggedIn = {isLoggedIn} />
        //     {loginButton}
        // </div>
        <div>
            <Greeting is isLoggedIn = {isLoggedIn} />
            {isLoggedIn ? <LogoutButton onClick = {handleLogoutClick}/>
                        : <LoginButton onClick = {handleLoginClick}/>}
        </div>
    )
}
export default LoginControl;

function UserGreeting(props) {
    return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
    //if문으로 회원가입 전 후 나누기
    return (
        <div>
            <h1>회원가입을 해주세요</h1>
           
            <form method="post" id="login-form">
                <tr>
                    <td>아이디 : </td>
                    <td><input type="text" id="id" name="id"/></td>
                </tr>
                
                
               <tr>
                    <td>비밀번호 : </td>
                    <td><input type="text" id="password" name="password"/></td>
               </tr>
            </form>
        </div>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting/>;
}

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>로그아웃</button>
    );
}
