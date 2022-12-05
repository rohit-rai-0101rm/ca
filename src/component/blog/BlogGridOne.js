import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from '../../utils';
import { FaPlay, FaAngleRight, FaAngleLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FsLightbox from 'fslightbox-react';
import Slider from "react-slick";
import ReactPaginate from 'react-paginate';


const allBlogData = BlogData;


const BlogGridOne = () => {

    const [toggler, setToggler] = useState(false);
    
    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleRight /></div>
        );
    }

    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleLeft /></div>
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
       
    }

    const [blogs] = useState(allBlogData);
    const [pageNumber, setPageNumber] = useState(0);

    const blogsPerPage = 4;
    const pageVisited = pageNumber * blogsPerPage;
    
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }


    return (
        <>
            {blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
                <div className="blog-grid" key={data.id}>
                    <h3 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link>
                    </h3>
                    <div className="author">
                    
                        <div className="info">
                            <h6 className="author-name">
                            </h6>
                            
                            <p>
                          A one-stop solution for your custom web application needs - from designing interactive UI/UX, personalization, design, quality checks,<br/> support, and maintenance. We offer custom-built solutions so you stay ahead of the competition, while our customer-centric approach <br/> ensures better conversion rates!
                          </p>
                          <p>
Technologies we use to create Web Applications:
                      </p>
                      
                      <div className="col-md-4 col-sm-6 mb--30">
                                    <ol className="list-style">
                                    <li>Angular Js</li>
                                    <li>React Js</li>
                                    <li>VueJS</li>
                                    <li>PHP</li>
                                    <li>NodeJS</li>
                                    <li>Java</li>

                                    </ol>
                                </div>
                                <p className='mt--80'>Do You Need A Custom Web Application For Business?

</p>
            <button type="submit" className="axil-btn touch " >Get in Touch</button>

                        </div>
                    </div>
                    <div className="post-thumbnail">
                        {
                            Array.isArray(data.large_thumb) ? 
                            <Slider {...slideSettings} className="slick-arrow-nav">
                                {data.large_thumb.map((data, index) => (
                                    <div className="slide-item" key={index}>
                                    </div>
                                ))}
                                
                            </Slider> 
                            : <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                            
                            
                            </Link>
                        }
                        
                    
                    </div>
                </div>
            ))}

         

        </>
    )
}

export default BlogGridOne;