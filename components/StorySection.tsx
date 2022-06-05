import Image from "next/image";

export default function StorySection() {
  return (
    <section>
      <div className='fixed bg-cover bg-center h-screen -z-40 w-screen top-0 right-0 bg-accessories'></div>
      <div className='h-24 bg-white'></div>
      <div className='h-40'></div>
      <div className='bg-white px-6 pt-24'>
        <h2 className='text-3xl'>Meet the Bay Area</h2>
        <p className='mt-2 text-lg text-gray-600 mb-14'>
          Born in the Outer Sunset, San Franpsycho originally began as a surfing film documenting
          the local Ocean Beach surf scene in 2001. After the film, fans identified with the name
          and demanded we make clothing. So we learned the art of screen-printing, creating various
          garments in a dark basement by night, and selling out of of an orange and black
          zebra-striped van named Big Chaos by day.
        </p>
        <Image className="object-cover" src='/assets/man-at-bay-area.jpg' width={1333} height={1500} />
      </div>
    </section>
  );
}
