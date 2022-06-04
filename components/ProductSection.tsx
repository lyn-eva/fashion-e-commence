const products = [
  { descr: 'Grey & Blue Build Bridges Not Walls Tee', price: 29.5, bg: 'bg-product-1' },
  { descr: 'Street Skull Black/Orange Tee', price: 32.0, bg: 'bg-product-2' },
  { descr: 'SFP x Anchor 2.0 Collab Tee', price: 32.0, bg: 'bg-product-3' },
  { descr: 'I Left My Heart in SFP Navy Tee', price: 32.0, bg: 'bg-product-4' },
  { descr: 'Charcoal & Orange Logo Tee', price: 29.5, bg: 'bg-product-5' },
  { descr: 'Midnight Sunset Sutro Tower Tee', price: 32.0, bg: 'bg-product-6' },
  { descr: 'Black Stay Psycho Crop Top', price: 29.5, bg: 'bg-product-7' },
  { descr: 'Sutro tower dolman', price: 29.5, bg: 'bg-product-8' },
  { descr: 'Blue & Gold Logo Dolman', price: 29.5, bg: 'bg-product-9' },
  { descr: 'Script Crop Crew', price: 50.0, bg: 'bg-product-10' },
  { descr: 'Build Bridges Not Walls Kids Tee', price: 26.0, bg: 'bg-product-11' },
  { descr: 'Youth Fogtown tee', price: 26.0, bg: 'bg-product-12' },
  { descr: 'Kids Take Meeeow Baseball Tee', price: 24.0, bg: 'bg-product-13' },
  { descr: 'Build Bridges Not Walls Backpack', price: 50.0, bg: 'bg-product-14' },
  { descr: 'Red Logo Fanny Pack', price: 20.0, bg: 'bg-product-15' },
];

export default function ProductSection() {
  return (
    <section className='mt-20 text-center px-6'>
      <span className='text-sm font-semibold text-gray-500'>SHOP CLOTHING</span>
      <h2 className='text-4xl mt-4'>Explore our latest pieces</h2>
      <ul className='mt-16'>
        {products.map(({ bg, descr, price }) => (
          <li className="mb-12">
            <div className={`${bg} h-[25rem] bg-cover bg-[center_bottom_-7rem] bg-no-repeat p-5 flex items-end cursor-pointer group hover:shadow-[0_0_3px_#00000060]`}>
              <button className='bg-white w-full py-5 font-semibold text-sm tracking-wide shadow-[0_2px_3px_#00000060] group-hover:-translate-y-2 duration-300 opacity-0 group-hover:opacity-100'>
                VIEW PRODUCT
              </button>
            </div>
            <div className="text-left mt-6">
              <button className='mb-1 block text-lg text-gray-700 hover:text-black'>{descr}</button>
              <span className="text-[32px]">$ {price} USD</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
