import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { FetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    dispatch(FetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal: controller.signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchStatusActions.markFetchDone());
        dispatch(itemActions.addInitialItems(items));
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to fetch items:", error);
          dispatch(
            FetchStatusActions.markFetchingFailed(
              "Server is not reachable. Start backend on port 8080."
            )
          );
        }
      })
      .finally(() => {
        dispatch(FetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [dispatch, fetchStatus.fetchDone]);

  return <></>;
};
export default FetchItems;
