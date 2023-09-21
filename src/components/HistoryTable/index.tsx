import { useContextSelector } from 'use-context-selector'
import { PriceHighlight, TableContainer } from './styles'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function HistoryTable() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <TableContainer>
      <table>
        <tbody>
          {transactions.map((item) => {
            return (
              <tr key={item.id}>
                <td width="50%">{item.description}</td>
                <td>
                  <PriceHighlight variant={item.type}>
                    {item.type === 'outcome' && '- '}
                    {priceFormatter.format(item.price)}
                  </PriceHighlight>
                </td>
                <td>{item.category}</td>
                <td>{dateFormatter.format(new Date(item.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}
