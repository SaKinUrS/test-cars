import { ArrowIcon } from '@icons/ArrowIcon';
import { ICollapseItem } from '@models/collapse';
import React, { useState } from 'react';
import styles from './collapse.module.css';

export const CollapseItem: React.FC<ICollapseItem> = ({ label, children }) => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.collapseItem} ${open ? styles.open : ''}`}>
      <div className={styles.collapseItemTitle}>
        <div className={styles.label}>{label}</div>
        {children && children.length > 0 && (
          <button
            className={`${styles.arrow} ${open ? styles.openedIcon : ''}`}
            onClick={toggleCollapse}
          >
            <ArrowIcon />
          </button>
        )}
      </div>
      {open && children?.length && (
        <div className={styles.content}>
          {children.map((child) => (
            <CollapseItem key={child.value} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};
