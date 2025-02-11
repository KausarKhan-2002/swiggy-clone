const FilterButtons = () => {
  return (
    <div>
      <section id="direct_filter" className="flex flex-wrap gap-3">
        <button className="filterButton">Filter</button>
        <button className="filterButton">Delivery Time</button>
        <button className="filterButton">Fast Delivery</button>
        <button className="filterButton">New on Swiggy</button>
        <button className="filterButton">Ratings 4.0+</button>
        <button className="filterButton">Pure Veg</button>
        <button className="filterButton">Offers</button>
        <button className="filterButton">Rs.300-Rs.600</button>
        <button className="filterButton">Less than Rs.300</button>
      </section>
    </div>
  );
};

export default FilterButtons;
