import React from 'react'
import styles from './form.module.css'

export default function Form() {
  return (
    <div className={styles.container}>
      <div>
        Prompt
      </div>
      <div>
        Hint
      </div>
      <textarea/>
    </div>
  )
}
