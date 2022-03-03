import React, {FormEvent, useState} from "react";
import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Login.module.scss';
import {Button} from "../components";

function Login() {

  const [tel, setTel] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    await setTimeout(() => {
      console.log(tel, password);
      // setLoading(false);
    }, 2000);
  }

  const handleChangeTel = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setTel(target.value);
  }
  const handleChangePassword = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  }

  return (
    <div className={styles.wrap}>
      <Head>
        <title>登录页面</title>
        <meta name="description" content="Learn forms with Next.js"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <h1>登录系统</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <input required
                 type='text'
                 name='tel'
                 onChange={handleChangeTel}
                 maxLength={20}
                 placeholder={'手机号'}/>
        </div>
        <div className={styles.formItem}>
          <input required
                 type='password'
                 name='password'
                 onChange={handleChangePassword}
                 placeholder={'密码'}
                 maxLength={20}/>
        </div>
        <div className={styles.formItem}>
          <Button type={'primary'}
                  loading={loading}
                  size={'middle'}
                  htmlType={'submit'}>登录</Button>
        </div>
        <div className={styles.formItem + ' ' + styles.between}>
          <Link href={'/forget'}>忘记密码？</Link>
          <Link href={'/register'}>没有账号，请注册</Link>
        </div>
      </form>
    </div>
  )
}

export default Login;