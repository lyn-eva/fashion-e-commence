import { Icon } from '@iconify/react';

type Props = { text: string; bg?: string; color?: string, fontSize?: string };

export default function ExploreBtn({ text, bg, color, fontSize }: Props) {
  return (
    <button
      className={`${bg ? bg : 'bg-transparent'} ${
        color ? color : ''
      } text-white flex-x p-7 w-full group hover:bg-green-tea-dense duration-300`}
    >
      <b>{text}</b>{' '}
      <Icon className='text-2xl group-hover:translate-x-2 duration-300' icon='bi:arrow-right' />
    </button>
  );
}
