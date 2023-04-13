import bottichelli from '../assets/bottichelli.jpg';
import daVinci from '../assets/da-vinci.jpg';
import mikelandzhelo from '../assets/mikelandzhelo.jpg';
import rembrandt from '../assets/rembrandt.jpg';

export const items = [
  {
    id: 1,
    price: 1000000,
    oldPrice: 2000000,
    name: '«Рождение Венеры» Сандро Боттичелли',
    image: bottichelli,
    status: true,
    onBasket: false,
  },
  {
    id: 2,
    price: 3000000,
    oldPrice: 0,
    name: '«Тайная вечеря»  Леонардо да Винчи',
    image: daVinci,
    status: true,
    onBasket: false,
  },
  {
    id: 3,
    price: 5000000,
    oldPrice: 6000000,
    name: '«Сотворение Адама» Микеланджело',
    image: mikelandzhelo,
    status: true,
    onBasket: false,
  },
  {
    id: 4,
    price: 100000,
    oldPrice: 'sale',
    name: '«Урок анатомии»  Рембрандт',
    image: rembrandt,
    status: 'sale',
    onBasket: false,
  },
];
