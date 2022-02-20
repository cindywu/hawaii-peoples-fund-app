import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src="/HPF.png" alt="Hawai'i People's Fund Logo" width={100} height={40} />
        </div>
        {/* <div className={styles.navigation}>
          HPF Apply
        </div> */}
      </div>
      <div className={styles.right}>
        <div className={styles.message}>Apply for the <strong>2022</strong> grant cycle.</div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Apply
          </button>
        </div>

      </div>
    </div>
  )
}
