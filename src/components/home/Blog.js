import React, { useState, useEffect } from "react";
import Link from 'next/link';

// Accept locoScroll as a prop from the parent component
const Blog = ({ locoScroll }) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Effect to fetch data when the component mounts.
    // This will only run once.
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Fetch posts from the WordPress API
                const response = await fetch("https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?_embed&per_page=3");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                // Process the data to format it for the component
                const formattedBlogs = data.map(post => {
                    const featuredImage = post._embedded['wp:featuredmedia']?.[0]?.source_url || "/images/blog-placeholder.webp";
                    const title = post.title.rendered.replace(/<[^>]*>?/gm, '');
                    const description = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');

                    return {
                        img: featuredImage,
                        title: title,
                        desc: description,
                        link: post.link
                    };
                });

                setBlogs(formattedBlogs);
                setIsLoading(false);

            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // NEW EFFECT: This is the critical fix.
    // It will trigger only after the `blogs` state has been updated,
    // ensuring the new DOM elements are available for Locomotive Scroll to recognize.
    useEffect(() => {
        // Only call update if the scroll instance is ready and we have blog posts
        if (locoScroll && blogs.length > 0) {
            locoScroll.update();
        }
    }, [locoScroll, blogs]); // Depend on both the scroll instance and the blogs data itself

    return (
        <section className="blogSection">
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className="col-12 col-lg-4 blogLeft">
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogHeadingRow fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="SubHeading">BLOGS</span>
                        </div>
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogTitle fade-in-section"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Explore Expert Insights, Study Tips, & Success Stories
                        </h2>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogSubtitle fade-in-section"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </div>
                        <a href="/blog" className="nodecoration">
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="blogAllBtn buttonBlue fade-in-section"
                                style={{ animationDelay: "0.4s" }}
                            >
                                VIEW ALL BLOGS
                                <img
                                    src="/images/right-arrow-skyblue.webp"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </a>
                    </div>

                    <div className="col-12 col-lg-8 blogRight">
                        {isLoading ? (
                            <p>Loading blogs...</p>
                        ) : (
                            blogs.map((blog, i) => (
                                <div
                                    key={i}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="blogCard fade-in-section"
                                    style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                                >
                                    <a href={`/blog/${blog.link}`} className="nodecoration"><img
                                        src={blog.img}
                                        alt="blog"
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        data-scroll-repeat="true"
                                        data-scroll-offset="-10%"
                                        className="blogImg"
                                    /></a>
                                    <div className="blogCardContent">
                                        <div className="blogCardTitle">{blog.title}</div>
                                        <div className="blogCardDesc">{blog.desc}</div>
                                        <span className="blogCardLine"></span>
                                        <a href={`/blog/${blog.link}`} target="_blank" rel="noopener noreferrer">
                                            <button className="blogReadMoreBtn buttonSkyBlue">
                                                READ MORE
                                                <span className="blogReadMoreArrow">
                                                    <img
                                                        src="/images/right-arrow-blue.webp"
                                                        alt="arrow"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <button
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="blogAllBtnmobile buttonBlue fade-in-section"
                        style={{ animationDelay: "0.4s" }}
                    >
                        VIEW ALL BLOGS
                        <img
                            src="/images/right-arrow-skyblue.webp"
                            alt="arrow"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Blog;
