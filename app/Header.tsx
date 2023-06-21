import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-10 text-xl'>
        {/* <Image src='../Logo-3.svg' width={175} height={175} alt='Logo' /> */}
        <h1>Justin Quinn</h1>
        <div>
          <button
            id='mobile-open-button'
            className='text-3xl focus:outline-none md:hidden'
          >
            &#9776;
          </button>
        </div>
        <ul className='hidden md:flex md:space-x-6 lg:space-x-8'>
          <li>
            <Link href='#about' className='hover:opacity-90'>
              About
            </Link>
          </li>
          <li>
            <Link href='#projects' className='hover:opacity-90'>
              Projects
            </Link>
          </li>
          <li>
            <Link href='#contact' className='hover:opacity-90'>
              Contact
            </Link>
          </li>
          <li>🌙</li>
        </ul>
      </nav>
    </header>
  );
}
