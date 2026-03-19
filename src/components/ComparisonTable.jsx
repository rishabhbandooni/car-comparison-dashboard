import { useCompare } from '../context/CompareContext'

const ATTRIBUTES = [
  { label: 'Brand', key: 'brand' },
  { label: 'Model', key: 'model' },
  { label: 'Type', key: 'type' },
  { label: 'Price', key: 'price', format: v => `₹${v.toLocaleString()}` },
  { label: 'Weight', key: 'weight', format: v => `${v} kg` },
  { label: 'Rating', key: 'rating', format: v => `★ ${v}` },
]

export default function ComparisonTable() {
  const { selected, clear } = useCompare()

  if (selected.length < 2) return null

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-900">
          Comparing {selected.length} cars
        </h2>
        <button
          onClick={clear}
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm border-collapse bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-gray-500 w-28 border-b border-gray-200">
                Attribute
              </th>
              {selected.map(car => (
                <th
                  key={car.id}
                  className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200"
                >
                  {car.brand} {car.model}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ATTRIBUTES.map((attr, i) => (
              <tr
                key={attr.key}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-3 px-4 text-gray-500 font-medium">{attr.label}</td>
                {selected.map(car => (
                  <td key={car.id} className="py-3 px-4 text-gray-900">
                    {attr.format ? attr.format(car[attr.key]) : car[attr.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
