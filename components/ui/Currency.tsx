"use client";

import { FC, useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("en-Us", {
  style: "currency",
  currency: "USD",
});

interface ICurrencyProps {
  value?: string | number;
}

const Currency: FC<ICurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
