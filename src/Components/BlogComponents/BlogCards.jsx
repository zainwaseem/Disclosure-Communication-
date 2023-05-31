import React from "react";

const BlogCards = () => {
  return (
    <>
      <div class="p-20 ">
        <h3 class="text-blue-300 mb-4 text-sm font-bold">INSIGHTS ON</h3>
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">
            Software Engineering
          </h2>
          <p class="text-gray-700">
            By engineers for engineers: get a behind-the-scenes look at what
            some of the world’s best programmers are doing with technology here
            at Crossover, every day.
          </p>
        </div>
      </div>

      <div class="p-20 ">
        {/* <h3 class="text-orange-400 font-bold mb-4">
          3. Horizontal &amp; Responsive Card
        </h3> */}
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
            alt="Laptop on Desk"
            class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-6">
            <h2 class="font-bold text-xl md:text-3xl mb-2 ">
              Cloud Computing 2020: Rising Costs
            </h2>
            <p class="">
              You might remember 2020 for certain other reasons, but it was also
              a landmark year for computing. Barely a decade after the term was
              first used, cloud computing costs rose higher than on-prem
              enterprise data centers. This should have been both old news and
              good news.
            </p>
            <a
              href="#"
              class="text-purple-600  hover:text-purple-500  text-sm"
              alt=""
            >
              Read More 👉
            </a>
          </div>
        </div>
      </div>

      <div class="p-20  w-full md:w-1/2">
        <h3 class=" font-bold mb-4">Cloud Computing 2020: Rising Costs</h3>
        <div class="bg-white rounded-lg shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            alt=""
            class="rounded-t-lg"
          />
          <div class="p-6">
            {/* <h2 class="font-bold mb-2 text-2xl text-purple-800">
              Card with an image
            </h2> */}
            <p class=" mb-2">
              You might remember 2020 for certain other reasons, but it was also
              a landmark year for computing. Barely a decade after the term was
              first used, cloud computing costs rose higher than on-prem
              enterprise data centers. This should have been both old news and
              good news.
            </p>
            <a href="#" class="text-purple-600  hover:text-purple-500  text-sm">
              Read More 👉
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
