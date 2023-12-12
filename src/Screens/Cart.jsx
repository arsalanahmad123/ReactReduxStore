import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../Features/cartSlice";
import { removeItemFromCart } from "../Features/cartSlice";
function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const finalPrice = useSelector((state) => state.cart.finalPrice);

  const handleIncrement = (itemId) => {
    dispatch(updateQuantity({ itemId, changeAmount: 1 }));
  };

  const handleDecrement = (itemId) => {
    dispatch(updateQuantity({ itemId, changeAmount: -1 }));
  };

  const removeFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  return (
    <>
      <div className="mx-auto flex justify-between items-center w-1/2">
        <h1 className="text-5xl mt-10 text-center font-bold">Cart</h1>
        <h1 className="text-3xl mt-10 text-slate-600">
          Total: <span className="font-bold text-2xl">Rs.{finalPrice}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {items.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="flex justify-center items-center flex-col mt-16">
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-row justify-between items-center  gap-10 mt-2"
              >
                <p className="font-bold text-2xl">{item.name}</p>
                <p className="font-light ">Rs.{item.totalPrice}</p>
                <div className="flex flex-row justify-center items-center gap-1">
                  {item.quantity === 1 ? (
                    ""
                  ) : (
                    <span
                      className="font-bold hover:cursor-pointer w-10 h-10 rounded-full hover:bg-base-200 flex justify-center items-center"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </span>
                  )}
                  <p className="font-light ">Quantity: {item.quantity}</p>
                  <span
                    className="font-bold hover:cursor-pointer w-10 h-10 rounded-full hover:bg-base-200 flex justify-center items-center"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </span>
                </div>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Cart;
