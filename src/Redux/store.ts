import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { counterSlice } from "./counter/slice";
import PersistConfigs from "./persist.config";
import listener from "./listener";

const rootReducer = {
    counter: persistReducer(PersistConfigs.counter, counterSlice.reducer),
};

// Configure store
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Persisted store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

listener();