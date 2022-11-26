import { configureStore } from "@reduxjs/toolkit";
import contador from './slices/contador.slice'
import counter from './slices/counter.slice'
export default configureStore({
    reducer:{
        // aqui van los estados
        contador,
        counter
    }
})
