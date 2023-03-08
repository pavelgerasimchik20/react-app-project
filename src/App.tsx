import {Route, Routes} from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { GalleryPage } from "./pages/GalleryPage";
import { ProductsPage } from "./pages/ProductsPage";
import { Navigation } from './components/Navigation';
import { MainNumber } from "./components/MainNumber";
import { ContactsPage } from './pages/ContactsPage';

function App() {
  return (
    <div>
    {/* style={{
      backgroundImage: 'url("https://media.istockphoto.com/id/1294847268/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%82%D1%83%D1%80%D0%BD%D0%B8%D1%80-%D0%BF%D0%BE-%D0%BF%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D0%BD%D0%B3%D1%83.jpg?s=612x612&w=0&k=20&c=__GouCntOlUz-wMJjO0nfkNxDZj4j6LkDKzD7rrrrUk=")',
      backgroundSize: 'cover'
      }} */}

      <MainNumber/>
      <Navigation/>
      
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path="/products" element={ <ProductsPage/> } />
        <Route path="/contacts" element={ <ContactsPage/> } />
        <Route path="/gallery" element={ <GalleryPage/> } />
      </Routes>
    </div> 
  )
}

export default App;
