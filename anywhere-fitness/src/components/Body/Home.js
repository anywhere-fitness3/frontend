import React from "react";
import { UncontrolledCarousel } from "reactstrap";

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
  return <UncontrolledCarousel items={items} />;
}
