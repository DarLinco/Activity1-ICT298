import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs } from "react-bootstrap";
import DoList from "../NavBarComponents/DoList";
import ColorChanging from "../NavBarComponents/ColorChanging";
import ImageSlider from "../NavBarComponents/ImageSlider";

const NavBar = () => {
  return (
    <Tabs fill className="mb-3">
      <Tab eventKey="TodoList" title="To Do List">
        <DoList />
      </Tab>
      <Tab eventKey="ColorChanging" title="Color Changing">
        <ColorChanging />
      </Tab>
      <Tab eventKey="ImageSlider" title="Image Slider">
        <ImageSlider />
      </Tab>
    </Tabs>
  );
};

export default NavBar;
