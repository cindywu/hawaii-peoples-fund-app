import React from 'react'
import styles from './applicant-info.module.css'

export default function ApplicantInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        {`Apply to Hawaiʻi People's Fund`}
      </div>
      <div className={styles.description}>{`We are accepting proposals requesting up to $5,000.`}</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Apply</button>
      </div>
    </div>
  )
}
