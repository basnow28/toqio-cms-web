import { map } from 'lodash';
import React from 'react';
import { ListComponent } from '../../../components/listComponent/listComponent';

const DashboardItem = (props) => {
  return (
    <div>
      {props.style}
      {map(props.components,
        (component, index) =>
          <ListComponent
            text={component.component}
            key={index}
          />)}
    </div>
  )
}

export default DashboardItem;