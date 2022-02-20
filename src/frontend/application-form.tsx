import React, { useState, useEffect } from 'react'
import { Replicache } from 'replicache'
import type { M } from "../datamodel/mutators";
import { getProposals } from '../datamodel/subscriptions'
import { randomProposal } from '../datamodel/proposal'
import styles from './application-form.module.css'
import ApplicationFormSection from './application-form-section'

export default function ApplicationForm({rep}: {rep: Replicache<M>}) {
  const proposals = getProposals(rep)
  const [proposal, setProposal] = useState<any>(null)

  function handleProposalStart(){
    const r = randomProposal()
    rep.mutate.createProposal(r)
  }

  useEffect(() => {
    const p = proposals as unknown as any
    if (p && p.length === 0) {
      const r = randomProposal()
      rep.mutate.createProposal(r)
    }
    p && p.length > 0 && setProposal(p[0][1])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proposals])

  return (
    <div className={styles.container}>
      {proposals && proposals.length === 0 &&
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={handleProposalStart}
          >
            Start Proposal
          </button>
        </div>
      }
      { proposal &&
        <>
          <div className={styles.title}>
            <div className={styles.left}></div>
            <div>
              Hawaiʻi People’s Fund Application Form
              <div className={styles.subTitle}>Spring 2022</div>
            </div>
          </div>
          <ApplicationFormSection proposal={proposal}/>
          {/* <div className={styles.section}>
            <div className={styles.sectionTitle}>
              Section
            </div>
            <div className={styles.formFields}>
              <div className={styles.field}>
                <div className={styles.prompt}>
                  Question
                </div>
                <div className={styles.textAreaContainer}>
                  <textarea
                    className={styles.textArea}
                    value={proposal && proposal.title}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.prompt}>
                  Answer
                </div>
                <div className={styles.textAreaContainer}>
                  <textarea
                    className={styles.textArea}
                    value={proposal && proposal.content}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </>
      }
    </div>
  )
}
