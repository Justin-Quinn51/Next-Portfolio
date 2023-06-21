import Image from 'next/image';

export default function Hero() {
  return (
    <section className='px-8 md:grid md:grid-cols-2'>
      <div className='mx-auto'>
        <h2 className='text-5xl'>
          {"Hi, I'm"}{' '}
          <span className='bg-gradient-to-r from-cyan-400 via-pink-600 to-blue-600 bg-clip-text'>
            Justin
          </span>
        </h2>
        <p className='mt-4 text-2xl'>
          {
            "Instead of yelling at little white balls which refuse to 'get in the hole,' I yell at divs, which refuse to get centered."
          }
        </p>
      </div>
      <div className='flex justify-center'>
        <Image
          src='/Portrait1.png'
          height={250}
          width={250}
          alt='portrait of Justin Quinn'
          className='mt-4 rounded-3xl'
        />
      </div>
    </section>
  );
}
