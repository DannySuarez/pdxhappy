import { useState } from 'react';

export const useSearch = () => {
  const [filter, setFilter] = useState('');

  const onSearch = e => {
    setFilter(e.target.value.toLowerCase());
  };

  return { filter, onSearch };
};
