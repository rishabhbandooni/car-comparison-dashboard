import swiftImg from '../assets/cars/swift.webp'
import cretaImg from '../assets/cars/creta.webp'
import nexonEvImg from '../assets/cars/nexon-ev.webp'
import tharImg from '../assets/cars/thar.webp'
import hondaCityImg from '../assets/cars/city.webp'
import balenoImg from '../assets/cars/baleno.webp'
import harrierImg from '../assets/cars/harrier.webp'
import seltosImg from '../assets/cars/seltos.webp'
import tiagoEvImg from '../assets/cars/tiago-ev.webp'
import vernaImg from '../assets/cars/verna.webp'
import xuv700Img from '../assets/cars/xuv700.webp'
import kigerImg from '../assets/cars/kiger.webp'

export const CAR_TYPES = ['All', 'Electric', 'SUV', 'Sedan', 'Hatchback']
export const CAR_BRANDS = ['All', 'Honda', 'Hyundai', 'Kia', 'Mahindra', 'Maruti Suzuki', 'Renault', 'Tata']

export const cars = [
  {
    id: 1,
    brand: 'Maruti Suzuki',
    model: 'Swift',
    price: 700000,
    weight: 875,
    rating: 4.3,
    type: 'Hatchback',
    image: swiftImg,
  },
  {
    id: 2,
    brand: 'Hyundai',
    model: 'Creta',
    price: 1200000,
    weight: 1350,
    rating: 4.5,
    type: 'SUV',
    image: cretaImg,
  },
  {
    id: 3,
    brand: 'Tata',
    model: 'Nexon EV',
    price: 1500000,
    weight: 1400,
    rating: 4.6,
    type: 'Electric',
    image: nexonEvImg,
  },
  {
    id: 4,
    brand: 'Mahindra',
    model: 'Thar',
    price: 1600000,
    weight: 1750,
    rating: 4.4,
    type: 'SUV',
    image: tharImg,
  },
  {
    id: 5,
    brand: 'Honda',
    model: 'City',
    price: 1300000,
    weight: 1100,
    rating: 4.5,
    type: 'Sedan',
    image: hondaCityImg,
  },
  {
    id: 6,
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    price: 800000,
    weight: 920,
    rating: 4.2,
    type: 'Hatchback',
    image: balenoImg,
  },
  {
    id: 7,
    brand: 'Tata',
    model: 'Harrier',
    price: 1800000,
    weight: 1700,
    rating: 4.4,
    type: 'SUV',
    image: harrierImg,
  },
  {
    id: 8,
    brand: 'Kia',
    model: 'Seltos',
    price: 1400000,
    weight: 1350,
    rating: 4.5,
    type: 'SUV',
    image: seltosImg,
  },
  {
    id: 9,
    brand: 'Tata',
    model: 'Tiago EV',
    price: 900000,
    weight: 1235,
    rating: 4.3,
    type: 'Electric',
    image: tiagoEvImg,
  },
  {
    id: 10,
    brand: 'Hyundai',
    model: 'Verna',
    price: 1400000,
    weight: 1200,
    rating: 4.4,
    type: 'Sedan',
    image: vernaImg,
  },
  {
    id: 11,
    brand: 'Mahindra',
    model: 'XUV700',
    price: 2000000,
    weight: 1850,
    rating: 4.7,
    type: 'SUV',
    image: xuv700Img,
  },
  {
    id: 12,
    brand: 'Renault',
    model: 'Kiger',
    price: 850000,
    weight: 1012,
    rating: 4.1,
    type: 'SUV',
    image: kigerImg,
  },
]