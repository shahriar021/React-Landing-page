import React from "react";
import "../styles/Blogs.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import blogPhoto from "../images/blogPhoto1.jpg";

import Slide from "react-reveal/Slide";

export default function Blog() {
  const handleBlogComment = () => {
    toast("successfully submitted!  ");
  };

  return (
    <div className="main-blog">
      <div className="blogs">
        <div className="blog-scope">
          <div>
            <Slide left>
              <h1>front-end development</h1>
              <img src={blogPhoto} alt="" />
              <span style={{ float: "right" }}>
                Shane alice <br /> <p>last modified:31 october 2023</p>
              </span>
              <p>
                Front-end development for a blog is a crucial aspect of creating
                a visually appealing and user-friendly website. The front-end,
                also known as the client-side, is what users see and interact
                with directly. Here are some key considerations when it comes to
                front-end development for a blog: Responsive Design: Ensure that
                your blog is responsive, meaning it adapts to various screen
                sizes and devices. This is essential for providing a seamless
                user experience on desktops, tablets, and smartphones.
                User-Friendly Navigation: Design an intuitive navigation
                structure with a clear menu, categories, and tags. Users should
                be able to find and access content easily. Readability: Pay
                attention to typography, font size, and line spacing to ensure
                that your content is easy to read. Use web-safe and visually
                pleasing fonts. Visual Appeal: Incorporate a visually appealing
                design with consistent branding elements, such as logos and
                color schemes. High-quality images and multimedia elements can
                enhance the overall look of your blog. Page Speed: Optimize your
                front-end code and media to ensure fast lo themes that can
                simplify front-end development. Social Sharing: Make it easy for
                readers to share your blog posts on social media platforms.
                Incorporate social sharing buttons to increase the visibility of
                your content. Comment System: Implement a user-friendly comment
                system, which encourages user engagement and feedback. Popular
                systems include Disqus and native WordPress comments. Analytics:
                Integrate web analytics tools like Google Analytics to track
                user behavior and gather data on your blog's pe other usability
                problems. User testing and feedback can help you make continuous
                improvements. Front-end development for a blog is an ongoing
                process. It's important to stay updated with the latest design
                trends and technologies to keep your blog fresh, engaging, and
                user-friendly. A well-designed front-end can significantly
                enhance the user experience and help your blog stand out in a
                crowded online landscape.
              </p>
            </Slide>
          </div>

          <div>
            <Slide right>
              <h1 style={{ float: "right" }}>javascript</h1>
              <p>
                JavaScript continues to be a cornerstone of web development,
                with its versatility and cross-browser compatibility making it
                an essential tool for creating interactive and dynamic web
                applications. As technology advances, JavaScript frameworks and
                libraries, such as React and Vue.js, are empowering developers
                to build even more sophisticated and responsive user interfaces
                for modern websites and web applications.
              </p>
            </Slide>
          </div>

          <div>
            <Slide left>
              <h1>Social Media</h1>
              <div
                className="socialMediaIcon"
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "space-around",
                  border: "2px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <i className="fa fa-facebook fa-3x"></i>
                <i className="fa fa-twitter fa-3x"></i>
                <i className="fa fa-instagram fa-3x"></i>
                <i className="fa fa-youtube fa-3x"></i>
              </div>
              <p>
                In today's digital landscape, the marriage of social media and
                IT blogs is more important than ever. Social media platforms
                serve as powerful amplifiers for IT blog content, allowing you
                to reach a broader audience, engage with readers, and promote
                your IT expertise. By strategically sharing your blog posts on
                platforms like Twitter, LinkedIn, and Facebook, you can foster a
                vibrant online community, spark discussions, and keep your
                audience informed about the latest trends, technologies, and
                best practices in the ever-evolving world of information
                technology. Leveraging the synergy between social media and IT
                blogs not only enhances your online presence but also
                establishes your authority in the IT industry.
              </p>
            </Slide>
          </div>

          <div>
            <Slide left>
              <h1 style={{ float: "right" }}>React </h1>
              <p>
                React is a widely used open-source JavaScript library for
                building user interfaces. It's known for its component-based
                architecture, virtual DOM, and efficiency in creating
                interactive web and mobile applications. React's component
                reusability, along with a strong developer community and
                ecosystem, has solidified its place as a leading choice for
                front-end development, enabling the creation of dynamic and
                high-performance user interfaces.
              </p>
            </Slide>
          </div>

          <div>
            <Slide left>
              <h1>Leave your comment</h1>
              <input type="text" placeholder="write here......." />
              <button onClick={handleBlogComment}>comment</button>
              <ToastContainer />
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
