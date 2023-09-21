import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/Default'
import { GlobalStyle } from './styles/global'

import { Transactions } from './pages/Transactions'
import { TransactionProvider } from './contexts/TransactionsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <GlobalStyle />
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
