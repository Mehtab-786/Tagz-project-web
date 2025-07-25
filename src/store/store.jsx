import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './reducers/ProductSlice'
import UserSlice from './reducers/UserSlice'

export default configureStore({
  reducer: {
    UserReducer : UserSlice,
    ProductReducer : ProductSlice
  },
})
