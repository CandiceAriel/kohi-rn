import Menu from "./Menu";

type CartItem = Menu & {
  quantity: number;
};

export default CartItem;