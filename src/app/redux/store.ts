import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '@redux/reducers/countReducer'

export default configureStore({
    reducer: {counter: counterReducer},
})