import Image from 'next/image';

export default function StorySection() {
  return (
    <section>
      <div className='fixed bg-cover bg-center h-screen -z-40 w-screen top-0 right-0 bg-accessories'></div>
      <div className='h-24 bg-white'></div>
      <div className='h-48 md:h-[15rem] lg:h-[18rem]'></div>
      <div className='bg-white lg:relative px-6 pt-24 lg:flex lg:px-[calc(50vw-40rem)]'>
        <div className='lg:absolute lg:p-16 lg:bg-white lg:w-1/2 z-10 lg:right-[calc(50vw-40rem)] lg:-bottom-48'>
          <h2 className='text-3xl lg:text-4xl'>Meet the Bay Area</h2>
          <p className='mt-2 text-lg lg:leading-8 lg:mt-8 text-gray-600 mb-14'>
            Born in the Outer Sunset, San Franpsycho originally began as a surfing film documenting
            the local Ocean Beach surf scene in 2001. After the film, fans identified with the name
            and demanded we make clothing. So we learned the art of screen-printing, creating
            various garments in a dark basement by night, and selling out of of an orange and black
            zebra-striped van named Big Chaos by day.
          </p>
        </div>
        <div className='relative h-[27rem] lg:w-[60%]'>
          <Image
            className='object-cover'
            src='/assets/man-at-bay-area.jpg'
            layout='fill'
          />
        </div>
      </div>
    </section>
  );
}
