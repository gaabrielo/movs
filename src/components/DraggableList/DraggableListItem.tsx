import { ArrowsDownUp } from 'phosphor-react';
import React, { useRef } from 'react';

interface DraggableListItemProps {
  children?: React.ReactNode;
  draggable?: boolean | undefined;
  index: number;
  onDragStart?: (idx: number) => Function | void;
  onDrop: (idx: number) => Function | void;
}

const DraggableListItem: React.FC<DraggableListItemProps> = (props) => {
  const itemRef = useRef<any>(null);

  const onDragStart = (e: any) => {
    var dragImgEl = new Image(1, 1);

    dragImgEl.src = 'blank.png';
    document.body.appendChild(dragImgEl);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setDragImage(dragImgEl, 0, 0);

    let ghostNode = e.target.cloneNode(true);
    ghostNode.style.position = 'absolute';
    ghostNode.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
    ghostNode.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';

    ghostNode.style.height = e.target.offsetHeight + 'px';
    ghostNode.style.width = e.target.offsetWidth + 'px';

    // add some style
    ghostNode.style.opacity = '0.8';
    ghostNode.style.pointerEvents = 'none';

    // add id
    ghostNode.id = 'ghostNode';

    document.body.prepend(ghostNode);

    // identify selected item
    itemRef.current?.classList.add('opacity-50');

    if (props.onDragStart) {
      props.onDragStart(props.index);
    }
  };

  // event when dragging
  const onDrag = (e: any) => {
    // move ghost node with mouse
    let ghostNode = document.querySelector<HTMLElement>('#ghostNode');

    if (ghostNode) {
      ghostNode.style.top = e.pageY - e.target.offsetHeight / 2 + 'px';
      ghostNode.style.left = e.pageX - e.target.offsetWidth / 2 + 'px';
      ghostNode.style.zIndex = '1';
    }
  };

  // event when drag end
  const onDragEnd = () => {
    document.querySelector('#ghostNode')?.remove();

    // remove selected item style
    itemRef.current.classList.remove('opacity-50');
  };

  const onDragEnter = () => {
    itemRef.current.classList.add('!border-success');
  };

  const onDragLeave = () => {
    itemRef.current.classList.remove('!border-success');
  };

  const onDragOver = (e: any) => {
    e.preventDefault();
  };

  const onDrop = () => {
    itemRef.current.classList.remove('!border-success');
    props.onDrop(props.index);
  };

  return (
    <li
      ref={itemRef}
      className="py-2 list-none all-inside:pointer-events-none border-t-2 border-transparent group relative"
      draggable={props.draggable !== undefined ? props.draggable : true}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {props.children}

      {(props.draggable === undefined || !!props.draggable) && (
        <ArrowsDownUp
          size="1.25rem"
          className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-1/2 right-3 -translate-y-1/2 text-subtitle"
        />
      )}
    </li>
  );
};

export default DraggableListItem;
