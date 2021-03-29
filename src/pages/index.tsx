import Navbar from 'components/atoms/Nav/Navbar.component';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Warehouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar name="Data Warehouse" />
      </header>

      <main></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
