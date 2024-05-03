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
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
function Author({ page, limit }) {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [booklist, setBooklist] = useState([]);
  const [show, setShow] = useState(false);
  const [dialogShow, setDialogShow] = useState(false);
  const [deleteid, setDeleteid] = useState(null);
  const [viewid, setViewid] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const handleClose = () => {
    setShow(false);
    setDeleteid(true);
  };
  const handleShow = (id) => {
    setDeleteid(id);
    setShow(true);
  };
  const handleDialogshow = (id) => {
    setViewid(id);
    setDialogShow(true);
  };

  const handleDialogClose = () => {
    setDialogShow(false);
  };
  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      try {
        const response = await axios.get(
          `${ServerURL}/users/book_read?page=${page}&limit=${limit}`
        );
        setBooklist(response.data.bookData);
        setTotalPages(response.data.totalpages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks(page, limit, totalPages);
  }, [page, limit, totalPages]);
  const bookdelete = async (id) => {
    try {
      await axios.delete(`${ServerURL}/users/book_delete/${id}`);
      setBooklist((prevBloglist) => prevBloglist.filter((item) => item._id !== id));
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const Image = ({ image }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column" width="200px">
        <img
          style={{ maxWidth: "100%" }}
          src={image}
          fontWeight="medium"
          color="text"
          className="rounded"
        ></img>
      </SoftBox>
    </SoftBox>
  );

  const Bookname = ({ bookname }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {bookname}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Authorname = ({ authorname }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {authorname}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Publishername = ({ publishername }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {publishername}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Publisheddate = ({ publisheddate }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {publisheddate}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Isbn = ({ isbn }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {isbn}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Binding = ({ binding }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {binding}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Edition = ({ edition }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {edition}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Pages = ({ pages }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {pages}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Language = ({ language }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {language}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Description = ({ description }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column" width="16rem">
        <SoftTypography variant="caption" fontWeight="medium">
          {description}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Mrp = ({ mrp }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {mrp}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Price = ({ price }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {price}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
  const Buylink = ({ buylink }) => (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="caption" fontWeight="medium">
          {buylink}
          {/* <a href={buylink}>Buy</a> */}
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
      { name: "bookname", align: "center" },
      { name: "authorname", align: "center" },
      { name: "publishername", align: "center" },
      { name: "publisheddate", align: "center" },
      { name: "isbn", align: "center" },
      { name: "binding", align: "center" },
      { name: "edition", align: "center" },
      { name: "pages", align: "center" },
      { name: "language", align: "center" },
      { name: "description", align: "center" },
      { name: "mrp", align: "center" },
      { name: "price", align: "center" },
      { name: "buylink", align: "center" },
      { name: "view", align: "center" },
      { name: "action", align: "center" },
    ],

    rows: booklist.map((item, index) => ({
      no: <NO key={index} no={(page - 1) * limit + index + 1}></NO>,
      image: <Image image={`${ServerURL}/uploads/${item.Image[0]}`} />,
      bookname: <Bookname bookname={item.Bookname} />,
      authorname: <Authorname authorname={item.Authorname} />,
      publishername: <Publishername publishername={item.Publishername} />,
      publisheddate: <Publisheddate publisheddate={item.Publisheddate} />,
      isbn: <Isbn isbn={item.Isbn} />,
      binding: <Binding binding={item.Binding} />,
      edition: <Edition edition={item.Edition} />,
      pages: <Pages pages={item.Pages} />,
      language: <Language language={item.Language} />,
      description: <Description description={item.Description} />,
      mrp: <Mrp mrp={item.Mrp} />,
      price: <Price price={item.Price} />,
      buylink: <a href={item.Buylink} ><Buylink buylink={item.Buylink} /></a>,
      view: (
        <div>
          <SoftButton color="secondary" onClick={() => handleDialogshow(item._id)} variant="text">
            View
          </SoftButton>
          <>
            <Dialog open={dialogShow && viewid === item._id} onClose={handleDialogClose}>
              <DialogTitle
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
             
                Book
                <IconButton onClick={handleDialogClose}>
                  {" "}
                  <Close />
                </IconButton>{" "}
              </DialogTitle>
              <DialogContent>
                <Image image={`${ServerURL}/uploads/${item.Image[0]}`} />
                <Bookname bookname={item.Bookname} />
                <Authorname authorname={item.Authorname} />
                <Publishername publishername={item.Publishername} />
                <Publisheddate publisheddate={item.Publisheddate} />
                <Isbn isbn={item.Isbn} />
                <Binding binding={item.Binding} />
                <Edition edition={item.Edition} />
                <Pages pages={item.Pages} />
                <Language language={item.Language} />
                <Description description={item.Description} />
                <Mrp mrp={item.Mrp} />
                <Price price={item.Price} />
                <a href={item.Buylink}><Buylink buylink={item.Buylink}/></a>
              </DialogContent>
            </Dialog>
          </>
        </div>
      ),
      action: (
        <div>
          <Link to={`/bookedit/${item._id}`}>
            <FontAwesomeIcon icon={faEdit} className="fa-2x m-2" cursor="pointer"></FontAwesomeIcon>
          </Link>
          <FontAwesomeIcon
            onClick={() => handleShow(item._id)}
            icon={faTrash}
            className="fa-2x m-2 text-danger"
            cursor="pointer"
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
                <Button variant="warning" onClick={() => bookdelete(item._id)}>
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
