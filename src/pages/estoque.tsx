import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { MdAdd } from 'react-icons/md';
import useSWR, { useSWRConfig } from 'swr';
import { api, fetcher } from '../services/api';

import Layout from '../components/Layout';

import styles from '../styles/Estoque.module.css';

interface Product {
  id: number;
  name: string;
  value: string;
  quantity: number;
  provider: string;
  receipt_date: string;
}

const Estoque: NextPage = () => {
  const { data } = useSWR('/products', fetcher);
  const { mutate } = useSWRConfig();

  async function handleDeleteProduct(id: number) {
    try {
      await api.delete(`/products/${id}`);
      mutate('/products');
    } catch (error: any) {
      console.log(error.response.data.msg);
    }
  }

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
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>Id</th>
              <th className={styles.th}>Nome</th>
              <th className={styles.th}>Valor</th>
              <th className={styles.th}>Qtd</th>
              <th className={styles.th}>Fornecedor</th>
              <th className={styles.th}>Dt_recebimento</th>
              <th className={styles.th}>Visualizar</th>
              <th className={styles.th}>Excluir</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {data &&
              data.map((product: Product) => (
                <tr key={product.id} className={styles.tr}>
                  <td className={styles.td}>{product.id}</td>
                  <td className={styles.td}>{product.name}</td>
                  <td className={styles.td}>{product.value}</td>
                  <td className={styles.td}>{product.quantity}</td>
                  <td className={styles.td}>{product.provider}</td>
                  <td className={styles.td}>{product.receipt_date}</td>
                  <td className={`${styles.td} ${styles.edit}`}>
                    <Link href={`/produto/${product.id}`}>
                      <a>Visualizar</a>
                    </Link>
                  </td>
                  <td className={`${styles.td} ${styles.delete}`}>
                    <Link href="/estoque">
                      <a onClick={() => handleDeleteProduct(product.id)}>
                        Excluir
                      </a>
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

export default Estoque;
