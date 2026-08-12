import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): ReactNode {
  return (
    <Layout title="Manual de Usuario" description="Manual funcional del Portal de Requisiciones">
      <main className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1" className={styles.title}>
            Manual de Usuario
          </Heading>
          <p className={styles.subtitle}>Portal de Requisiciones</p>
          <p className={styles.description}>
            Guia funcional por rol para administrar catalogos, crear requisiciones, aprobar solicitudes, gestionar compras e integrar
            ordenes de compra con Business Central.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Abrir manual
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
