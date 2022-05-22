import React from 'react'
import { useParams } from 'react-router-dom'

function Purchase() {
    const {id} = useParams()
  return (
    <div>Purchase page {id}</div>
  )
}

export default Purchase