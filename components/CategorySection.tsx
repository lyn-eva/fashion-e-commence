import { Icon } from '@iconify/react';

const items = [
  { bg: 'bg-accessories', title: 'Accessories' },
  { bg: 'bg-men', title: 'Men' },
  { bg: 'bg-women', title: 'Women' },
  { bg: 'bg-youth', title: 'Youth' },
];

export default function CategorySection() {
  return (
    <section className='px-6 pt-28 bg-white'>
      <ul>
        {items.map(({ bg, title }) => (
          <li className={`${bg} bg-no-repeat h-[38rem] flex items-end bg-center bg-cover shadow-md`}>
            <div className='bg-white m-6 grow p-8 pb-7'>
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
