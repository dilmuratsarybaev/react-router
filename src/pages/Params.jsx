import React from 'react'
import { useParams } from 'react-router-dom'

export const Params = () => {
    const {id} = useParams()
  return (
    <h4>Product Name {id}</h4>
  )
}
