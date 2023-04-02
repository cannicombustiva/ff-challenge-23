import { Product } from 'interfaces/products';

import s from './Breadcrumb.module.css';

type IProps = {
  product: Product;
}
export const Breadcrumb = ({ product }: IProps) => (
  <div className={s.container}>
    {`${product.category} › ${product.brand} › ${product.title}`}
  </div>
);
