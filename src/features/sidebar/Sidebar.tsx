import { items } from '@data/transports';
import { AppRoutes } from '@enums/routes';
import { Collapse } from '@features/ui-kit';
import { ICarModel, ICarSubCategory } from '@models/car/car';
import { ICollapseItem } from '@models/collapse';
import { useEffect, useMemo, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import styles from './Sidebar.module.css';

//1 Решил использовать useState и useEffect, так как хотел сделать некую асинхронщину с Loading'ом, как на реальном проекте

//2 Обычно я, чтобы пройтись по деревовидной структуре данных использую рекурсию, и он более предпочтителен, нежели делать код громоздким через цикл со stack'ом
//3 Сложность моего алгоритма линейно-экспоненциальная сложность O(n⋅m^d), так как внутри цикла(map) есть рекурсия

//4 Альтернативное решение вместо рекурсии
// const generateCollapseItems = (
//   data: ICarModel[] | ICarSubCategory[] | null,
// ): ICollapseItem[] => {
//   const stack: {
//     item: ICarModel | ICarSubCategory;
//     parent: ICollapseItem | null;
//   }[] = [];
//   const result: ICollapseItem[] = [];

//   if (!data) {
//     return [];
//   }

//   for (let i = 0; i < data.length; i++) {
//     stack.push({ item: data[i], parent: null });
//   }

//   while (stack.length > 0) {
//     const { item, parent } = stack.pop()!;
//     const { id, title, subcategories } = item;
//     const hasChildren = subcategories && subcategories.length > 0;
//     const subcategoriesCount = subcategories?.length ?? 0;
//     const collapseItem: ICollapseItem = {
//       value: id,
//       label: (
//         <>
//           <Link
//             className={styles.link}
//             to={generatePath(AppRoutes.TRANSPORTS_BY_CATEGORY, {
//               categoryId: id,
//             })}
//           >
//             {title}
//           </Link>
//           ({subcategoriesCount})
//         </>
//       ),
//       children: [],
//     };

//     if (hasChildren) {
//       for (let i = 0; i < subcategories!.length; i++) {
//         stack.push({ item: subcategories![i], parent: collapseItem });
//       }
//     }

//     if (parent) {
//       parent.children?.push(collapseItem);
//     } else {
//       result.push(collapseItem);
//     }
//   }

//   return result;
// };
export const Sidebar: React.FC = () => {
  const [transports, setTransports] = useState<ICarModel[] | null>(null);
  const [loading, setLoading] = useState(true);

  const generateCollapseItems = (
    data: ICarModel[] | ICarSubCategory[] | null,
  ): ICollapseItem[] => {
    if (!data) {
      return [];
    }
    return data.map((item) => {
      const { id, title, subcategories } = item;
      const hasChildren = subcategories && subcategories.length > 0;
      const subcategoriesCount = subcategories?.length ?? 0;
      const collapseItem: ICollapseItem = {
        value: id,
        label: (
          <>
            <Link
              className={styles.link}
              to={generatePath(AppRoutes.TRANSPORTS_BY_CATEGORY, {
                categoryId: id,
              })}
            >
              {title}
            </Link>
            ({subcategoriesCount})
          </>
        ),
        children: hasChildren ? generateCollapseItems(subcategories) : [],
      };
      return collapseItem;
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTransports(items);
      setLoading(false);
    }, 1000);
  }, []);

  const collapseItems = useMemo(() => {
    return generateCollapseItems(transports);
  }, [transports]);

  return (
    <aside className={styles.aside}>
      <div className={styles.collapseWrapper}>
        <Collapse items={collapseItems} loading={loading} />
      </div>
    </aside>
  );
};
