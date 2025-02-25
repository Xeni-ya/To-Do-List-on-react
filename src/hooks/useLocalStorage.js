import { useState, useEffact } from 'react';

const getSavedValue = (key, initiaValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) return savedValue
  return initiaValue
}

export default function useLocalStorage(key, initiaValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initiaValue)
  })

  useEffact(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}
