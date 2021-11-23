import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Login.module.css';

import hardshopLogo from '../../public/images/hardshop-logo.png';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hardshop - Entrar</title>
      </Head>

      <Image src={hardshopLogo} alt="Logo" />

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Entrar</h1>
        <div className={styles.formField}>
          <input placeholder="Email" type="email" name="email" id="email" />
        </div>
        <div className={styles.formField}>
          <input
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Link href="/">
          <a className={styles.loginBtn}>Entrar</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
