"use client";

import { FC, useState } from "react";
import { Plus, X } from "lucide-react";

import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import Filter from "./Filter";

interface IMobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: FC<IMobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
        <Dialog
          open={isOpen}
          onClose={onClose}
          as="div"
          className="relative z-40 lg:hidden"
        >
          {/* background */}
          <div className="fixed inset-0 bg-black/25" />

          {/* dialog position */}
          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              {/* close button */}

              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={15} onClick={onClose} />} />
              </div>

              {/* render the filters */}

              <div className="p-4">
                <Filter valueKey="sizeId" name="Sizes" data={sizes} />
                <Filter valueKey="colorId" name="Colors" data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Button>
    </>
  );
};

export default MobileFilters;
