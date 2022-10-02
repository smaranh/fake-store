import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import { ProductComponent } from "./ProductComponent";

export const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error", err);
        });

      dispatch(setProducts(res.data));
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
