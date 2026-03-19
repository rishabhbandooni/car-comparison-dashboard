import { CAR_TYPES } from '../data/cars'

export default function FilterBar({ filter, sort, onFilterChange, onSortChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <select
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

      <select
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
    </div>
  )
}
