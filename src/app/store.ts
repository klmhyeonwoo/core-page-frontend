import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from "../features/scrollSlice";
import { createWrapper } from "next-redux-wrapper";
import mobileSlice from "../features/mobileSlice";

const makeState = () => {
  const store = configureStore({
    reducer: {
      scroll: scrollSlice,
      mobile: mobileSlice,
    },
  });
  return store;
};

const wrapper = createWrapper(makeState);

// export type AppDisPatch = typeof store.dispatch;
// export type TestState = ReturnType<typeof store.getState>

export type AppStore = ReturnType<typeof makeState>;
export type AppDisPatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export default wrapper;
