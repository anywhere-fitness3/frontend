import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Cards from "./Card";

const items = [
  {
    src: "https://source.unsplash.com/user/victorfreitas/1200x400",
    altText: "Slide 1",
    caption: "Any Time",
    header: "Workout Anywhere",
    key: "1"
  },
  {
    src: "https://source.unsplash.com/user/johnfo/1200x400",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src: "https://source.unsplash.com/user/fishmac/1200x400",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  }
];

export default function Home() {
  return (
    <>
      <UncontrolledCarousel items={items} />
      <form className="search-form">
        <input
          className="search-input"
          id="search"
          type="text"
          name="textfield"
          placeholder="Search"
        />
        <button className="search-btn">Search</button>
      </form>
      <div className="card-container">
        <Cards
          title="All Available Classes For Students"
          description="See all of our fitness classes nearest to you!"
          btn="See Classes"
        />
        <Cards
          title="Tips For Getting Started"
          description="View our Tips page for ways to get started, such as enrolling into classes and how to use the dashboard to communicate and much more!"
          btn="View Tips"
          link=""
        />
      </div>
    </>
  );
}
