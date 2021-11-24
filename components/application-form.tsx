import React from 'react'
import  styles from './application-form.module.css'
import Link from 'next/link'

export default function ApplicationForm() {
  return (
    <div className={styles.container}>
      <div className={styles.navHome}>
        <Link
          href="/"
        >
          Go back
        </Link>
      </div>

      <div className={styles.title}>
        Application Form
      </div>
      <div className={styles.prompt}>What is the social change this proposal seeks to make? How does this work help forge a stronger movement for social justice in Hawai'i?</div>
      <textarea
        className={styles.textArea}
        placeholder={'350 word limit'}
      />
      <div className={styles.prompt}>What are the planned activities of this grant that will advance your social change goals? Please provide both specific and general plans. Timelines are helpful for us to understand your program.</div>
      <textarea
        className={styles.textArea}
        placeholder={'350 word limit'}
      />

    </div>
  )
}
