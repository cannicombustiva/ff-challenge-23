/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';

import { Product, ProductsResponse } from '../../../interfaces/products';

const fetcher = async (url: string) => fetch(url).then(async res => res.json());

export const useProducts = () => {
  const { data, error, isLoading } = useSWR<ProductsResponse, Error>('https://dummyjson.com/products?limit=20', fetcher);

  return { data, error, isLoading };
};

export const useProduct = (id: number | string) => {
  const { data, error, isLoading } = useSWR<Product, Error>(`https://dummyjson.com/products/${id}`, fetcher);

  return { data, error, isLoading };
};

