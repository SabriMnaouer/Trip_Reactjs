import React from "react";
import "./Services.css";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <i className="fas fa-route"></i>,
      title: "Customized Itineraries",
      description: "Tailored travel plans to suit your preferences.",
    },
    {
      icon: <i className="fas fa-user-tie"></i>,
      title: "Expert Guides",
      description: "Experienced guides to enhance your travel experience.",
    },
    {
      icon: <i className="fas fa-shield"></i>,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage for peace of mind.",
    },
    {
      icon: <i className="fas fa-utensils"></i>,
      title: "Local Culinary Experiences",
      description: "Explore local cuisines and culinary traditions.",
    },
    {
      icon: <i className="fas fa-utensils"></i>,
      title: "Local Culinary Experiences",
      description: "Explore local cuisines and culinary traditions.",
    },
    {
      icon: <i className="fas fa-car"></i>,
      title: "Airport Transfers",
      description: "Convenient transportation to and from airports.",
    },
    {
      icon: <i className="fas fa-utensils"></i>,
      title: "Language Assistance",
      description: " Language interpreters and guides for non-native speakers.",
    },
    {
      icon: <i className="fas fa-gem"></i>,
      title: "Exclusive VIP Access",
      description:
        " Gain access to exclusive events, attractions, and experiences.",
    },
    {
      icon: <i className="fas fa-users"></i>,
      title: "Group Discounts",
      description: "Special discounts for group bookings.",
    },
    {
      icon: <i className="fas fa-laptop"></i>,
      title: "Online Booking:",
      description: "Easy and secure online booking and reservation system.",
    },
    {
      icon: <i className="fas fa-gift"></i>,
      title: "Travel Packages",
      description:
        "All-inclusive travel packages with accommodation and activities.",
    },
    {
        icon: <i className="fas fa-bus"></i>,
        title: "    Transportation Options",
        description:
          "A variety of transportation choices, including buses, trains, and more.",
      },
  ];


  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
