import Link from 'next/link';

const index = () => (
  <section>
    <h1 className='hello'>Hello everybody from next.js</h1>
    <Link href='/about'>
      <a title='About Next'>About this project</a>
    </Link>
  </section>
);
export default index;
