import { CompareProvider } from './context/CompareContext'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <CompareProvider>
      <Dashboard />
    </CompareProvider>
  )
}
