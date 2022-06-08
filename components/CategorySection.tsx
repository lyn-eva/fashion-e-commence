import Image from 'next/image';
import { Icon } from '@iconify/react';

const items = [
  { bg: '/assets/accessories.jpg', title: 'Accessories' },
  { bg: '/assets/men.jpg', title: 'Men' },
  { bg: '/assets/women.jpg', title: 'Women' },
  { bg: '/assets/youth.jpg', title: 'Youth' },
];

export default function CategorySection() {
  return (
    <section className='pt-24 bg-white'>
      <ul className='mx-auto w-9/10 max-w-[80rem] lg:grid lg:gap-8 grid-cols-2'>
        {items.map(({ bg, title }) => (
          <li className='relative mt-6 lg:mt-0 bg-no-repeat h-[38rem] flex items-end bg-center bg-cover shadow-md'>
            <Image className='object-cover' src={bg} layout='fill' />
            <div className='z-[1] bg-white m-6 grow p-8 pb-7'>
              <h3 className='text-3xl leading-5'>{title}</h3>
              <button className='bg-transparant mt-6 text-gray-700 hover:text-black text-[13px] font-semibold flex-x group gap-6'>
                <span>EXPLORE ALL PRODUCTS</span>{' '}
                <Icon
                  className='text-black text-xl group-hover:translate-x-2 duration-300'
                  icon='bi:arrow-right'
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
