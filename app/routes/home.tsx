// Home.tsx
import type { Route as HomeRoute } from "./+types/home";
import Header from "./Header/header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Carousel from "./Body/Carousel";// Import the Carousel component
import ItemDetail from "./Body/ItemDetail"; // Import the ItemDetail component
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import 'app/app.css';
import Trust from "./Footer/Trust";

export function meta({}: HomeRoute.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      
      <Body />
      <Trust />
      <Footer />
      <Routes>
        <Route path="/item/:itemId" element={<ItemDetail />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}