import { useState } from 'react'
import { DataMap, SearchField } from 'modules/form'

function UsersSearchField() {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit({ search }: DataMap) {
    setSearchValue(search)
  }

  return (
    <SearchField
      className="max-w-xl pt-14 pb-5 mx-auto"
      name="search"
      value={searchValue}
      onSubmit={handleSubmit}
      placeholder="Search users..."
    />
  )
}

export default UsersSearchField
