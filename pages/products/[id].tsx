import { useRouter } from 'next/router';

import useProducts from '../../hooks';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getProduct } = useProducts();
  const { data, error, isLoading } = getProduct(id as string);

  return (
    <div>
      { isLoading && <div>Loading...</div> }
      { error && <div>Error...</div> }
      { isLoading && <div>Loading...</div> }
      { data && (
        <>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
