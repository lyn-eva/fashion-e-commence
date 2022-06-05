export default function NewsletterSection() {
  return (
    <section className='px-6 bg-white py-16'>
      <div className="px-6 py-14 shadow-[0_0_3px_#00000070] bg-white">
        <h2 className="text-3xl pr-12 leading-10">Stay up to date with our newest collections and special deals!</h2>
        <form className="flex mt-8 rounded-sm overflow-hidden">
          <input className="grow px-4 bg-gray-200" type='email' placeholder='Enter your email' />
          <input className="text-white bg-black px-5 py-3 font-semibold tracking-wide text-sm hover:bg-zinc-800 duration-300 cursor-pointer" type='submit' value='SUBCRIBE' />
        </form>
      </div>
    </section>
  );
}
