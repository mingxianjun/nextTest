import React, {useState} from "react";
import Head from 'next/head'
import styles from '../styles/Login.module.scss';
import {Button} from "../components";

function Login() {

  const [name, setName] = useState('');

  const handleClick = () => {
    setName('yes')
    console.log(name)
  }

  return (
    <div className={styles.wrap}>
      <Head>
        <title>登录页面{name}</title>
        <meta name="description" content="Learn forms with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      登录页面
      <Button type={'primary'} htmlType={'submit'} onClick={handleClick}>登录</Button>
    </div>
  )
}

export default Login;