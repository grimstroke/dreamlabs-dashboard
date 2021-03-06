/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import cx from 'classnames';
import styles from './RenderRow.module.scss';

const RenderRow = (props) => {
  return props.keys.map((key, index) => {
    if (props.headerVisible[key].isVisible) {
      switch (typeof props.data[key]) {
        case 'number':
        case 'string':
          return (
            <td key={index} className={cx(styles['dashboard-td'])}>
              {props.data[key]}
            </td>
          );
        case 'boolean':
          return (
            key !== 'isHidden' && (
              <td key={index} className={cx(styles['dashboard-td'])}>
                <input type="checkbox" checked={props.data[key]} disabled />
              </td>
            )
          );
        case 'object':
          if (Array.isArray(props.data[key])) {
            return (
              <td key={index} className={cx(styles['dashboard-td'])}>
                {props.data[key].join(', ')}
              </td>
            );
          }
          return null;
        default:
          return null;
      }
    }
    return null;
  });
};

export default RenderRow;
