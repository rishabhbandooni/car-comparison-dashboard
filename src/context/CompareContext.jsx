import { createContext, useContext, useState } from 'react'

const CompareContext = createContext(null)

export function CompareProvider({ children }) {
  const [selected, setSelected] = useState([])

  function toggle(car) {
    setSelected(prev =>
      prev.find(c => c.id === car.id)
        ? prev.filter(c => c.id !== car.id)
        : prev.length < 4
        ? [...prev, car]
        : prev
    )
  }

  function clear() {
    setSelected([])
  }

  return (
    <CompareContext.Provider value={{ selected, toggle, clear }}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  return useContext(CompareContext)
}
