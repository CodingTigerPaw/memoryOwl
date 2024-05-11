import { configureStore } from "@reduxjs/toolkit";
import wordsSlices from "./slices/wordsSlices";

import createSagaMiddleware from "@redux-saga/core";

import RootSaga from "./saga/rootSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    words: wordsSlices,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
