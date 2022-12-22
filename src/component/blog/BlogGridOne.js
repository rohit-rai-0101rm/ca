import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from "../../utils";
import {
  FaPlay,
  FaAngleRight,
  FaAngleLeft,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import ResultDriven2 from "../Resultdriven2/ResultDriven2";
import TeamOne from "../team/TeamOne";
import TopSkills from "../TopSkills/TopSkills";
import TopSkills2 from "../TopSkills/TopSkills2";

const allBlogData = BlogData;

const BlogGridOne = () => {
  const [toggler, setToggler] = useState(false);

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  }

  var slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };

  const [blogs] = useState(allBlogData);
  const [pageNumber, setPageNumber] = useState(0);

  const blogsPerPage = 4;
  const pageVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
        <div className="" key={data.id}>
          <h4 className="title">
            <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
              {data.title}
            </Link>
          </h4>
          <div className="author">
            <div className="info">
              <h6 className="author-name"></h6>

              <p className="innovate-list-para">
                A one-stop solution for your custom web application needs - from
                designing interactive <br /> UI/UX, personalization, design,
                quality checks,support, and maintenance. We offer <br />{" "}
                custom-built solutions so you stay ahead of the competition,
                while our customer-centric <br /> approach ensures better
                conversion rates!
              </p>

              <div className="col-md-12 col-sm-6">
              <TopSkills2/>
              </div>

              <p className="innovate-list-para ">
                Do You Need A Custom Web Application For Business?
              </p>
              <Link to="/contact">
              <button type="submit" className="axil-btn touch ">
                Get in Touch
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogGridOne;
