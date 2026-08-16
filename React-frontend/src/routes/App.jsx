import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  
  const fetchStatus=useSelector((store)=>store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? (
        <LoadingSpinner />
      ) : fetchStatus.hasError ? (
        <main className="container my-5">
          <div className="alert alert-danger" role="alert">
            {fetchStatus.errorMessage}
          </div>
        </main>
      ) : (
        <Outlet />
      )}
     
      <Footer />
    </>
  );
}
 
export default App;
 