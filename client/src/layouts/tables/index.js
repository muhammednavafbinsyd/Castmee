/**
 * =========================================================
 * Soft UI Dashboard React - v4.0.1
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

function Tables() {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);

  const { columns, rows, totalPages } = authorsTableData({page,limit});

  const handlePageChange = (selectedPage) => {
    setpage(selectedPage.selected + 1);
  };
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState([]);
  const [bookname, setBookname] = useState("")
  const [authorname, setAuthorname] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [publishername, setPublishername] = useState("");
  const [publisheddate, setPublisheddate] = useState("");
  const [isbn, setIsbn] = useState("");
  const [binding, setBinding] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [buylink,setBuyLink] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const messageParams = queryParams.get("message");
    if (messageParams) {
      setMessage(messageParams);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  },[])

  
  function validationForm() {
    const errors = {};

    if (!image.length) {
      errors.image = "Image is required";
    }
    if (!bookname.trim()) {
      errors.bookname = "Book name is required";
    }
    if (!authorname.trim()) {
      errors.authorname = "Author name is required";
    }
    if (!price.trim()) {
      errors.price = "Price is required";
    }
    if (!mrp.trim()) {
      errors.mrp = "MRP is required";
    }
    if (!publishername.trim()) {
      errors.publishername = "Publisher name is required";
    }
    if (!publisheddate.trim()) {
      errors.publisheddate = "Published date is required";
    }
    if (!isbn.trim()) {
      errors.isbn = "ISBN is required";
    }
    if (!binding.trim()) {
      errors.binding = "Binding is required";
    }
    if (!edition.trim()) {
      errors.edition = "Edition is required";
    }
    if (!pages.trim()) {
      errors.pages = "Pages is required";
    }
    if (!language.trim()) {
      errors.language = "Language is required";
    }
    if (!description.trim()) {
      errors.description = "Description is required";
    }
    if (!buylink.trim()) {
      errors.buylink = "Buylink is required";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function book(e) {
    e.preventDefault();

    // Validate the form
    const isValid = validationForm();

    if (isValid) {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      const formData = new FormData();
      for (let i = 0; i < image.length; i++) {
        formData.append("image", image[i]);
      }
      formData.append("bookname", bookname)
      formData.append("authorname", authorname);
      formData.append("price", price);
      formData.append("mrp", mrp);
      formData.append("publishername", publishername);
      formData.append("publisheddate", publisheddate);
      formData.append("isbn", isbn);
      formData.append("binding", binding);
      formData.append("edition", edition);
      formData.append("pages", pages);
      formData.append("language", language);
      formData.append("description", description);
      formData.append("buylink",buylink);
      axios
        .post(`${ServerURL}/users/book_post`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.href="/book?message=Book%20added%20successfully"
          handleClose();
        })
        .catch((error) => {
          console.log(error, "something error ");
        });
    }
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <p style={{color:"green",fontSize:"15px"}}>{message}</p>
              <Button variant="secondary" size="sm" onClick={handleShow}>
                Add book
              </Button>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SoftBox>
          </Card>
        </SoftBox>
        <>
              <Dialog open={show} onClose={handleClose}  >
              <DialogTitle
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              Book{" "}
              <IconButton onClick={handleClose}>
                {" "}
                <Close />
              </IconButton>{" "}
            </DialogTitle>
                <DialogContent >
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Book image</Form.Label>
                  <Form.Control
                    type="file"
                    isInvalid={!!errors.image}
                    multiple
                    onChange={(e) => setImage(e.target.files)}
                    placeholder="Image"
                    name="image"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                  </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Book name</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.bookname}
                    onChange={(e) => setBookname(e.target.value)}
                    placeholder="Book name"
                    name="bookname"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Author name</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.authorname}
                    onChange={(e) => setAuthorname(e.target.value)}
                    placeholder="Author name"
                    name="authorname"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.authorname}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    name="price"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>MRP</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.mrp}
                    onChange={(e) => setMrp(e.target.value)}
                    placeholder="MRP"
                    name="mrp"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.mrp}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Publisher name</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.publishername}
                    onChange={(e) => setPublishername(e.target.value)}
                    placeholder="Publisher name"
                    name="publishername"
                    autoFocus
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">{errors.publishername}</Form.Control.Feedback>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Published date</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.publisheddate}
                    onChange={(e) => setPublisheddate(e.target.value)}
                    placeholder="Published date"
                    name="publisheddate"
                    autoFocus
                  />
                </Form.Group>
                <Form.Control.Feedback type="invalid">
                  {errors.setPublisheddate}
                </Form.Control.Feedback>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>ISBN</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                    placeholder="ISBN"
                    name="isbn"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.isbn}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Binding</Form.Label>

                  <Form.Control
                    type="text"
                    isInvalid={errors.binding}
                    onChange={(e) => setBinding(e.target.value)}
                    placeholder="Binding"
                    name="binding"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.binding}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Edition</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.edition}
                    onChange={(e) => setEdition(e.target.value)}
                    placeholder="Edition"
                    name="edition"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.edition}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Pages</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.pages}
                    onChange={(e) => setPages(e.target.value)}
                    placeholder="Pages"
                    name="pages"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.pages}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Language</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.language}
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder="Language"
                    name="language"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">{errors.language}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    isInvalid={!!errors.description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    name="description"
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Buylink</Form.Label>
                  <Form.Control
                    type="text"
                    isInvalid={!!errors.buylink}
                    onChange={(e) => setBuyLink(e.target.value)}
                    placeholder="Buylink"
                    name="buylink"
                    rows={3}
                  />
                  <Form.Control.Feedback type="invalid">{errors.buylink}</Form.Control.Feedback>
                </Form.Group>
              </Form>
           <DialogActions>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={book}>
                Save Changes 
              </Button>
              </DialogActions>
              </DialogContent>
              </Dialog>
        </>
        <>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          pageCount={totalPages}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active-page"}
          pageRangeDisplayed={10} 
          marginPagesDisplayed={1}
          breakLabel={"..."}
          breakClassName={"break-me"}
          forcePage={page - 1} 
          disableInitialCallback={true}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          pageClassName={"page-item"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
        />
        </>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
