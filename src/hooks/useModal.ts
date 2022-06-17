import { useState } from 'react'

export function useModal() {
  const [isOpened, setIsOpened] = useState(false)

  function toggleModal() {
    setIsOpened((prevState) => !prevState)
  }

  return {
    isOpened,
    toggleModal,
  }
}
