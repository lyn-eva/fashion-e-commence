import { Icon } from '@iconify/react';

const articles = [
  { heading: 'How to choose the right surfboard for any time of the day.', bg: 'bg-men' },
  { heading: '10 t-shirts for every mood you’ll ever have', bg: 'bg-couple' },
  {
    heading: 'Welcome to the surf club. Discover the best way to express yourself.',
    bg: 'bg-women',
  },
];

export default function ArticleSection() {
  return (
    <section className='bg-white pt-20 pb-10 px-6'>
      <span className='text-sm font-semibold text-gray-500'>OUR ARTICLES</span>
      <h4 className='text-3xl mt-3 leading-10'>Welcome to the surf club. Discover the best way to express yourself.</h4>
      <ul className='mt-12'>
        {articles.map(({ heading, bg }) => (
          <li className='h-[30rem] relative mt-8'>
            <div className={`${bg} brightness-50 h-full bg-cover bg-center bg-no-repeat`}></div>
            <div className='absolute flex flex-col p-6 h-full bottom-0 right-0'>
              <span className='px-4 py-2 bg-[#ffffff1c] border-[1px] block w-fit text-sm font-semibold tracking-wider text-white'>
                NEWS
              </span>
              <h4 className='text-3xl mt-10 cursor-pointer hover:opacity-80 leading-10 text-white'>{heading}</h4>
              <button className='bg-white text-black flex-x py-5 px-8 gap-5 w-fit mt-auto group duration-300'>
                <b className='text-[13px]'>EXPLORE</b>{' '}
                <Icon
                  className='text-2xl group-hover:translate-x-2 duration-300'
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
