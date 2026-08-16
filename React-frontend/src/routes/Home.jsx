import HomeItem from "../components/HomeItem";
import HeroBanner from "../components/HeroBanner";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  const query = useSelector((store) => store.search.query);

  const filteredItems = items.filter((item) => {
    const search = query.trim().toLowerCase();
    if (!search) return true;
    return (
      item.item_name.toLowerCase().includes(search) ||
      item.company.toLowerCase().includes(search)
    );
  });

  return (
      <main>
        <HeroBanner />
        {filteredItems.length === 0 ? (
          <div className="no-results">
            No products found for "{query}"
          </div>
        ) : (
          <div className="items-container">
            {filteredItems.map((item) => (
              <HomeItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>
  );
};
export default Home;
