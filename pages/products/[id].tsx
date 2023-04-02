import { useRouter } from 'next/router';

import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { ProductDetail } from '@/components/ProductDetail';
import { useProduct } from '@/hooks/useProducts';

export const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useProduct(id as string);

  return (
    <>
      {data && <Breadcrumb product={data} />}
      <Container>
        <ProductDetail isLoading={isLoading} error={error} data={data} />
      </Container>
    </>

  );
};

export default ProductDetailPage;
