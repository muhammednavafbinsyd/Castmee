import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function bookEdit() {
  const { id } = useParams();
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [booklist, setBooklist] = useState({
    Image: [],
    Bookname:"",
    Authorname: "",
    Price: "",
    Mrp: "",
    Publishername: "",
    Publisheddate: "",
    Isbn: "",
    Binding: "",
    Edition: "",
    Pages: "",
    Language: "",
    Description: "",
    Buylink:""
  });


  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const fetchBooks = async (id) => {
      try {
        const response = await axios.get(`${ServerURL}/users/book_edit_read/${id}`);
        setBooklist(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks(id);
  }, [id]);

  const updateBook = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    const formData = new FormData();


    if(booklist.Image.length >0){
        for (let i = 0; i < booklist.Image.length; i++) {
            formData.append("image", booklist.Image[i]);
          }
    }
   
    formData.append("Bookname", booklist.Bookname);
    formData.append("Authorname", booklist.Authorname);
    formData.append("Price", booklist.Price);
    formData.append("Mrp", booklist.Mrp);
    formData.append("Publishername", booklist.Publishername);
    formData.append("Publisheddate", booklist.Publisheddate);
    formData.append("Isbn", booklist.Isbn);
    formData.append("Binding", booklist.Binding);
    formData.append("Edition", booklist.Edition);
    formData.append("Pages", booklist.Pages);
    formData.append("Language", booklist.Language);
    formData.append("Description", booklist.Description);
    formData.append("Buylink", booklist.Buylink);

    axios
      .put(`${ServerURL}/users/book_update/${id}`,formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        window.location.href = "/book";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = Array.from(e.target.files);
    setBooklist((prevbookData) =>({
      ...prevbookData,
      Image:file,
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Stack gap={4}>
        <Form>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                multiple
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Authorname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Bookname: e.target.value })}
                value={booklist.Bookname}
                placeholder="Book name"
                name="Bookname"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Authorname</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Authorname: e.target.value })}
                value={booklist.Authorname}
                placeholder="Authorname"
                name="Authorname"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Price: e.target.value })}
                value={booklist.Price}
                placeholder="Price"
                name="Price"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mrp</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Mrp: e.target.value })}
                value={booklist.Mrp}
                placeholder="Mrp"
                name="Mrp"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Publishername</Form.Label>
              <Form.Control
                value={booklist.Publishername}
                onChange={(e) => setBooklist({ ...booklist, Publishername: e.target.value })}
                type="text"
                placeholder="Publishername"
                name="Publishername"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Publisheddate</Form.Label>
              <Form.Control
                value={booklist.Publisheddate}
                onChange={(e) => setBooklist({ ...booklist, Publisheddate: e.target.value })}
                type="text"
                placeholder="Publisheddate"
                name="Publisheddate"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Isbn</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Isbn: e.target.value })}
                value={booklist.Isbn}
                placeholder="Isbn"
                name="Isbn"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Binding</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Binding: e.target.value })}
                value={booklist.Binding}
                placeholder="Binding"
                name="Binding"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edition</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Edition: e.target.value })}
                value={booklist.Edition}
                placeholder="Edition"
                name="Edition"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Pages</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Pages: e.target.value })}
                value={booklist.Pages}
                placeholder="Pages"
                name="Pages"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setBooklist({ ...booklist, Language: e.target.value })}
                value={booklist.Language}
                placeholder="Language"
                name="Language"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={booklist.Description}
                onChange={(e) => setBooklist({...booklist, Description: e.target.value})}
                as="textarea"
                type="text"
                placeholder="Description"
                name="Description"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-1">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Buylink</Form.Label>
              <Form.Control
                value={booklist.Buylink}
                onChange={(e) => setBooklist({ ...booklist, Buylink: e.target.value })}
                type="text"
                placeholder="Buylink"
                name="Buylink"
              ></Form.Control>
            </Form.Group>
          </div>
          <div className="p-2">
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary" onClick={updateBook}>
                Save changes
              </Button>
              <Button variant="outline-secondary">Cancel</Button>
            </Stack>
          </div>
        </Form>
      </Stack>
    </DashboardLayout>
  );
}

export default bookEdit;
