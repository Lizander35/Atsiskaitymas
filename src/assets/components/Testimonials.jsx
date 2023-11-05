import React from "react";
import { useApp } from "../context/userContext";
import Hero from "./Hero";

function Testimonials() {
  const { users } = useApp();

  return (
    <>
      <Hero
        title={"Testimonials"}
        subTitle={"Proud to present our client reviews"}
        src={"heroTestimonial"}
      />
      <div className="bg-gray-100 py-10 pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white m-2 p-4 shadow-lg rounded-lg w-full md:w-1/2 lg:w-1/3 mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
                <p className="mt-2">
                  <strong>Testimonial:</strong> {user.company.catchPhrase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
