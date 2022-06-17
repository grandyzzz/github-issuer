import type { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../config'

interface ReduxProps {
  children: ReactNode
}

function Redux({ children }: ReduxProps) {
  return <Provider store={store}>{children}</Provider>
}

export default Redux
