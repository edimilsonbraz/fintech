import React from 'react'
import { useData } from '../Context/DataContex'

export const Header = () => {
  const {data} = useData()

  console.log(data)
  
  return (
    <div>Header</div>
  )
}
