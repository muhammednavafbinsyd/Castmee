import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Blog() {
    const ServerURL = process.env.REACT_APP_CASTMEE_URL;
    const [bloglist, setBlogList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogList = async () => {
            try {
                const response = await axios.get(`${ServerURL}/users/blog_read_front`);
                setBlogList(response.data);
            } catch (error) {
                console.error('Error fetching blog list:', error);
            }
        };
        fetchBlogList();
    }, [ServerURL]);

    const handleBlogClick = (title) => {
        const formattedTitle = encodeURIComponent(title.replace(/ /g,"-"));
        navigate(`/blogs/${formattedTitle}`);
    };

    return (
        <div name='blog'>
            <div className="container-fluid blogcontainer bg-dark">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 id="tags2" className="poppins-regular hw-wrkhead text-white">
                                <span className="poppins-light " style={{ color: "#FEC400" }}>
                                    <span style={{ color: 'white' }}>Cast</span>mee
                                </span>{" "}
                                Blog
                            </h1>
                        </div>
                        {bloglist.map((item, index) => (
                            <div className='col-12 col-sm-6 col-md-3 my-3' key={index}>
                                <img
                                    style={{ width: '100%', cursor: 'pointer' }}
                                    src={`${ServerURL}/uploads/${item.Image}`}
                                    alt=""
                                    onClick={() => handleBlogClick(item.Title)}
                                />
                                <h4>{item.Title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: item.Description.substring(0, 200) + '...' }} />
                                <div style={{ width: '100%' }}>
                                    <Link to={`/blogs/${encodeURIComponent(item.Title.replace(/ /g, "-"))}`}>
                                        <button type="button" className="btn btn-outline-primary">Read more</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
