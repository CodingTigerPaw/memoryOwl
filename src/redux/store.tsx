import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import wordsSlices from "./slices/wordsSlices";

import createSagaMiddleware from "@redux-saga/core";

//import WordsSaga from "./saga/wordsSaga";
import RootSaga from "./saga/rootSaga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    words: wordsSlices,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(RootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
