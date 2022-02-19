import React from 'react'
import Proposal from './proposal'
import { randomProposal } from '../datamodel/proposal'
import type { Replicache } from "replicache";
import type { mutators } from "../datamodel/mutators";
import { getProposals } from '../datamodel/subscriptions'

export default function PropsalList({ rep }: {rep: Replicache<typeof mutators>}) {
  const proposals = getProposals(rep)
  console.log('proposals', proposals)

  function handleProposalStart() {
    const r = randomProposal()
    console.log('r', r)
    rep.mutate.createProposal(r)
  }

  return (
    <div>
      proposal-list
      <div>
        <button
          onClick={() => handleProposalStart()}
        >
          Start Proposal
        </button>
      </div>
      {proposals
        ?
          proposals.map(([k, v]:[string, any]) => {
            console.log('k', k)
            console.log('v', v)
            return (
              <Proposal
                key={k}
                proposal={v}
              />
            )
          })
        :
          <div>no proposals</div>
      }
      {/* <Proposal/>
      <Proposal/> */}
    </div>
  )
}
