import React from 'react'
import styles from './application-form.module.css'

export default function ApplicationFormSection({proposal}: any) {
  return (
    <div className={styles.section}>
        <div className={styles.sectionTitle}>
          Narrative
        </div>
        <div className={styles.formFields}>
          <div className={styles.field}>
            <div className={styles.prompt}>
              What is the social change this proposal seeks to make?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.title}
                placeholder={`The more specific the better.`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              How will the work from a grant forge a stronger movement for social justice in Hawaiʻi?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`Talk about how your work fits into the larger social justice movement.`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              If awarded the grant, what planned activities will advance your social change goals?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`Timelines help us understand your program.`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              What internal and external resources enable you to complete the proposed work?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`Say more about your paid staff and/or volunteers. What about partners, collaborators, networks, if any?`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              If awarded the grant, what planned activities will advance your social change goals?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`What tangible work will you accomplish with the grant money?`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              Tell us how your approach is tailored to unique social, cultural, geographic, and/or economic needs of your community?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`What makes your organization uniquely qualified to serve effectively your community?`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              How have you raised money for your work in the past? How do you plan to raise money for your work moving forward?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`What will you do if we don't fund you?`}
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.prompt}>
              How do you measure the impact of your work in Hawaiʻi? What metrics do you use to determine if participants and/or systems are improved as a result of your work?
            </div>
            <div className={styles.textAreaContainer}>
              <textarea
                className={styles.textArea}
                // value={proposal && proposal.content}
                placeholder={`How do you know you are succeeding?`}
              />
            </div>
          </div>
        </div>
      </div>
  )
}
