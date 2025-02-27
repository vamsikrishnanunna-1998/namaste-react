import RestrauntCard from "./RestaurantCard";
import restrautList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // state Variable - super powerful variable

  const [listOfRestaurant, setListOfRestaurant] = useState([
    restrautList
  ]);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            // Filter logic here
            const filteredList = restrautList.filter(res => res.data.avgRating > 4);
            console.log(restrautList, "rest list");
            setListOfRestaurant(filteredList);
          }}>Top Rated Customers</button>
        </div>
      <div className="restaurant-list">
        {restrautList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </div>
    );
  };

export default Body;