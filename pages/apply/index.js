import React from 'react'
import Link from 'next/link'
import ApplicationForm from '../../components/application-form'
import FormList from '../../components/form-list'

export default function index() {
  return (
    <div>
      <ApplicationForm/>
      <FormList/>
    </div>
  )
}
