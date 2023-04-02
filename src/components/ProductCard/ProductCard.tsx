/* eslint-disable @next/next/no-img-element */
import { Product } from 'interfaces/products';
import Link from 'next/link';

import s from './ProductCard.module.css';

interface IProps {
  product: Product;
}

export const ProductCard = ({
  product,
}: IProps) => (
  <div className={s.productCard}>
    <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
      <div className={s.productImage}>
        <img src={product.images[0]} alt={product.title} height={294} width={294} className={s.image} />
      </div>
      <div className={s.productFooter}>
        <div><span>{product.title}</span></div>
        <div>{product.category}</div>
      </div>
    </Link>
  </div>
);

