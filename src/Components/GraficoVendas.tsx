import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'
import { IVenda } from '../Context/DataContex'

export const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const dadosGrafico = [
    {
      data: '2023-10-03',
      pago: 30000,
      processando: 3000,
      falha: 2000
    },
    {
      data: '2023-10-04',
      pago: 34000,
      processando: 5000,
      falha: 2000
    },
    {
      data: '2023-10-05',
      pago: 20000,
      processando: 5000,
      falha: 6000
    }
  ]
  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart width={400} height={400} data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  )
}
