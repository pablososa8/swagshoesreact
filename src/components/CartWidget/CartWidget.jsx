
import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = () => {
return (
    <div className="d-flex" >
        <FaShoppingCart color="green" size={25} />
        <p className="mx-2">Comprar</p>
    </div>
)
}