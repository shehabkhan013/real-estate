import React from "react";

import PropertyCard from "./PropertyCard";

const Properties = () => {
  // Dummy data for property cards
  const propertyData = [
    {
      imageSrc: "./images/real-estate/01.jpg",
      imageAlt: "Modern Design villa",
      title: "Modern Design Villa",
      price: "3000.00",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      imageSrc: "./images/real-estate/02.jpg",
      imageAlt: "Luxury Apartment",
      title: "Luxury Apartment",
      price: "4000.00",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      imageSrc: "./images/real-estate/03.jpg",
      imageAlt: "Oceanfront Condo",
      title: "Oceanfront Condo",
      price: "3500.00",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      imageSrc: "./images/real-estate/04.jpg",
      imageAlt: "Country Home",
      title: "Country Home",
      price: "4500.00",
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      imageSrc: "./images/real-estate/05.jpg",
      imageAlt: "City Apartment",
      title: "City Apartment",
      price: "3200.00",
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      imageSrc: "./images/real-estate/06.jpg",
      imageAlt: "Mountain Retreat",
      title: "Mountain Retreat",
      price: "5000.00",
      bedrooms: 4,
      bathrooms: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {propertyData.map((property, index) => (
        <PropertyCard
          key={index}
          imageSrc={property.imageSrc}
          imageAlt={property.imageAlt}
          title={property.title}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
        />
      ))}
    </div>
  );
};

export default Properties;
