import React from 'react';

import { Spin } from '@features/ui-kit';
import styles from './LoadingLayout.module.css';

export const LoadingLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Spin />
    </div>
  );
};
