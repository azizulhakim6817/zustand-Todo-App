import React, { useEffect } from "react";
import apiCalling from "../store/ListStore.js";
import StarRatings from "react-star-ratings/build/star-ratings.js";

const List = () => {
  const { productList, productListRequest } = apiCalling();

  useEffect(() => {
    (async () => {
      await productListRequest();
    })();
  }, []);

  return (
    <div>
      <div className=" row mt-4 ">
        {productList !== null &&
          productList
            .map((item, index) => {
              let { title, description, price, images } = item;
              return (
                <div className=" col-3 p-3 mt-5" key={index}>
                  <div className="bg-light shadow rounded ">
                    <div>
                      <img className=" w-100" src={images} alt="" />
                    </div>
                    <div className=" px-2 pb-3">
                      <p>{title}</p>
                      <p>${price}</p>
                      <StarRatings
                        rating={parseFloat(item["rating"])}
                        starRatedColor="red"
                        starDimension="15px"
                        starSpacing="2px"
                      />
                      <p>{description.slice(0, 100)}...</p>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 8)}
      </div>
    </div>
  );
};

export default List;
