import React, { memo, useState } from 'react'

const Categories = memo(({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = index => {
    setActiveItem(index)
    onClickItem(index)
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              key={`${name}_${index}`}
              onClick={() => onSelectItem(index)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

export default Categories
