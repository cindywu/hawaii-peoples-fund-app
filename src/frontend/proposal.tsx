import React from 'react'

export default function Proposal({proposal}: {proposal: any}) {
  console.log('proposal', proposal)
  return (
    <>
      <div>proposal</div>
      <div>title:{proposal.title}</div>
      <div>content:{proposal.content}</div>
    </>
  )
}
