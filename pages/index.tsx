import { Container } from '@/components/Container';
import ProductList from '@/components/ProductList';
import { useProducts } from '@/hooks/useProducts';

const Home = () => {
  const { data, error, isLoading } = useProducts();

  return (
    <>
      <Container>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        <ProductList
          products={data?.products ?? []}
        />
      </Container>
    </>
  );
};

export default Home;
