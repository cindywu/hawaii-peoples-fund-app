import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'
import Link from 'next/link'

export default function NavBasic() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link href="/" passHref>
            <Image src="/HPF.png" alt="Hawai'i People's Fund Logo" width={100} height={40} />
          </Link>
        </div>
        {/* <div className={styles.navigation}>
          HPF Apply
        </div> */}
      </div>
      <div className={styles.right}>
        {/* <div className={styles.message}>Apply for the <strong>2022</strong> grant cycle.</div>
        <div className={styles.buttonContainer}>
          <Link href="/apply" passHref>
            <button className={styles.button}>
              Apply
            </button>
          </Link>
        </div> */}

      </div>
    </div>
  )
}
