import { useParams } from "react-router-dom";

export const Product = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  return (
    <section>
      <h2>Product {id}</h2>
    </section>
  );
};
