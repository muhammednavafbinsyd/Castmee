// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import Button from "react-bootstrap/Button";

// Data
import authorsTableData from "layouts/blog-table/data/authorsTableData";

// bootstrap
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

function Tables() {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const tinymceAPI = process.env.REACT_APP_TYNYMCE_APIKEY;

  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(5);
  const { columns, rows, totalPages } = authorsTableData({ page, limit });

  const handlePageChange = (selectedPage) => {
    setpage(selectedPage.selected + 1);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrors({});
  };
  const handleShow = () => {
    setShow(true);
  };
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const messageParams = queryParams.get("message");
    if (messageParams) {
      setMessage(messageParams);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, []);

  function validateForm() {
    let isValid = true;
    const newErrors = {};

    if (!image) {
      newErrors.image = "Please select an image.";
      isValid = false;
    }

    if (!title.trim()) {
      newErrors.title = "Title is required.";
      isValid = false;
    }

    if (!Description.trim()) {
      setDescriptionError("Description is required.");
      isValid = false;
    } else {
      setDescriptionError(null);
    }

    setErrors(newErrors);
    return isValid;
  }

  function blog(e) {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("Title", title);
      formData.append("Description", Description);

      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      axios
        .post(`${ServerURL}/users/blog_post`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.href = "/blog?message=Blog%20added%20successfully";
          handleClose();
        })
        .catch((error) => {
          console.error(error + "something error");
        });
    }
  }

  const example_image_upload_handlertyne = (blobInfo, progress) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open("POST", `${ServerURL}/users/tinymceImageUpload`);
      xhr.upload.onprogress = (e) => {
        progress((e.loaded / e.total) * 100);
      };
      xhr.onload = () => {
        if (xhr.status === 403) {
          reject({ message: "HTTP Error:" + xhr.status, remove: true });
          return;
        }
        if (xhr.status < 200 || xhr.status >= 300) {
          reject("HTTP Error: " + xhr.status);
          return;
        }
        const json = JSON.parse(xhr.responseText);
        if (!json || typeof json.location != "string") {
          reject("Invalid JSON: " + xhr.responseText);
          return;
        }
        resolve(json.location);
      };
      xhr.onerror = () => {
        reject("Image upload failed due to a XHR Transport error. Code: " + xhr.status);
      };
      const formData = new FormData();
      formData.append("file", blobInfo.blob(), blobInfo.filename());
      xhr.send(formData);
    });

  const editorConfig = {
    apiKey: tinymceAPI,
    plugins: ["image", "lists", "code"],
    toolbar: "bullist numlist image code",
    menu: { tools: { title: "Tools", items: "listprops" } },
    image_advtab: true,
    image_uploadtab: true,
    images_upload_handler: example_image_upload_handlertyne,
    images_upload_base_path: ServerURL,
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <p style={{ color: "green", fontSize: "15px" }}>{message}</p>
              <Button variant="secondary" size="sm" onClick={handleShow}>
                Add blog
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
          <Dialog open={show} onClose={handleClose} disableEnforceFocus={true}>
            <DialogTitle
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              Blog{" "}
              <IconButton onClick={handleClose}>
                {" "}
                <Close />
              </IconButton>{" "}
            </DialogTitle>
            <DialogContent>
              <Form>
                <Form.Group className="mb-3" controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    isInvalid={!!errors.image}
                  />
                  <Form.Control.Feedback type="invalid">{errors.image}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    isInvalid={!!errors.title}
                  />
                  <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescription">
                  <Form.Label>Description</Form.Label>
                  <Editor
                    init={editorConfig}
                    apiKey={tinymceAPI}
                    value={Description}
                    onEditorChange={(content) => {
                      setDescription(content);
                    }}
                  />
                  <p type="invalid" style={{ color: "red" }}>
                    {descriptionError}
                  </p>
                </Form.Group>
              </Form>
            </DialogContent>
            <DialogActions>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={blog}>
                Save Changes
              </Button>
            </DialogActions>
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
