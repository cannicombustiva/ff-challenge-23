import { Container } from '@/components/Container';
import { Loader } from '@/components/Loader';
import ProductList from '@/components/ProductList';
import { useProducts } from '@/hooks/useProducts';

const Home = () => {
  const { data, error, isLoading } = useProducts();

  return (
    <>
      <Container>
        {isLoading && <Loader />}
        {error && <div>Error...</div>}
        <ProductList
          products={data?.products ?? []}
        />
      </Container>
    </>
  );
};

export default Home;
