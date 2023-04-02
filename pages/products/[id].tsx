import { useRouter } from 'next/router';

import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Carousel } from '@/components/Carousel';
import { Container } from '@/components/Container';
import { Rating } from '@/components/Rating';
import { useProduct } from '@/hooks/useProducts';

import s from './ProductDetail.module.css';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useProduct(id as string);

  return (
    <>
      {data && <Breadcrumb product={data} />}
      <Container>
        <div className={s.container}>
          { isLoading && <div>Loading...</div> }
          { error && <div>Error...</div> }
          { data && (
            <div className={s.carouselContainer}>
              <Carousel images={data.images} />
              <div className={s.productDetail}>
                <div className={s.description}>
                  <div>
                    <h3>{data.title}</h3>
                  </div>
                  <div>
                    {`€ ${data.price}`}
                  </div>
                  <div>
                    <h3>Descrizione</h3>
                    <p>{data.description}</p>
                  </div>
                  <div>
                    <h3>Categoria</h3>
                    <p>{data.category}</p>
                  </div>
                  <div>
                    <h3>Recensioni</h3>
                    <Rating rating={data.rating} />
                  </div>
                  <div>
                    <Button label="Aggiungi al carrello" type="normal" highlighted={false} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>

  );
};

export default ProductDetail;
