import { MagnifyingGlass } from 'phosphor-react'
import { SearchContainer, Form } from './styles'
import { useForm } from 'react-hook-form'
import * as Z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../../contexts/TransactionsContext'

const SearchFormSchema = Z.object({
  query: Z.string(),
})

type SearchFormInputs = Z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const fetchTransaction = useContextSelector(TransactionContext, (context) => {
    return context.fetchTransaction
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransaction(data.query)
  }

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Busque por transações"
          {...register('query')}
        />
        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </Form>
    </SearchContainer>
  )
}
