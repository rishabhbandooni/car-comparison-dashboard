import { createContext, useContext, useMemo, useState } from 'react'

const CompareContext = createContext(null)

export function CompareProvider({ children }) {
  const [selected, setSelected] = useState([])
  const [toast, setToast] = useState(null)

  function toggle(car) {
    setSelected(prev => {
      if (prev.find(c => c.id === car.id)) return prev.filter(c => c.id !== car.id)
      if (prev.length >= 4) {
        setToast('You can compare up to 4 cars at a time.')
        return prev
      }
      return [...prev, car]
    })
  }

  function clear() {
    setSelected([])
  }

  function clearToast() {
    setToast(null)
  }

  const value = useMemo(
    () => ({ selected, toggle, clear, toast, clearToast }),
    [selected, toast]
  )

  return (
    <CompareContext.Provider value={value}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  return useContext(CompareContext)
}
