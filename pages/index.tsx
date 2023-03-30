import Link from 'next/link';

import { Meta } from '@/components/Meta';

import useProducts from '../hooks';

const Home = () => {
  const { getProducts } = useProducts();
  const { data, error, isLoading } = getProducts();

  return (
    <>
      <Meta title="Some awesome title" />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {
        data?.products.map(product => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </Link>
          </div>
        ))
      }
    </>
  );
};

export default Home;
