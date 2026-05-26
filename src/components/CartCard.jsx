

export const CartCard = ({product}) => {
    const { name, price, imgSrc } = product;

  return (
    <div className='flex justify-between items-center p-2.5 shadow rounded m-5'>
        <img className='w-40 hidden mr-2.5 sm:block' src={imgSrc} alt="" />
        <span className="w-xs">{name}</span>
        <span className="mx-2.5">${price}</span>
        <button className='p-2 bg-red-button text-sm text-white rounded-md hover:bg-red-900 hover:cursor-pointer'>Remove</button>
    </div>
  )
}
