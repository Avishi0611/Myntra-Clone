import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice=createSlice({
  name:'fetchStatus', // false : 'PENDING and true :'DONE'
  initialState :{
    fetchDone:false,
    currentlyFetching:false,
    hasError:false,
    errorMessage:"",
  },
  reducers:{
    markFetchDone:(state)=>{
   state.fetchDone=true;
   },

   markFetchingStarted:(state)=>{
   state.currentlyFetching=true;
   state.hasError=false;
   state.errorMessage="";
   },
    markFetchingFinished:(state)=>{
    state.currentlyFetching=false;
   },
   markFetchingFailed:(state,action)=>{
    state.hasError=true;
    state.errorMessage=action.payload || "Unable to fetch items from server.";
   },

   
  }
});
export const FetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;
