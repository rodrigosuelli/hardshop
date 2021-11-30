import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { fetcher } from '../../services/api';
import useSWR from 'swr';
import Layout from '../../components/Layout';

import styles from '../../styles/Produto.module.css';

const Produto: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/products/${id}`, fetcher);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hardshop - Produto #{id}</title>
          <meta
            property="og:title"
            content={`Hardshop - Produto #${id}`}
            key="og-title"
          />
          <meta
            name="twitter:title"
            content={`Hardshop - Produto #${id}`}
            key="tw-title"
          />
        </Head>
        <div className={styles.pageInfoContainer}>
          <h1>Visualizar Produto</h1>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formField}>
            <input
              placeholder="Nome do produto"
              type="text"
              name="name"
              id="name"
              value={data && data.name}
            />
          </div>
          <div className={styles.formFieldTwo}>
            <input
              value={`R$ ${data && data.value}`}
              placeholder="Preço"
              type="text"
              name="value"
              id="value"
            />
            <input
              placeholder="Quantidade"
              type="number"
              name="quantity"
              id="quantity"
              value={data && data.quantity}
            />
          </div>
          <div className={styles.formField}>
            <input
              placeholder="Fornecedor"
              type="text"
              name="provider"
              id="provider"
              value={data && data.provider}
            />
          </div>
          <Link href="/estoque">
            <a type="submit" className={styles.btnFinish}>
              Concluir
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Produto;
