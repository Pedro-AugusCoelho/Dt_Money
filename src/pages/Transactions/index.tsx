import { Header } from '../../components/Header'
import { HistoryTable } from '../../components/HistoryTable'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      <SearchForm />
      <HistoryTable />
    </>
  )
}
