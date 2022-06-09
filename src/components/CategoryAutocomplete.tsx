import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

const CategoryAutocomplete: React.FC = () => {
  const [selected, setSelected] = useState<string>();

  return (
    <Autocomplete
      getItemValue={(item) => item.label}
      items={[{ label: 'apple' }, { label: 'banana' }, { label: 'pear' }]}
      renderItem={(item, isHighlighted) => (
        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
          {item.label}
        </div>
      )}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      onSelect={(val) => setSelected(val)}
    />
  );
};

export { CategoryAutocomplete };
