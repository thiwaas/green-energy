import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/api'

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async (info) => {
    console.log(info)
    try {
        const { data } = await api.post('/admin-login', info, { withCredential : true })
        console.log(info)
    } catch (error) {

    }
  }
)

export const counterSlice = createSlice({
  name: 'auth',
  initialState : {
        successMessage : '',
        errorMessage : '',
        loader : false,
        userInfo : ''
  },
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer