import Image from 'next/image';
import { Icon } from '@iconify/react';

const HeroSection = () => {
  return (
    <section className='mt-[2px] bg-white lg:flex lg:flex-row-reverse'>
      <div className='lg:basis-1/2 lg:relative'>
        <div className='relative h-[35rem] lg:h-full'>
          <Image className='object-cover' src='/assets/hero-bg.jpg' layout='fill' />
        </div>
        <div className='lg:absolute lg:py-7 lg:max-w-[40rem] lg:w-full lg:bottom-0 lg:bg-white lg:shadow-[0_1px_#00000020] lg:left-0 flex-x bg-zinc-900 py-5 px-6 text-lg'>
          <span className='text-gray-400 cursor-pointer hover:text-white lg:text-gray-700 lg:hover:text-black'>Build Bridges Not Walls Backpack</span>
          <b className='text-white font-normal lg:text-black'>$ 50.00 USD</b>
        </div>
      </div>
      <div className='text-left px-6 lg:px-0 lg:basis-1/2'>
        <div className='py-16 my-16 lg:w-2/3 lg:mx-auto'>
          <h1 className='text-4xl lg:text-5xl lg:leading-[1.2]'>
            On the wave of the great fashion
          </h1>
          <p className='text-lg font-thin text-gray-700 mt-6'>
            Combining classic collections along with limited editions and hand printed signature
            designs. All of our items are super comfy and cool at the same time.
          </p>
        </div>
        <div className='lg:pl-[calc(50vw-40rem)]'>
          <div className='lg:flex cursor-pointer hover:bg-black bg-zinc-900 p-7 lg:p-8'>
            <div className='relative h-44 w-[12rem]'>
              <Image className='object-cover' src='/assets/elementary-kid.png' layout='fill' />
            </div>
            <div className='lg:mx-auto w-6/12'>
              <h2 className='text-white text-xl mt-5'>Meet the Bay Area</h2>
              <p className='text-gray-400 mt-3'>
                Grab a tee and surf into the sunset our summer collection has never been so full of
                sunshine we love colored design and vibrant prints.{' '}
              </p>
            </div>
          </div>
          <button className='lg:py-[30px] bg-green-tea text-white flex-x p-7 w-full group hover:bg-green-tea-dense duration-300'>
            <b>DISCOVER PRODUCTS</b>{' '}
            <Icon
              className='text-2xl group-hover:translate-x-2 duration-300'
              icon='bi:arrow-right'
            />
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
