import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from '../services/api';
import { MdAdd } from 'react-icons/md';

import Layout from '../components/Layout';

import styles from '../styles/Estoque.module.css';

interface Order {
  id: number;
  client_name: string;
  client_email: string;
  client_cpf: string;
  client_phone: string;
  date: string;
}

const Vendas: NextPage = () => {
  const { data } = useSWR('/orders', fetcher);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hardshop - Vendas</title>
          <meta
            property="og:title"
            content="Hardshop - Vendas"
            key="og-title"
          />
          <meta
            name="twitter:title"
            content="Hardshop - Vendas"
            key="tw-title"
          />
        </Head>
        <div className={styles.pageInfoContainer}>
          <h1>Vendas Cadastradas:</h1>
          <Link href="/vendas">
            <a className={styles.btnAddProduct}>
              <MdAdd size={24} className={styles.addIcon} />
              Nova Venda
            </a>
          </Link>
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Id</th>
              <th className={styles.th}>Nome_Cliente</th>
              <th className={styles.th}>Email_Cliente</th>
              <th className={styles.th}>CPF_Cliente</th>
              <th className={styles.th}>Telefone_Cliente</th>
              <th className={styles.th}>Data</th>
              <th className={styles.th}>Visualizar</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data &&
              data.map((order: Order) => (
                <tr key={order.id} className={styles.tr}>
                  <td className={styles.td}>{order.id}</td>
                  <td className={styles.td}>{order.client_name}</td>
                  <td className={styles.td}>{order.client_email}</td>
                  <td className={styles.td}>{order.client_cpf}</td>
                  <td className={styles.td}>{order.client_phone}</td>
                  <td className={styles.td}>{order.date}</td>
                  <td className={`${styles.td} ${styles.edit}`}>
                    <Link href={`/venda/${order.id}`}>
                      <a>Visualizar</a>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Vendas;
