import { useTitle } from "../hooks/useTitle"
import { ProductCard } from "../components"

export const Home = () => {
  useTitle('Home')

  const products = [
    {
      id: 1,
      name: 'Sony Wh-Ch510 Bluetooth Wireless',
      imgSrc: '/assets/1001.png',
      price: 149
    },
    {
      id: 2,
      name: 'boAt Rockerz 450',
      imgSrc: '/assets/1002.png',
      price: 49
    },
    {
      id: 3,
      name: 'JBL Tune 760NC',
      imgSrc: '/assets/1003.png',
      price: 179
    },
    {
      id: 4,
      name: 'Logitech H111 Wired',
      imgSrc: '/assets/1004.png',
      price: 39
    },
    {
      id: 5,
      name: 'APPLE Airpods Max Bluetooth Headset',
      imgSrc: '/assets/1005.png',
      price: 199
    },
    {
      id: 6,
      name: 'ZEBRONICS Zeb-Thunder Wired',
      imgSrc: '/assets/1006.png',
      price: 29
    },
  ]

  return (
    <main>
      <section className="flex flex-wrap justify-around max-w-324 m-auto py-12 px-5 ">
        { products.map( product => (
          <ProductCard product={product} key={product.id}/>
        ))}

      </section>
    </main>
  )
}
