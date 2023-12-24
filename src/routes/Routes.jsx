import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { Shop } from "../pages/Shop";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Admin } from "../pages/Admin";
import { Create } from "../pages/Create";
import { Edit } from "../pages/Edit";


export function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item" element={<Item />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  );
}