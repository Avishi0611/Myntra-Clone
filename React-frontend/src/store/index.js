import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice"
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice"
import searchSlice from "./searchSlice"

const myntraStore= configureStore({
  reducer: {
    items :itemSlice.reducer,
    fetchStatus :fetchStatusSlice.reducer,
    bag : bagSlice.reducer,
    search : searchSlice.reducer,

  }
});
export default myntraStore;
  