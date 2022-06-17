import { ArrowsDownUp } from 'phosphor-react';
import React, { useState } from 'react';
import DraggableListItem from './DraggableListItem';

const DraggableList: React.FC = () => {
  const [data, setData] = useState([
    'Harry Potter and the Prisoner of Azkaban',
    'Uncut Gems',
    'Arrival',
    'The Lord of the Rings: The Return of the King',
    'Green Room',
  ]);

  const [dragStartIndex, setDragStartIndex] = useState<number | null>(null);

  // get index of dragged item
  const onDragStart = (index: number) => setDragStartIndex(index);

  // update list when item dropped
  const onDrop = (dropIndex: number) => {
    if (!(dragStartIndex !== null && dragStartIndex >= 0)) return;
    // get dragged item
    const dragItem = data[dragStartIndex];

    // delete dragged item
    const list = [...data];
    list.splice(dragStartIndex, 1);

    // update list
    if (dragStartIndex < dropIndex) {
      setData([
        ...list.slice(0, dropIndex - 1),
        dragItem,
        ...list.slice(dropIndex - 1, list.length),
      ]);
    } else {
      setData([
        ...list.slice(0, dropIndex),
        dragItem,
        ...list.slice(dropIndex, list.length),
      ]);
    }
  };

  return (
    <ul className="list-none">
      {data.map((item, index) => (
        <DraggableListItem
          key={index}
          index={index}
          onDragStart={(idx) => onDragStart(idx)}
          onDrop={(idx) => onDrop(idx)}
        >
          <div className="w-full bg-background-light rounded-2xl px-3 py-4 flex justify-between items-center">
            <p>
              {index + 1}. {item}
            </p>
          </div>
        </DraggableListItem>
      ))}

      {/* 
        Add last item to drag items to last position
        Last item don't need onDragStart because it can not be dragged
    */}
      <DraggableListItem
        key={data.length}
        index={data.length}
        onDrop={(idx) => onDrop(idx)}
        draggable={false}
      ></DraggableListItem>
    </ul>
  );
};

export { DraggableList };
