import { Icon } from '@iconify/react';

const menu = ['home', 'category', 'our products', 'about', 'blog', 'newsletter'];
const social = ['akar-icons:linkedin-box-fill', 'akar-icons:twitter-fill', 'akar-icons:instagram-fill'];

export default function MainFooter() {
  return (
    <footer className='bg-gray-300 px-6 py-12 lg:px-[calc(50vw-40rem)] lg:grid lg:grid-cols-3 items-center'>
      <div>
        <p className='font-bold text-2xl'>FLOW</p>
      </div>
      <ul className='py-6 lg:grid lg:grid-cols-2 lg:gap-3 lg:py-0'>
        {menu.map((item) => (
          <li className='text-lg hover:underline cursor-pointer'>{item}</li>
        ))}
      </ul>
      <ul className='flex gap-5 justify-center text-3xl mt-4'>
        {social.map(icon => <li className='hover:text-white duration-300 cursor-pointer'>
          <Icon icon={icon} />
        </li>)}
      </ul>
    </footer>
  );
}
