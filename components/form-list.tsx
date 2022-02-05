import React from 'react'
import Form from './form'
import styles from './form-list.module.css'

export default function FormList() {
  return (
    <>
      <div className={styles.container}>
        3. Proposal Narrative
      </div>
      <Form />
      <Form />
    </>
  )
}
