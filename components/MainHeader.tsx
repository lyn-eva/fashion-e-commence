import { Icon } from '@iconify/react';

const menu = ['HOME', 'CATEGORY', 'OUR PRODUCTS', 'ABOUT', 'BLOG', 'NEWSLETTER'];

const MainHeader = () => {
  return (
    <header className='shadow-[0_2px_#00000026] sticky top-0 z-10 bg-white w-full'>
      <div className='flex-x px-7 py-5 lg:py-2 relative'>
        <p className='font-bold text-xl'>FLOW</p>
        <div className='flex-x gap-5 lg:flex-row-reverse'>
          <button className='flex-x'>
            <Icon className='text-3xl' icon='material-symbols:shopping-bag-outline-sharp' />
            <span className='h-5'>0</span>
          </button>
          <nav className='group'>
            <button className='block lg:hidden'>
              <Icon className='text-3xl' icon='ci:menu-alt-05' hFlip={true} />
            </button>
            <ul className='absolute lg:static w-full flex lg:py-0 flex-col lg:flex-row left-0 lg:w-auto top-[90%] py-3 bg-white -translate-x-full lg:translate-x-0 group-focus-within:translate-x-0 duration-300 z-10 h-[calc(100vh-60px)] lg:h-auto'>
              {menu?.map((item) => (
                <li className='py-3 px-[5%] lg:px-3 text-xl lg:text-lg lg:tracking-wide after:contents-[""] after:bg-gray-200 relative after:w-full after:h-full after:absolute after:left-0 after:top-0 after:-z-10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:duration-300 cursor-pointer'>
                  {item}
                </li>
              ))}
              <li className='lg:hidden grow grid place-content-center cursor-pointer'>
                <span className='text-5xl -rotate-45 font-bold opacity-30'>Tap to Close</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
