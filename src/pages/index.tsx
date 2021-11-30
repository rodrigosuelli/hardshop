import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';

import styles from '../styles/Login.module.css';

import hardshopLogo from '../../public/images/hardshop-logo.png';

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hardshop - Entrar</title>
        <meta property="og:title" content="Hardshop - Entrar" key="og-title" />
        <meta name="twitter:title" content="Hardshop - Entrar" key="tw-title" />
      </Head>

      <Image src={hardshopLogo} alt="Logo" />

      <form className={styles.formContainer}>
        <h1 className={styles.title}>Entrar</h1>
        <div className={styles.formField}>
          <MdMailOutline size={22} className={styles.inputIcon} />
          <input placeholder="Email" type="email" name="email" id="email" />
        </div>
        <div className={styles.formField}>
          <MdLockOutline size={22} className={styles.inputIcon} />
          <input
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Link href="/estoque">
          <a className={styles.loginBtn}>Entrar</a>
        </Link>
      </form>
    </div>
  );
};

export default Login;
