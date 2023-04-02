import { Product } from 'interfaces/products';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';

import { useResponsiveContext } from '@/hooks/useResponsiveContext';

import ProductCard from '../ProductCard';
import s from './ProductList.module.css';

const FilterDesktop = dynamic(
  async () => import('../Filter').then(mod => mod.FilterDesktop),
);
const FilterMobile = dynamic(
  async () => import('../Filter').then(mod => mod.FilterMobile),
);
// const AutomationTableMobile = dynamic(
//   async () => import('@/components/automations/mobile/automations-table').then(mod => mod.AutomationTable),
// );

type Props = {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  const { matches } = useResponsiveContext();
  const [filter, setFilter] = useState({
    brand: '',
    category: '',
  });

  const filteredProducts = useMemo(() => {
    const { brand, category } = filter;
    return products.filter((product) => {
      if (brand && category) {
        return product.brand === brand && product.category === category;
      }

      if (brand) {
        return product.brand === brand;
      }

      if (category) {
        return product.category === category;
      }

      return true;
    });
  }, [filter, products]);

  // const brandsList = useMemo(() => products.reduce<string[]>((acc, product) => {
  //   if (!acc.includes(product.brand)) {
  //     acc.push(product.brand);
  //   }

  //   return acc;
  // }, []), [products]);

  // const categoriesList = useMemo(() => products.reduce<string[]>((acc, product) => {
  //   if (!acc.includes(product.category)) {
  //     acc.push(product.category);
  //   }

  //   return acc;
  // }, []), [products]);

  return (
    <section>
      {matches.big ? (
        <FilterDesktop
        // brands={brandsList}
        // categories={categoriesList}
          onChange={
        filter => setFilter(filter)
      }
        />
      ) : (
        <FilterMobile
          onChange={
        filter => setFilter(filter)
          }
        />
      )}

      <div className={s.list}>
        {filteredProducts.map(product => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
