import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MdAdd } from 'react-icons/md';

import Layout from '../components/Layout';

import styles from '../styles/Estoque.module.css';

const Estoque: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hardshop - Estoque</title>
          <meta
            property="og:title"
            content="Hardshop - Estoque"
            key="og-title"
          />
          <meta
            name="twitter:title"
            content="Hardshop - Estoque"
            key="tw-title"
          />
        </Head>
        <div className={styles.pageInfoContainer}>
          <h1>Produtos em Estoque:</h1>
          <Link href="/estoque">
            <a className={styles.btnAddProduct}>
              <MdAdd size={24} className={styles.addIcon} />
              Novo Produto
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Estoque;
