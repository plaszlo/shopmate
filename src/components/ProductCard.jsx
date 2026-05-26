

export const ProductCard = ({ product}) => {
  return (
    <div className='max-w-[375px] rounded shadow pt-5 pb-4 px-2 m-3'>
        <img src={product.imgSrc} alt={product.name} />
        <h2 className='text-lg font-medium pt-7'>{product.name}</h2>
        <div className='flex justify-between items-center'>
            <span className='text-lg font-medium'>${product.price}</span>
            <button className='p-2 bg-blue-button text-white rounded-md mt-5 hover:bg-blue-900 hover:cursor-pointer'>Add To Cart</button>
        </div>
    </div>
  )
}
