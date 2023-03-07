import { useState } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { Loading } from "../components/Loading";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";
import { Error } from "../components/Error";

export function ProductsPage(){
    const [visibilityModal, setVisibilityModal] = useState(false);
    const { loading, products, error, addProduct } = useProducts();
  
    const createHandler = (product: IProduct) => {
      setVisibilityModal(false);
      addProduct(product);
    };
  
    return (
      <div className="container mx-auto max-w-2xl pt-5" style={{marginTop: 125}}>
        {loading && <Loading />}
        {error && <Error error={error} />}
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        {visibilityModal && (
          <Modal
            title="Create new product"
            onClose={() => setVisibilityModal(false)}
          >
            <CreateProduct onCreate={createHandler} />
          </Modal>
        )}
        <button 
        className="fixed bottom-5 right-5 rounded-full bg-yellow-400 text-black text-2xl px-4 py-2"
        onClick={() => {
          setVisibilityModal(true)
        }}>
          +
        </button>
      </div>
    );
}