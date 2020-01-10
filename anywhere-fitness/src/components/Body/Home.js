import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import ClassList from "../ClassList";
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
    caption: "Any Time",
    header: "Workout Anywhere",
    key: "2"
  },
  {
    src: "https://source.unsplash.com/user/fishmac/1200x400",
    altText: "Slide 3",
    caption: "Any Time",
    header: "Workout Anywhere",
    key: "3"
  }
];

export default function Home() {
  return (
    <>
      <UncontrolledCarousel items={items} />

      {/* <ClassList /> */}
      <div className="card-container">
        <Cards
          title="All Available Classes For Students"
          description="See all of our fitness classes nearest to you!"
          btn="See Classes"
          direct="/ClassList"
        />
        <Cards
          title="Tips For Getting Started"
          description="View our Tips page for ways to get started, such as enrolling into classes and how to use the dashboard to communicate and much more!"
          btn="View Tips"
          direct="/Tips"
        />
        {/* This will render for instructors only! */}
        <Cards
          title="Fitness Class Editor Add/Delete/Edit"
          description="Instructor Class editor. Delete any class that you're hosting, add a new class, and edit classes"
          btn="Editor"
          direct="/Editor"
        />
      </div>
    </>
  );
}
