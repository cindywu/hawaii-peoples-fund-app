import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { statementOfPurpose } from '../utils/statement-of-purpose'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawai‘i People's Fund</title>
        <meta name="description" content="offline-first collaborative reference manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* <div className={styles.logo}>🧳</div> */}
          {/* <Link href="/workspace">
            <a>Trunk Mini 2</a>
          </Link> */}
          <Image src="/HPF.png" alt="Hawai'i People's Fund Logo" width={500} height={200} />

        </h1>
        {/* <p className={styles.description}>Urgent action grant</p> */}
        <Link href="/apply">
          <button className={styles.button}>
            Apply
          </button>
        </Link>
        <h2>Statement of Purpose</h2>
        <p className={styles.description}>
          {statementOfPurpose[0]}
          <br></br>
          <br></br>
          {statementOfPurpose[1]}
        </p>
        {/* <code className={styles.code}>alpha</code> */}


      </main>

      {/* <footer className={styles.footer}>
        <Link href="http://jellypbc.com">
          <a>Produced by Jelly Public Benefit Corporation</a>
        </Link>
      </footer> */}
    </div>
  )
}
