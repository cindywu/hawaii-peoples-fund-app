import React from 'react'
import Image from 'next/image'
import styles from './nav.module.css'
import Link from 'next/link'

export default function Nav({handleSetShowApplication, showApplication} : any) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div
          className={styles.logo}
          onClick={() => handleSetShowApplication(false)}
        >
          <Image src="/HPF.png" alt="Hawai'i People's Fund Logo" width={100} height={40} />
        </div>
      </div>
      <div className={styles.right}>
        {!showApplication &&
          <>
            <div className={styles.message}>Apply for the <strong>2022</strong> grant cycle.</div>
            <div className={styles.buttonContainer}>
                <button
                  className={styles.button}
                  onClick={() => handleSetShowApplication(true)}
                >
                  Apply
                </button>
            </div>
          </>
        }


      </div>
    </div>
  )
}
