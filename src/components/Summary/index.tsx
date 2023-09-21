import { SummaryContainer } from './styles'
import { CardSummary } from './components/CardSummary'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <CardSummary type="entry" title="Entradas" value={summary.income} />

      <CardSummary type="exit" title="Saídas" value={summary.outcome} />

      <CardSummary type="total" title="Total" value={summary.total} />
    </SummaryContainer>
  )
}
