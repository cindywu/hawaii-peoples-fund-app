import React from 'react'
import NavBasic from '../../src/frontend/nav-basic'
import Footer from '../../src/frontend/footer'
import styles from '../../styles/Home.module.css'

export default function Apply() {
  // const proposals = getProposals(rep)
  return (
    <div className={styles.container}>
      <NavBasic/>
      <div>
        hi
      </div>

      <Footer/>
    </div>
  )
}
