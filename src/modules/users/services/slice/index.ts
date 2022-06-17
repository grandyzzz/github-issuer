import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { User } from 'modules/graphql/codegen'

export interface UsersState {
  searchValue: string
  selectedUser: User | null
}

const initialState: UsersState = {
  searchValue: '',
  selectedUser: null,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload
    },
  },
})

export const { setSearchValue, setSelectedUser } = usersSlice.actions

export default usersSlice.reducer
