import React from "react";

const BlogCards = () => {
  return (
    <>
      <div class="p-10">
        {/* <h3 class="text-blue-300 mb-4 text-sm font-bold">INSIGHTS ON</h3> */}
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">Lorem, ipsum.</h2>
          <p class="text-[#1A3551]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            aliquid laborum. Distinctio maxime a modi sapiente veritatis commodi
            ratione. Rerum vitae nisi ratione voluptas.
          </p>
        </div>
      </div>

      <div class="p-6 lg:p-20">
        {/* <h3 class="text-orange-400 font-bold mb-4">
          3. Horizontal &amp; Responsive Card
        </h3> */}
        <div class="bg-white rounded-lg shadow-2xl md:flex">
          <img
            src="https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt="Laptop on Desk"
            class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          <div class="p-6">
            <h2 class="font-bold text-xl md:text-3xl mb-2 text-[#1A3551] ">
              Lorem ipsum dolor sit amet.
            </h2>
            <p class="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quibusdam ad eligendi unde voluptatibus officia laudantium soluta
              ipsam tempore harum maiores corrupti sed quos natus officiis, odio
              vel hic ut esse exercitationem? Incidunt, pariatur hic ex odio
              praesentium harum saepe debitis recusandae corrupti perspiciatis
              velit quibusdam doloribus itaque, repudiandae perferendis
              consequuntur quis nesciunt. Deserunt impedit cupiditate fugit,
              dignissimos architecto officia quos, magnam aperiam maiores ad aut
              ab accusantium inventore tenetur veniam nisi quisquam repudiandae
              ipsam molestiae molestias nostrum temporibus? Beatae deserunt
              aperiam illum similique qui inventore corrupti magni, quo deleniti
              necessitatibus? Commodi est, amet nostrum eum libero voluptatum
              laborum excepturi exercitationem voluptatibus magni quidem odio
              incidunt eaque molestiae molestias consequatur? Laudantium
              perspiciatis ipsam doloremque ea quas error possimus debitis?
              Deleniti corporis alias iste, voluptatibus vel sed explicabo nihil
              eius quisquam nostrum eligendi aut quos dolorem ex, modi fugit
              cumque incidunt fugiat amet! Consequatur provident modi
              praesentium, nobis excepturi vitae tempora.
            </p>
            <a
              href="#"
              class="text-[#1A3551]  hover:text-purple-500  text-sm"
              alt=""
            >
              Read More 👉
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div class="p-20 p-6 lg:p-20  w-full md:w-1/2">
          <h3 class=" font-bold  text-[#1A3551] text-2xl mb-4">
            Lorem ipsum dolor sit amet.
          </h3>
          <div class="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9zdHMlMjB3b3JrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt=""
              class="rounded-t-lg"
            />
            <div class="p-6">
              {/* <h2 class="font-bold mb-2 text-2xl text-purple-800">
              Card with an image
            </h2> */}
              <p class=" mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sit facere rerum voluptatem alias eligendi repudiandae suscipit
                amet consequatur qui. Iure ducimus qui soluta libero architecto
                deserunt molestias ea voluptatibus atque eaque vero aliquid vel,
                quasi pariatur reiciendis perferendis quae rerum nobis assumenda
                error unde provident dolorem. Suscipit, accusamus architecto.
              </p>
              <a
                href="#"
                class="text-purple-600  hover:text-purple-500  text-sm"
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
        <div class=" p-6 lg:p-20  w-full md:w-1/2">
          <h3 class=" font-bold  text-[#1A3551] text-2xl mb-4">
            Lorem ipsum dolor sit amet.
          </h3>
          <div class="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              class="rounded-t-lg"
            />
            <div class="p-6">
              {/* <h2 class="font-bold mb-2 text-2xl text-purple-800">
              Card with an image
            </h2> */}
              <p class=" mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sit facere rerum voluptatem alias eligendi repudiandae suscipit
                amet consequatur qui. Iure ducimus qui soluta libero architecto
                deserunt molestias ea voluptatibus atque eaque vero aliquid vel,
                quasi pariatur reiciendis perferendis quae rerum nobis assumenda
                error unde provident dolorem. Suscipit, accusamus architecto.
              </p>
              <a
                href="#"
                class="text-purple-600  hover:text-purple-500  text-sm"
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div class=" p-6 lg:p-20 w-full md:w-1/2">
          <h3 class="font-bold  text-[#1A3551] text-2xl mb-4">
            Lorem ipsum dolor sit amet.
          </h3>
          <div class="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1585692614056-d0bbd2d5069b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              class="rounded-t-lg"
            />
            <div class="p-6">
              {/* <h2 class="font-bold mb-2 text-2xl text-purple-800">
              Card with an image
            </h2> */}
              <p class=" mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sit facere rerum voluptatem alias eligendi repudiandae suscipit
                amet consequatur qui. Iure ducimus qui soluta libero architecto
                deserunt molestias ea voluptatibus atque eaque vero aliquid vel,
                quasi pariatur reiciendis perferendis quae rerum nobis assumenda
                error unde provident dolorem. Suscipit, accusamus architecto.
              </p>
              <a
                href="#"
                class="text-purple-600  hover:text-purple-500  text-sm"
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
        <div class=" p-6 lg:p-20 w-full md:w-1/2">
          <h3 class=" font-bold  text-[#1A3551] text-2xl mb-4">
            Lorem ipsum dolor sit amet.
          </h3>
          <div class="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=476&q=80"
              alt=""
              class="rounded-t-lg"
            />
            <div class="p-6">
              {/* <h2 class="font-bold mb-2 text-2xl text-purple-800">
              Card with an image
            </h2> */}
              <p class=" mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                sit facere rerum voluptatem alias eligendi repudiandae suscipit
                amet consequatur qui. Iure ducimus qui soluta libero architecto
                deserunt molestias ea voluptatibus atque eaque vero aliquid vel,
                quasi pariatur reiciendis perferendis quae rerum nobis assumenda
                error unde provident dolorem. Suscipit, accusamus architecto.
              </p>
              <a
                href="#"
                class="text-purple-600  hover:text-purple-500  text-sm"
              >
                Read More 👉
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
