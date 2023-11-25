"use client";

import { FC, MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import Image from "next/image";

import { Product } from "@/types";

import IconButton from "./IconButton";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePrevievModal";

interface IProductCardProps {
  data: Product;
}

const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 place-y-4"
    >
      {/* Images and actions */}
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          fill
          alt={data?.name}
          src={data?.images?.[0]?.url}
          className=" aspect-square object-cover rounded-md"
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-4">
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className=" text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className=" text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className=" font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* price */}
      <div className=" flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
