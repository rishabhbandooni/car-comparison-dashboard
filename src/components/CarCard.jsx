import { useCompare } from '../context/CompareContext'

export default function CarCard({ car }) {
  const { selected, toggle } = useCompare()
  const isSelected = selected.some(c => c.id === car.id)

  return (
    <div
      className={`bg-white rounded-xl border overflow-hidden shadow-sm transition-shadow hover:shadow-md ${
        isSelected ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-200'
      }`}
    >
      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-44 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">{car.brand}</p>
            <h3 className="font-semibold text-gray-900 leading-tight">{car.model}</h3>
          </div>
          <span className="shrink-0 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {car.type}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 text-sm text-gray-600 divide-x divide-gray-100">
          <span className="pr-2">₹{car.price.toLocaleString()}</span>
          <span className="px-2 text-center">★ {car.rating}</span>
          <span className="pl-2 text-right">{car.weight} kg</span>
        </div>

        <button
          onClick={() => toggle(car)}
          className={`mt-4 w-full text-sm font-medium py-2 rounded-lg transition-colors ${
            isSelected
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Remove' : '+ Compare'}
        </button>
      </div>
    </div>
  )
}
