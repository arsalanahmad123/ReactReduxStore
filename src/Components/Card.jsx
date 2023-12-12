import { useDispatch } from "react-redux";
import { addItemToCart } from "../Features/cartSlice";
function Card(props) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        id: props.keyId,
        price: props.price,
        quantity: 1,
        name: props.title,
      })
    );
  };
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
        <figure>
          <img src={props.imgSrc} alt={props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}!</h2>
          <p>{props.description}</p>
          <p className="text-2xl font-bold">Rs.{props.price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
