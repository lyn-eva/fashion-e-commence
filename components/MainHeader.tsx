import { Icon } from '@iconify/react';

const menu = ['HOME', 'OUR PRODUCTS', 'ABOUT', 'CONTACT', 'BLOG', 'STYLEGUIDE', 'LICENSE'];

const MainHeader = () => {
  return (
    <header className='shadow-[0_2px_#00000026] relative'>
      <div className='flex-x ctr-x py-5'>
        <p className='font-bold text-xl'>FLOW</p>
        <div className='flex-x gap-5'>
          <button className='flex-x'>
            <Icon className='text-3xl' icon='material-symbols:shopping-bag-outline-sharp' />
            <span className='h-5'>0</span>
          </button>
          <nav className='group'>
            <button className='block'>
              <Icon className='text-3xl' icon='ci:menu-alt-05' hFlip={true} />
            </button>
            <ul className='absolute left-0 w-full top-[90%] py-3 bg-white -translate-x-full group-focus-within:translate-x-0 duration-300 z-10 h-[calc(100vh-60px)]'>
              {menu?.map((item) => (
                <li className='py-3 px-[5%]3 px-[5%]3 px-[5%] text-xl after:contents-[""] after:bg-gray-200 relative after:w-full after:h-full after:absolute after:left-0 after:top-0 after:-z-10 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:duration-300 cursor-pointer'>
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
