import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

test('renders the dashboard title', () => {
  render(<App />)
  expect(screen.getByText('Car Comparison Dashboard')).toBeInTheDocument()
})

test('renders compare buttons for car cards', () => {
  render(<App />)
  const compareButtons = screen.getAllByRole('button', { name: /compare/i })
  expect(compareButtons.length).toBeGreaterThan(0)
})

test('filter dropdown updates the displayed cars', () => {
  render(<App />)
  const select = screen.getByDisplayValue('All Types')
  fireEvent.change(select, { target: { value: 'Electric' } })
  expect(select.value).toBe('Electric')
})
