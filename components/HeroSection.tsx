import Image from 'next/image';
import { Icon } from '@iconify/react';

const HeroSection = () => {
  return (
    <section className='mt-[2px] mb-10'>
      <div>
        <Image className='block' src='/assets/hero-bg.jpg' width={3385} height={3874} />
        <div className='flex-x bg-zinc-900 py-5 px-6 text-lg -mt-2'>
          <span className='text-gray-400'>Build Bridges Not Walls Backpack</span>
          <b className='text-white font-normal'>$ 50.00 USD</b>
        </div>
      </div>
      <div className='text-left px-6'>
        <div className='py-16'>
          <h1 className='text-4xl'>On the wave of the great fashion</h1>
          <p className='text-lg font-thin text-gray-700 mt-6'>
            Combining classic collections along with limited editions and hand printed signature
            designs. All of our items are super comfy and cool at the same time.
          </p>
        </div>

        <div>
          <div className='bg-zinc-900 p-7'>
            <Image
              className='object-cover'
              src='/assets/elementary-kid.png'
              width={758}
              height={400}
            />
            <h2 className='text-white text-xl mt-5'>Meet the Bay Area</h2>
            <p className='text-gray-400 mt-3'>
              Grab a tee and surf into the sunset our summer collection has never been so full of
              sunshine we love colored design and vibrant prints.{' '}
            </p>
          </div>
          <button className='bg-green-tea text-white flex-x p-7 w-full group hover:bg-green-tea-dense duration-300'>
            <b>DISCOVER PRODUCTS</b> <Icon className='text-2xl group-hover:translate-x-2 duration-300' icon='bi:arrow-right' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
