import { describe, expect, it } from "vitest";
import wordsSlices, {
  initialState,
  getAllWordsFetch,
} from "../src/redux/slices/wordsSlices";

describe("Words Slice Reducer", () => {
  it("get all words Fetch action should change value isLoading to True", () => {
    expect(wordsSlices(initialState, getAllWordsFetch())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
});
