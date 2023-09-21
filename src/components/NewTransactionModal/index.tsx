import * as Dialog from '@radix-ui/react-dialog'

import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import * as Z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../contexts/TransactionsContext'

const NewTransactionFormSchema = Z.object({
  description: Z.string(),
  price: Z.number(),
  category: Z.string(),
  type: Z.enum(['income', 'outcome']),
})

type NewTransactionInputs = Z.infer<typeof NewTransactionFormSchema>

export function NewTransactionsModal() {
  const createTransactions = useContextSelector(
    TransactionContext,
    (context) => {
      return context.createTransactions
    },
  )

  const transactionsHookForm = useForm<NewTransactionInputs>({
    resolver: zodResolver(NewTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = transactionsHookForm

  async function handleCreateNewTransaction(data: NewTransactionInputs) {
    try {
      createTransactions(data)
      reset()
    } catch (err) {
      console.log(`error: ${err}`)
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />

          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />

          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
