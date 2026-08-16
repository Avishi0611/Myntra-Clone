import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);

  const item = items.find((i) => i.id === id);

  if (!item) {
    return (
      <main className="container my-5">
        <div className="alert alert-warning">
          Product not found. <Link to="/">Go back home</Link>
        </div>
      </main>
    );
  }

  const inBag = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => dispatch(bagActions.addToBag(item.id));
  const handleRemove = () => dispatch(bagActions.removeFromBag(item.id));

  return (
    <main>
      <div className="pdp-container">
        <div className="pdp-image-section">
          <img className="pdp-image" src={item.image} alt={item.item_name} />
        </div>
        <div className="pdp-info-section">
          <div className="pdp-company">{item.company}</div>
          <div className="pdp-item-name">{item.item_name}</div>
          <div className="pdp-rating">
            {item.rating.stars} ⭐ | {item.rating.count} Ratings
          </div>
          <div className="pdp-price">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>
          <div className="pdp-return">{item.return_period} days return available</div>
          <div className="pdp-delivery">Delivery by {item.delivery_date}</div>

          {inBag ? (
            <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemove}>
              <AiFillDelete /> Remove from Bag
            </button>
          ) : (
            <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>
              <GrAddCircle /> Add to Bag
            </button>
          )}

          <div className="pdp-back">
            <Link to="/">← Back to shopping</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
