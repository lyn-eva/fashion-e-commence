import Image from 'next/image';
import { Icon } from '@iconify/react';

const products = [
  { descr: 'Grey & Blue Build Bridges Not Walls Tee', price: 29.5, bg: '/assets/product-1.jpg' },
  { descr: 'Street Skull Black/Orange Tee', price: 32.0, bg: '/assets/product-2.jpg' },
  { descr: 'SFP x Anchor 2.0 Collab Tee', price: 32.0, bg: '/assets/product-3.jpg' },
  { descr: 'I Left My Heart in SFP Navy Tee', price: 32.0, bg: '/assets/product-4.jpg' },
  { descr: 'Charcoal & Orange Logo Tee', price: 29.5, bg: '/assets/product-5.jpg' },
  { descr: 'Midnight Sunset Sutro Tower Tee', price: 32.0, bg: '/assets/product-6.jpg' },
  { descr: 'Black Stay Psycho Crop Top', price: 29.5, bg: '/assets/product-7.jpg' },
  { descr: 'Sutro tower dolman', price: 29.5, bg: '/assets/product-8.jpg' },
  { descr: 'Blue & Gold Logo Dolman', price: 29.5, bg: '/assets/product-9.jpg' },
  { descr: 'Script Crop Crew', price: 50.0, bg: '/assets/product-10.jpg' },
  { descr: 'Build Bridges Not Walls Kids Tee', price: 26.0, bg: '/assets/product-11.jpg' },
  { descr: 'Youth Fogtown tee', price: 26.0, bg: '/assets/product-12.jpg' },
  { descr: 'Kids Take Meeeow Baseball Tee', price: 24.0, bg: '/assets/product-13.jpg' },
  { descr: 'Build Bridges Not Walls Backpack', price: 50.0, bg: '/assets/product-14.jpg' },
  { descr: 'Red Logo Fanny Pack', price: 20.0, bg: '/assets/product-15.jpg' },
];
export default function ProductSection() {
  return (
    <section className='pt-28 text-center px-6 bg-white'>
      <span className='text-sm font-semibold text-gray-500'>SHOP CLOTHING</span>
      <h2 className='text-4xl mt-4'>Explore our latest pieces</h2>
      <ul className='mt-16 md:grid md:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:w-9/10 lg:max-w-[80rem] lg:mx-auto'>
        {products.map(({ bg, descr, price }) => (
          <li className='mb-12'>
            <div className='h-[25rem] relative bg-cover bg-[center_bottom_-7rem] bg-no-repeat p-5 flex items-end cursor-pointer group hover:shadow-[0_0_3px_#00000060]'>
              <Image className='object-cover' src={bg} layout='fill' />
              <button className='bg-white w-full py-5 font-semibold text-sm tracking-wide shadow-[0_2px_3px_#00000060] group-hover:-translate-y-2 duration-300 opacity-0 group-hover:opacity-100'>
                VIEW PRODUCT
              </button>
            </div>
            <div className='text-left mt-6'>
              <button className='mb-1 block text-lg text-gray-700 hover:text-black'>{descr}</button>
              <span className='text-[32px]'>$ {price} USD</span>
            </div>
          </li>
        ))}
      </ul>
      <button className='mx-auto tracking-wide text-sm gap-4 bg-zinc-900 text-white flex-x px-7 py-4 group duration-300'>
        <b>VIEW ALL PRODUCTS</b>{' '}
        <Icon className='text-2xl group-hover:translate-x-2 duration-300' icon='bi:arrow-right' />{' '}
      </button>
    </section>
  );
}
