import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components"

export const Cart = () => {
  useTitle('Cart');

  const products = [
    {id: 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "imgSrc": "/assets/1001.png",}, 
    {id: 2, "name": "boAt Rockerz 450", "price": 49, "imgSrc": "/assets/1002.png",}, 
  ]

  return (
    <main>
      <section className='flex flex-col py-10 max-w-7xl m-auto'>
        <div className='flex justify-center text-3xl font-bold mb-3'>
          <h1 className='mr-2'>Cart Items:</h1>
          <span>{products.length}</span>
        </div>
        { products.map(product => (
          <CartCard product={product} key={product.id}/>
        ))}
        
      </section>
      
    </main>
  )
}
