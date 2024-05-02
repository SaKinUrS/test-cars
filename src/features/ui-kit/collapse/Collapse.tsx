import { ICollapseItem } from '@models/collapse';
import { FC } from 'react';
import { Spin } from '../spin';
import { CollapseItem } from './CollapseItem';
import styles from './collapse.module.css';
interface ICollapseProps {
  items: ICollapseItem[];
  loading?: boolean;
}

export const Collapse: FC<ICollapseProps> = ({ items, loading = false }) => {
  if (loading) {
    return <Spin />;
  }
  return (
    <div className={styles.collapse}>
      {items.map((item) => (
        <CollapseItem
          key={item.value}
          value={item.value}
          label={item.label}
          children={item.children ?? []}
        />
      ))}
    </div>
  );
};
