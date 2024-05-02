import { ICarModel } from '@models/car/car';

export const items: ICarModel[] = [
  {
    id: 'bce86ba4-246e-42d0-8bef-f45c16e64f6c',
    title: 'Автомобили',
    subcategories: [
      {
        id: '7a7d2d80-b3b7-4f84-973e-de76c2837d93',
        title: 'BMW',
        parentId: 'bce86ba4-246e-42d0-8bef-f45c16e64f6c',
        subcategories: [
          {
            id: '0ec6cdbc-29e3-4bda-8c86-0ab30b3e955b',
            title: '5-series',
            parentId: '7a7d2d80-b3b7-4f84-973e-de76c2837d93',
          },
          {
            id: '010f867b-cee6-433f-9e7f-1559e4e3ba91',
            title: '7-series',
            parentId: '7a7d2d80-b3b7-4f84-973e-de76c2837d93',
            
          },
        ],
      },
    ],
  },
  {
    id: '2cbe4511-25dd-407c-98e7-738702249c50',
    title: 'Мотоциклы',
    subcategories: [],
  },
];