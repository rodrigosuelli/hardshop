import { NextPage } from 'next';
import { fetcher } from '../../services/api';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import useSWR from 'swr';

import styles from '../../styles/Produto.module.css';

const Venda: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/orders/${id}`, fetcher);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Hardshop - Venda #{id}</title>
          <meta
            property="og:title"
            content={`Hardshop - Venda #${id}`}
            key="og-title"
          />
          <meta
            name="twitter:title"
            content={`Hardshop - Venda #${id}`}
            key="tw-title"
          />
        </Head>
        <div className={styles.pageInfoContainer}>
          <h1>Visualizar Venda</h1>
        </div>
        <form className={styles.formContainer}>
          <div className={styles.formField}>
            <input
              placeholder="Nome do cliente"
              type="text"
              name="client_name"
              id="client_name"
              value={data && data.client_name}
            />
          </div>
          <div className={styles.formField}>
            <input
              placeholder="Email do cliente"
              type="email"
              name="client_email"
              id="client_email"
              value={data && data.client_email}
            />
          </div>
          <div className={styles.formFieldTwo}>
            <input
              value={data && data.client_cpf}
              placeholder="CPF"
              type="text"
              name="client_cp"
              id="client_cp"
            />
            <input
              placeholder="Telefone"
              type="text"
              name="client_phone"
              id="client_phone"
              value={data && data.client_phone}
            />
            <input
              placeholder="Data"
              type="text"
              name="date"
              id="date"
              value={data && data.date}
            />
          </div>
          {data &&
            data.orderItems.map((orderItem: any, index: number) => (
              <div key={index} className={styles.formFieldTwo}>
                <input
                  value={data && orderItem.product_name}
                  placeholder="Nome do produto"
                  type="text"
                  name="product_name"
                  id="product_name"
                />
                <input
                  value={data && orderItem.product_quantity}
                  placeholder="Qtd"
                  type="number"
                  name="product_quantity"
                  id="product_quantity"
                />
                <input
                  value={`R$ ${data && orderItem.product_value}`}
                  placeholder="Preço"
                  type="text"
                  name="product_value"
                  id="product_value"
                />
              </div>
            ))}
          <Link href="/vendas">
            <a type="submit" className={styles.btnFinish}>
              Concluir
            </a>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Venda;
