import { useMemo, useState } from 'react'
import { cars } from '../data/cars'
import CarCard from './CarCard'
import FilterBar from './FilterBar'
import ComparisonTable from './ComparisonTable'

export default function Dashboard() {
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('')

  const displayed = useMemo(() => {
    let list = filter === 'All' ? cars : cars.filter(c => c.type === filter)

    if (sort === 'price_asc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price_desc') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating_desc') return [...list].sort((a, b) => b.rating - a.rating)
    if (sort === 'rating_asc') return [...list].sort((a, b) => a.rating - b.rating)

    return list
  }, [filter, sort])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Car Comparison Dashboard
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          filter={filter}
          sort={sort}
          onFilterChange={setFilter}
          onSortChange={setSort}
        />

        {displayed.length === 0 ? (
          <p className="text-gray-400 text-sm">No cars match the selected filter.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayed.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        <ComparisonTable />
      </main>
    </div>
  )
}
