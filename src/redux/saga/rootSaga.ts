import { all } from "redux-saga/effects";
import {
  WordsSaga,
  // RandomWordsSaga,
  WatchPostWord,
  WatchDeleteWord,
} from "./wordsSaga";

function* RootSaga() {
  yield all([
    WordsSaga(),
    // RandomWordsSaga(),
    WatchPostWord(),
    WatchDeleteWord(),
  ]);
}

export default RootSaga;
