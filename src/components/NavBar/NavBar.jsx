import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
return (
    <nav className="d-flex justify-content-around p-4">
        <img src="https://lzd-img-global.slatic.net/g/p/68b52a5932b6f2bb8149881ce6ce77f0.jpg_720x720q80.jpg" alt="" style={{width: "150px"}}/>
        <div>
        <button className="btn btn-success mx-2">Home</button>
        <button className="btn btn-success mx-2">Productos</button>
        <button className="btn btn-success mx-2">Contactos</button>
    </div>
    <CartWidget />
    </nav>
)
}