import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='max-w-7xl text-center'>
      <span className=''>
        <small>&copy; 2023 Justin Quinn. All rights reserved.</small>
      </span>
      <ul className='flex items-center justify-center space-x-4'>
        <li>
          <Link
            href='https://www.linkedin.com/in/justin-quinn-/'
            target='_blank'
          >
            <FaLinkedinIn />
          </Link>
        </li>
        <li>
          <Link href='https://github.com/Justin-Quinn51' target='_blank'>
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link href='https://twitter.com/JustinQuinn_' target='_blank'>
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href='mailto:jpq3366@gmail.com' target='_blank'>
            <FaEnvelope />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
