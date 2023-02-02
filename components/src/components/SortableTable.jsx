import React from 'react'
import Table from './Table';
import { TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted } from 'react-icons/ti';
import useSort from '../hooks/useSort';

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);

  const updatedConfig = config.map(column => {
    if(!column.sortValue) {
      return column;
    }

    return { ...column, header: () => <th className='cursor-pointer hover:bg-gray-100' onClick={() => handleClick(column.label) }>
      <div className='flex items-center'>
      {getIcons(column.label, sortBy, sortOrder)}
      {column.label}
      </div>
    </th>} 
  })

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  )
}

const getIcons = (label, sortBy, sortOrder) => {
  if(label !== sortBy) {
    return <TiArrowUnsorted />
  } 

  if(sortOrder === null) {
    return <TiArrowUnsorted />;
  } else if (sortOrder === 'asc') {
    return <TiArrowSortedUp />
  } else if (sortOrder === 'desc') {
    return <TiArrowSortedDown />
  }
}

export default SortableTable