import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { DataMap, SearchField } from 'modules/form'
import type { RootState } from 'modules/core'
import { setSearchValue, setSelectedUser } from '../../services'

function UsersSearchField() {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const searchValue = useSelector((state: RootState) => state.users.searchValue)

  console.log(location)

  function handleSubmit({ search }: DataMap) {
    dispatch(setSearchValue(search))
    dispatch(setSelectedUser(null))

    location.pathname !== '/' && navigate('/')
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
