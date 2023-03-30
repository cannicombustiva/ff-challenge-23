/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';

import { Product, ProductsResponse } from '../interfaces/products';

const fetcher = async (url: string) => fetch(url).then(async res => res.json());

export default () => {
  const getProducts = (): { data: ProductsResponse | undefined; error: Error | undefined; isLoading: boolean } => {
    const { data, error, isLoading } = useSWR<ProductsResponse, Error>('https://dummyjson.com/products?limit=20', fetcher);

    return { data, error, isLoading };
  };

  const getProduct = (id: number | string):
  { data: Product | undefined; error: Error | undefined; isLoading: boolean } => {
    const { data, error, isLoading } = useSWR<Product, Error>(`https://dummyjson.com/products/${id}`, fetcher);

    return { data, error, isLoading };
  };

  return { getProducts, getProduct };
};
