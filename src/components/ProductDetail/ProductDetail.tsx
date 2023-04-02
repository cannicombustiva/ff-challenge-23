import { Product } from 'interfaces/products';

import { Button } from '../Button';
import { Carousel } from '../Carousel';
import { Loader } from '../Loader';
import { Rating } from '../Rating';
import s from './ProductDetail.module.css';

type IProps = {
  isLoading: boolean;
  error?: Error;
  data?: Product;
}
export const ProductDetail = ({
  isLoading,
  error,
  data,
}: IProps) => (
  <div className={s.container}>
    { isLoading && <Loader /> }
    { error && <div>Error...</div> }
    { data && (
      <div className={s.carouselContainer}>
        <Carousel images={data.images} />
        <div className={s.productDetail}>
          <div className={s.description}>
            <div className={s.wrapperInnerDescription}>
              <div>
                <h3>{data.title}</h3>
              </div>
              <div>
                {`€ ${data.price}`}
              </div>
            </div>
            <div className={s.wrapperInnerDescription}>
              <div>
                <h3>Descrizione</h3>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </div>
            <div className={s.wrapperInnerDescription}>
              <div>
                <h3>Marca</h3>
              </div>
              <div>
                <p>{data.brand}</p>
              </div>
            </div>
            <div className={s.wrapperInnerDescription}>
              <div>
                <h3>Categoria</h3>
              </div>
              <div>
                <p>{data.category}</p>
              </div>
            </div>
            <div className={s.wrapperInnerDescription}>
              <div><h3>Recensioni</h3></div>
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
);
