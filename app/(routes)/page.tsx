import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const billboard = await getBillboard("17124fc6-0521-449b-9f19-bb336a77e1ed");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title={"Featured Products"} items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
