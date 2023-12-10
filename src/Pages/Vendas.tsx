import React from 'react'
import { useData } from '../Context/DataContex'
import { VendaItem } from '../Components/VendaItem'

export const Vendas = () => {
  const { data } = useData()

  if (data === null) return null

  return (
    <ul>
      {data?.map((venda) => (
        <li key={venda.id}><VendaItem venda={venda}/></li>
      ))}
    </ul>
  )
}
