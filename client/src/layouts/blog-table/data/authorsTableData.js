/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import { useEffect, useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SoftButton from "components/SoftButton";


function Author({page,limit}){

  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [bloglist, setBloglist] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteid, setDeleteid] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const handleClose = () => {
    setShow(false);
    setDeleteid(true);
  };
  const handleShow = (id) => {
    setDeleteid(id);
    setShow(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      try {
        const response = await axios.get(`${ServerURL}/users/blog_read?page=${page}&limit=${limit}`);
        setBloglist(response.data.blogData);
        setTotalPages(response.data.totalpages);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData(page,limit,totalPages);
  }, [page,limit,totalPages]);

  const blogDelete = async (id) => {
    try {
      await axios.delete(`${ServerURL}/users/blog_delete/${id}`);
      setBloglist(prevBloglist=>prevBloglist.filter(item => item._id !== id));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const Image = ({ image }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column" width="200px">
        <img src={image} fontWeight="medium" color="text" width="auto" className="rounded"></img>
      </SoftBox>
    </SoftBox>
  );
  const Title = ({ title }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {title}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
    const NO = ({ no }) => (
    <SoftBox>
      <SoftTypography variant="caption" fontWeight="sm" color="text">
        {no}
      </SoftTypography>
    </SoftBox>
  );
  return {
    columns: [
      { name: "no", align: "center" },
      { name: "image", align: "left" },
      { name: "title", align: "center" },
      { name: "description", align: "center" },
      { name: "action", align: "center" },
    ],
    rows: bloglist.map((item,index) => ({
      no: <NO key={index} no={(page - 1) * limit + index + 1}></NO>,
      image: <Image image={`${ServerURL}/uploads/${item.Image}`} />,
      title: <Title title={item.Title} />,
      description: (
        <div>
           <SoftButton 
           color="secondary"
           variant="text"
           component={Link}
           to={`/blogview/${item._id}`}
           >View</SoftButton>
        </div>
      ),
      action:(
        <div>
          <Link to={`/blogedit/${item._id}`}>
            <FontAwesomeIcon icon={faEdit} className="fa-2x m-2" cursor="pointer"></FontAwesomeIcon>
          </Link>
          <FontAwesomeIcon
            icon={faTrash}
            className="fa-2x m-2 text-danger"
            cursor="pointer"
            onClick={() => handleShow(item._id)}
          ></FontAwesomeIcon>
          <>
            <Modal show={show && deleteid === item._id} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Confirm delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure want to delete this item?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={() => blogDelete(item._id)}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      ),
    })),
    totalPages: totalPages,
  };
}

export default Author;
