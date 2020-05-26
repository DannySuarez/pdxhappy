import { useState } from 'react';

export const useSearch = () => {
  const [filter, setFilter] = useState('');

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  return { filter, onSearch };
};
