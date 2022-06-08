export default function NewsletterSection() {
  return (
    <section className='px-6 lg:px-[calc(50vw-40rem)] bg-white py-16'>
      <div className="px-6 py-14 shadow-[0_0_3px_#00000070] bg-white lg:flex-x">
        <h2 className="text-3xl lg:pr-12 lg:w-1/2 leading-10">Stay up to date with our newest collections and special deals!</h2>
        <form className="flex mt-8 lg:mt-0 lg:w-1/2 rounded-sm overflow-hidden">
          <input className="grow px-4 bg-gray-200" type='email' placeholder='Enter your email' />
          <input className="text-white bg-black px-5 py-3 font-semibold tracking-wide text-sm hover:bg-zinc-800 duration-300 cursor-pointer" type='submit' value='SUBCRIBE' />
        </form>
      </div>
    </section>
  );
}
