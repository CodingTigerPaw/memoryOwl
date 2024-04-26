import { call, put, takeLatest } from "redux-saga/effects";
import {
  WordsAllSuccess,
  getRandomWordSuccess,
  PostWordSucces,
  deleteWordsSucces,
} from "../slices/wordsSlices";
import { PayloadAction } from "@reduxjs/toolkit";

type ActionType = {
  type: string;
  payload: string;
};

const fetchData = <T>(): Promise<T> =>
  fetch("http://localhost:8010/words").then(
    (response) => response.json() as Promise<T>
  );

const fetchOne = <T>(id: string): Promise<T> =>
  fetch(`http://localhost:8010/words?id=${id}`).then((response) => {
    return response.json() as Promise<T>;
  });

const PostData = <T>(newData: ActionType): Promise<T> =>
  fetch("http://localhost:8010/words", {
    method: "POST",
    body: JSON.stringify(newData),
  }).then((response) => response.json());

const deleteData = <T>(id: ActionType): Promise<T> =>
  fetch(`http://localhost:8010/words/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());

function* workGetWordsFetch(): unknown {
  try {
    const words = yield call(fetchData);
    yield put(WordsAllSuccess(words));
  } catch (err) {
    console.log(err);
  }
}

function* workPostWord(action: PayloadAction<ActionType>): unknown {
  try {
    yield call(PostData, action.payload);
    yield put(PostWordSucces(action.payload));
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
    const data = yield call(() => fetchData());
    //fishy solution ...
    const count = data.length;

    const random = String(Math.floor(Math.random() * count));

    const word = yield call(fetchOne, random);
    // console.log(word);

    yield put(getRandomWordSuccess(word));
  } catch (err) {
    console.log(err);
  }
}

function* workDeleteWord(action: PayloadAction<ActionType>): unknown {
  try {
    yield call(deleteData, action.payload);
    yield put(deleteWordsSucces(action.payload));
  } catch (err) {
    console.log(err);
  }
}

export function* WordsSaga() {
  yield takeLatest("wordsSlice/getAllWordsFetch", workGetWordsFetch);
}
export function* RandomWordsSaga() {
  yield takeLatest("wordsSlice/getRandomWordFetch", workGetRandomWord);
}
export function* WatchPostWord() {
  yield takeLatest("wordsSlice/postWord", workPostWord);
}

export function* WatchDeleteWord() {
  yield takeLatest("wordsSlice/deleteWord", workDeleteWord);
}
