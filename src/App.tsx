import { Error } from './components/Error';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Loading } from './components/Loading';

function App() {  

  const {loading, products, error} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <Loading/> }
      { error && <Error error={error} /> }
      { products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
