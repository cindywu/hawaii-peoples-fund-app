/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import styles from './applicant-info.module.css'
import Link from 'next/link'

export default function ApplicantInfo({handleSetShowApplication}: any) {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {`Apply to Hawaiʻi People's Fund`}
      </div>
      <div className={styles.description}>{`We are accepting proposals requesting up to $5,000.`}</div>
      <div className={styles.buttonContainer}>
        {/* <Link href="/apply" passHref> */}
          <button
            className={styles.button}
            onClick={() => handleSetShowApplication(true)}
          >Apply</button>
        {/* </Link> */}

      </div>
    </div>
  )
}
