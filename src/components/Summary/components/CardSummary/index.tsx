import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollarSimple,
} from 'phosphor-react'
import { CardSummaryContainer } from './styles'
import { priceFormatter } from '../../../../utils/formatter'

interface CardSummaryProps {
  title: string
  value: number
  type: 'entry' | 'exit' | 'total'
}

export function CardSummary({ title, type, value }: CardSummaryProps) {
  return (
    <CardSummaryContainer type={type}>
      <header>
        <span>{title}</span>
        {type === 'entry' && <ArrowCircleUp size={32} color="#00b37e" />}
        {type === 'exit' && <ArrowCircleDown size={32} color="#f75a68" />}
        {type === 'total' && <CurrencyDollarSimple size={32} color="#fff" />}
      </header>

      <strong>{priceFormatter.format(value)}</strong>
    </CardSummaryContainer>
  )
}
