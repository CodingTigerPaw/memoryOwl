import { call, put, takeEvery } from "redux-saga/effects";
import { WordsAllSuccess, getRandomWordSuccess } from "../slices/wordsSlices";

// type ActionType = {
//   type: string;
//   payload: string;
// };

const fetchData = <T>(): Promise<T> =>
  fetch("http://localhost:8010/words").then(
    (response) => response.json() as Promise<T>
  );

const fetchOne = <T>(id: string): Promise<T> =>
  fetch(`http://localhost:8010/words?id=${id}`).then((response) => {
    return response.json() as Promise<T>;
  });

function* workGetWordsFetch(): unknown {
  try {
    const words = yield call(() => fetchData());
    yield put(WordsAllSuccess(words));
  } catch (err) {
    console.log(err);
  }
}

// function* workGetOneWordFetch(action: ActionType): unknown {
//   try {
//     const word = yield call(() => fetchOne(action.payload as string));
//     yield put(getOneWordSuccess(word));
//   } catch (err) {
//     console.log(err);
//   }
// }

function* workGetRandomWord(): unknown {
  try {
    const random = String(Math.floor(Math.random() * 5));

    const word = yield call(() => fetchOne(random));
    // console.log(word);

    yield put(getRandomWordSuccess(word));
  } catch (err) {
    console.log(err);
  }
}

export function* WordsSaga() {
  yield takeEvery("wordsSlice/getAllWordsFetch", workGetWordsFetch);
}
export function* RandomWordsSaga() {
  yield takeEvery("wordsSlice/getRandomWordFetch", workGetRandomWord);
}
