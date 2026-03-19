# Car Comparison Dashboard

A minimal, responsive car comparison dashboard built with React and Tailwind CSS.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v3
- Context API (state management)

## Features

- Browse a grid of car cards with brand, model, price, weight, and rating
- Filter cars by type (SUV, Sedan, Electric, Hatchback)
- Sort by price or rating
- Select up to 4 cars and compare them side-by-side in a table
- Fully responsive — mobile to desktop

## Project Structure

```
src/
├── App.jsx                  # Root component, wraps app in CompareProvider
├── main.jsx                 # React entry point
├── index.css                # Tailwind directives
├── components/
│   ├── Dashboard.jsx        # Main layout, filter/sort state
│   ├── CarCard.jsx          # Individual car card with compare toggle
│   ├── FilterBar.jsx        # Type filter and sort dropdowns
│   └── ComparisonTable.jsx  # Side-by-side comparison table
├── context/
│   └── CompareContext.jsx   # Context for selected cars (toggle, clear)
└── data/
    └── cars.js              # Local car data and type constants
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/rishabhbandooni/Car-Comparison-Dashboard.git
cd car-comparison-dashboard
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Running Tests

Tests are written with Jest and React Testing Library.

```bash
npm test
```

The test file is located at `src/__tests__/App.test.jsx` and covers:

- Dashboard title is rendered
- Car cards with Compare buttons are rendered
- Filter dropdown updates correctly when changed

