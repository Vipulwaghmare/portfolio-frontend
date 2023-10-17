// import { useEffect } from "react"

import { useGetProductByIdQuery } from "../../../redux/apiHooks";

const ProductDetails: React.FC = () => {
  const { data, error } = useGetProductByIdQuery("test");
  console.log({ data });
  return <>{JSON.stringify(error)}</>;
};

export default ProductDetails;
