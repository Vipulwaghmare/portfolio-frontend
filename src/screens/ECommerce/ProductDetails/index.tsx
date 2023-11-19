// import { useEffect } from "react"

import { useGetProductByIdQuery } from "../../../redux/apiHooks";

const ProductDetails = () => {
  const { data, error } = useGetProductByIdQuery("test");
  console.log({ data });
  return <>{JSON.stringify(error)}</>;
};

export default ProductDetails;
