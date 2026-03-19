import { CAR_TYPES, CAR_BRANDS } from '../data/cars'

const PRICE_MIN = 0
const PRICE_MAX = 2000000
const STEP = 50000

function toL(value) {
  if (value === 0) return '₹0'
  return `₹${(value / 100000).toFixed(1).replace('.0', '')}L`
}

export default function FilterBar({ filter, sort, brand, minPrice, maxPrice, onFilterChange, onSortChange, onBrandChange, onMinPriceChange, onMaxPriceChange }) {
  return (
    <div className="flex flex-wrap items-start gap-3 mb-8">
      <label htmlFor="filter-type" className="sr-only">Filter by type</label>
      <select
        id="filter-type"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {CAR_TYPES.map(type => (
          <option key={type} value={type}>
            {type === 'All' ? 'All Types' : type}
          </option>
        ))}
      </select>

      <label htmlFor="filter-brand" className="sr-only">Filter by brand</label>
      <select
        id="filter-brand"
        value={brand}
        onChange={e => onBrandChange(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {CAR_BRANDS.map(b => (
          <option key={b} value={b}>
            {b === 'All' ? 'All Brands' : b}
          </option>
        ))}
      </select>

  

      <label htmlFor="sort-order" className="sr-only">Sort by</label>
      <select
        id="sort-order"
        value={sort}
        onChange={e => onSortChange(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Sort By</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating_desc">Rating: High to Low</option>
        <option value="rating_asc">Rating: Low to High</option>
      </select>
       <div className="border border-gray-200 rounded-lg px-3 py-2 bg-white flex items-center gap-3" >
  <p className="text-xs text-gray-500 whitespace-nowrap">
    Price: <span className="font-medium text-gray-700">{toL(minPrice)}</span> – <span className="font-medium text-gray-700">{toL(maxPrice)}</span>
  </p>
  <div className="relative h-4 w-40">
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1 w-full rounded-full bg-gray-200"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 h-1 rounded-full bg-blue-500"
            style={{
              left: `${((minPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
              right: `${((PRICE_MAX - maxPrice) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
            }}
          />
          <label htmlFor="min-price-slider" className="sr-only">Minimum price</label>
          <input
            id="min-price-slider"
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={STEP}
            value={minPrice}
            onChange={e => {
              const val = Number(e.target.value)
              if (val <= maxPrice) onMinPriceChange(val)
            }}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
          <label htmlFor="max-price-slider" className="sr-only">Maximum price</label>
          <input
            id="max-price-slider"
            type="range"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={STEP}
            value={maxPrice}
            onChange={e => {
              const val = Number(e.target.value)
              if (val >= minPrice) onMaxPriceChange(val)
            }}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 pointer-events-none"
            style={{ left: `calc(${((minPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}% - 6px)` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 pointer-events-none"
            style={{ left: `calc(${((maxPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}% - 6px)` }}
          />
        </div>
      </div>
    </div>
  )
}
