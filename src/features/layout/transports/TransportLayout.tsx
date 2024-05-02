// import { items } from '@data/transports';
// import { ICarModel, ICarSubCategory } from '@models/car/car';
import { useParams } from 'react-router-dom';
import styles from './TransportLayout.module.css';
export const TransportLayout: React.FC = () => {
  const { categoryId } = useParams();
  // const flattenMapper = (
  //   data: ICarModel[] | ICarSubCategory[],
  // ): ICarModel[] => {
  //   const res = [];
  //   for (const el of data) {
  //     res.push(el);
  //     if (el?.subcategories && el?.subcategories?.length > 0) {
  //       const children = flattenMapper(el.subcategories);
  //       res.push(...children);
  //     }
  //   }
  //   return res.filter((el) => el.id === categoryId);
  // };
  // const filteredTransportByCategory = flattenMapper(items);
  // console.log(flattenMapper(items));
  return (
    <div className={styles.layout}>
      <span className={styles.label}>Id категории транспорта:</span>
      {categoryId}
    </div>
  );
};
