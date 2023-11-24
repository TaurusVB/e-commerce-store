import getBillboard from "@/actions/getBillboard";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const billboard = await getBillboard("17124fc6-0521-449b-9f19-bb336a77e1ed");

  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
