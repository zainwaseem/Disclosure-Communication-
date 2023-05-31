import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div class="main-title mb-8">
        <h1 class="font-bold text-2xl text-center">How can we help you?</h1>
      </div>

      <div class="main-search mb-8 rounded-lg shadow-lg px-6 py-3 w-full flex items-center space-x-6 border border-gray-200 border-opacity-75">
        <button class=" focus:outline-none"></button>
        <input
          x-ref="search"
          type="text"
          placeholder="Describe your issue"
          class="text-base w-full bg-transparent focus:outline-none"
        />
      </div>

      <div class="main-question mb-8 flex flex-col divide-y text-gray-800 text-base">
        <div class="item px-6 py-6" x-data="{isOpen : false}">
          <a href="#" class="flex items-center justify-between">
            <h4>Popular articles</h4>
          </a>
          <div class="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            ex. Expedita sunt enim, vel amet cumque nulla illum harum.
            Similique!
          </div>
        </div>

        <div class="item px-6 py-6">
          <a href="#" class="flex items-center justify-between">
            <h4>Fix problems & request removals</h4>
          </a>
          <div x-show="isOpen" class="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            ex. Expedita sunt enim, vel amet cumque nulla illum harum.
            Similique!
          </div>
        </div>

        <div class="item px-6 py-6">
          <a href="#" class="flex items-center justify-between">
            <h4>Browse the web</h4>
          </a>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            ex. Expedita sunt enim, vel amet cumque nulla illum harum.
            Similique!
          </div>
        </div>

        <div class="item px-6 py-6">
          <a href="#" class="flex items-center justify-between"></a>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
            ex. Expedita sunt enim, vel amet cumque nulla illum harum.
            Similique!
          </div>
        </div>
      </div>

      <div class="main-images mb-8 ">
        <div class="images grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to="#">
              <img
                src="https://images.unsplash.com/45/QDSMoAMTYaZoXpcwBjsL__DSC0104-1.jpg"
                alt="Contact with Customer support"
                title="Contact with Customer support"
              />
              <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">
                Customer support
              </span>
            </Link>
          </div>

          <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to="#">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a"
                alt="Send massage to support disk"
                title="Send massage to support disk"
              />
            </Link>
            <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">
              Send massage
            </span>
          </div>

          <div class="image bg-white rounded-lg shadow-lg overflow-hidden">
            <Link to="#">
              <img
                src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3"
                alt="Write your feedback"
                title="Write your feedback"
              />
              <span class="text-center p-2 text-gray-700 text-sm inline-block w-full">
                Write feedback
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
