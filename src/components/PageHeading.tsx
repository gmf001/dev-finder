import Link from 'next/link';

function PageHeading() {
  return (
    <Link href={'/'} className='text-xl font-extrabold'>
      DevFinder
    </Link>
  );
}

export default PageHeading;
