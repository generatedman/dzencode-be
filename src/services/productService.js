const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29',
      end: '2017-06-29',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29',
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29',
      end: '2017-06-29',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 2,
    date: '2017-06-29',
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29',
      end: '2017-06-29',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29',
  },
  {
    id: 4,
    serialNumber: 1234,
    isNew: 1,
    photo: 'pathToFile.webp',
    title: 'Product1aaaaaaaaaaaaaaaaaaa',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29',
      end: '2017-06-29',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: 0 },
      { value: 2600, symbol: 'UAH', isDefault: 1 },
    ],
    order: 1,
    date: '2017-06-29',
  },
];

export const getAll = () => products;

export const deleteProductById = (id) => {
  products.filter((product) => product.id !== id);
};

export const getProductsByOrderId = (id) => {
  return products.filter((product) => product.order === id);
};
