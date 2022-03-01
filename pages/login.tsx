import { useState } from "react";

function Login({user}:any) {
    const [theme,setTheme] = useState('');
    const handlerSetTheme = ()=>{
        console.log(theme)
        setTheme('theme-dark')
    }
    return <div className={theme}>
        登录页面{user.name}
        <button onClick={handlerSetTheme}>设置主题</button>
    </div>
}

export async function getStaticProps() {
    const res = await fetch(process.env.API_BASE_URL+'api/hello');
    const user = await res.json()
    console.log(process.env.API_BASE_URL)
    return {
        props: {
            user,
        }
    }
}

export default Login;