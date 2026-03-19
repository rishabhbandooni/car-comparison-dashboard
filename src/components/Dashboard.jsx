import { lazy, Suspense, useMemo, useState } from 'react'
import { cars } from '../data/cars'
import { useCompare } from '../context/CompareContext'
import CarCard from './CarCard'
import FilterBar from './FilterBar'
import Toast from './Toast'

const ComparisonTable = lazy(() => import('./ComparisonTable'))

export default function Dashboard() {
  const [filter, setFilter] = useState('All')
  const [sort, setSort] = useState('')
  const [brand, setBrand] = useState('All')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(2000000)
  const { toast, clearToast } = useCompare()

  const displayed = useMemo(() => {
    let list = filter === 'All' ? cars : cars.filter(c => c.type === filter)

    if (brand !== 'All') list = list.filter(c => c.brand === brand)
    list = list.filter(c => c.price >= minPrice && c.price <= maxPrice)

    if (sort === 'price_asc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price_desc') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating_desc') return [...list].sort((a, b) => b.rating - a.rating)
    if (sort === 'rating_asc') return [...list].sort((a, b) => a.rating - b.rating)

    return list
  }, [filter, sort, brand, minPrice, maxPrice])

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
          brand={brand}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onFilterChange={setFilter}
          onSortChange={setSort}
          onBrandChange={setBrand}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
        />

        {displayed.length === 0 ? (
          <p className="text-gray-400 text-sm">No cars match the selected filter.</p>
        ) : (
          <>
          <h2 className="sr-only">Car Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayed.map((car, index) => (
              <CarCard key={car.id} car={car} priority={index < 4} />
            ))}
          </div>
          </>
        )}

        <Suspense fallback={null}>
          <ComparisonTable />
        </Suspense>
      </main>

      {toast && <Toast message={toast} onClose={clearToast} />}
    </div>
  )
}
