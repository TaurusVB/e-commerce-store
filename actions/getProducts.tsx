import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  colorId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
      categoryId: query.categoryId,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
