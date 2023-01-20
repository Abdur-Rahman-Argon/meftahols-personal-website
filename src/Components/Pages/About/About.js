import React from "react";

const About = () => {
  return (
    <div>
      <section class="container my-5">
        <div class="row">
          <div class="col-lg-8 order-lg-0">
            <h1 class="border-bottom w-25">About Us</h1>
            <div class="px-3 my-2">
              <div class="float-end">
                <img
                  src="https://affectionate-noyce-4b9791.netlify.app/images/mftahol-3.jpg"
                  alt=""
                  width="200px"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ea! Placeat suscipit ea obcaecati, cum quasi
                reiciendis! Consequuntur optio mollitia aperiam ad provident
                exercitationem, iusto, aliquam vero earum repudiandae tenetur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ea! Placeat suscipit ea obcaecati, cum quasi
                reiciendis! Consequuntur optio mollitia aperiam ad provident
                exercitationem, iusto, aliquam vero earum repudiandae tenetur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, ea! Placeat suscipit ea obcaecati, cum quasi
                reiciendis! Consequuntur optio mollitia aperiam ad provident
                exercitationem, iusto, aliquam vero earum repudiandae tenetur!
              </p>
            </div>
            <h5 class="">Share this page</h5>
            <ul class="d-flex list-unstyled text-dark">
              <li class="mx-1 text-center">
                <a class="text-dark" href="/">
                  <i class="fa-brands fa-facebook mx-1"></i>
                </a>
              </li>
              <li class="mx-1 text-center">
                <a class="text-dark" href="/">
                  <i class="fa-brands fa-twitter mx-1"></i>
                </a>
              </li>
              <li class="mx-1 text-center">
                <a class="text-dark" href="/">
                  <i class="fa-brands fa-instagram-square mx-1"></i>
                </a>
              </li>
            </ul>

            <div class="mt-5">
              <h2 class="border-bottom w-50">Contact Information :</h2>

              <ul class="list-unstyled ">
                <li class="mx-2 ">
                  <a class="text-dark" href="/">
                    <i class="fa-brands fa-facebook mx-1"></i>fcbook
                  </a>
                </li>
                <li class="mx-2">
                  <a class="text-dark" href="/">
                    <i class="fa-brands fa-twitter mx-1"></i>twitter
                  </a>
                </li>
                <li class="mx-2">
                  <a class="text-dark" href="/">
                    <i class="fa-brands fa-youtube mx-1"></i>YouTube
                  </a>
                </li>
                <li class="mx-2">
                  <a class="text-dark" href="/">
                    <i class="fa-brands fa-instagram-square mx-1"></i>Instagram
                  </a>
                </li>
                <li class="mx-2">
                  <a class="text-dark" href="/">
                    <i class="fa-solid fa-envelope mx-1"></i>Email
                  </a>
                </li>
                <li class="mx-2">
                  <a class="text-dark" href="/">
                    <i class="fa-solid fa-earth-americas mx-1"></i>WebSite
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 order-lg-0">
            <div class="border p-4">
              <div>
                <label for="Name">Name:</label>
                <br />
                <input
                  type="text"
                  name=""
                  id="Name"
                  placeholder="Inter your Name"
                />
              </div>
              <div>
                <label for="email">Email:</label>
                <br />
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Inter your Email"
                />
              </div>
              <button class="btn btn-secondary my-2" type="submit">
                Subscribe
              </button>
              <hr />
              <h5>RCENT COMMENT</h5>
              <hr />
              <h5>ACHIVE</h5>
              <hr />
              <h5>CATAGORIES</h5>
              <ul>
                <li>No Catagories</li>
              </ul>
              <hr />
              <h5>RECENT POST</h5>
              <ul>
                <li>post-1</li>
                <li>post-1</li>
                <li>post-1</li>
                <li>post-1</li>
                <li>post-1</li>
                <li>post-1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
