import { all } from "redux-saga/effects";
import { WordsSaga, RandomWordsSaga } from "./wordsSaga";

function* RootSaga() {
  yield all([WordsSaga(), RandomWordsSaga()]);
}

export default RootSaga;
