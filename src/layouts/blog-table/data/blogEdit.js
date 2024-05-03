import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { Editor } from '@tinymce/tinymce-react'



function blogEdit() {
 const  ServerURL = process.env.REACT_APP_CASTMEE_URL;
 const  tinymceAPI = process.env.REACT_APP_TYNYMCE_APIKEY;
  const{id} = useParams()
  const [ blogitems,setBlogitems] = useState({
    Image:null,
    Title:"",
    Description:""
  })  
  useEffect(()=>{
    const blogeditRead =async(id)=>{
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      try{
        const response = await axios.get(`${ServerURL}/users/blog_edit_read/${id}`)
        setBlogitems(response.data)
      }catch(error){
        console.log(error)
      }
    }
    blogeditRead(id)
  },[])

  const updateBlog = (e)=>{
    e.preventDefault()

    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    const  formData = new FormData();
    formData.append("image",blogitems.Image);
    formData.append("Title",blogitems.Title);
    formData.append("Description",blogitems.Description);
    axios.put(`${ServerURL}/users/blog_update/${id}`,formData,{
      headers:{
        "Content-Type":"multipart/form-data",
      }
    })
    .then((response) => {
      if(response.status === 200 ){
        window.location="/blog"
      }
    })
    .catch((error) => {
      console.log(error)
    })
  
  }


  const example_image_upload_handlertyne = (blobInfo, progress) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST",`${ServerURL}/users/tinymceImageUpload`);
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
    formData.append("file",blobInfo.blob(),blobInfo.filename());
    xhr.send(formData);
  });

  const editorConfig = {
    apiKey: tinymceAPI,
    plugins: [
      "image",
      "lists",
      "code",
    ],
    toolbar: "bullist numlist image code",
    menu: { tools: { title: "Tools", items: "listprops" } },
    image_advtab: true,
    image_uploadtab: true,
    images_upload_handler:example_image_upload_handlertyne,
    images_upload_base_path:ServerURL
  };


  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <div>
       <Stack gap={4}>
      <Form>
       <div className="p-1">
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" name='image' onChange={(e)=>setBlogitems({...blogitems,Image:e.target.files[0]})}/>
      </Form.Group>
      </div>
      <div className="p-1">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" name='Title' value={blogitems.Title} onChange={(e)=>setBlogitems({...blogitems,Title:e.target.value})}  />
      </Form.Group>
      </div>
      <div className="p-1">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Editor
        apiKey={tinymceAPI}
        value={blogitems.Description}
        init={editorConfig}
        onEditorChange={(content)=>setBlogitems({...blogitems,Description: content})}
        >
        </Editor>
      </Form.Group>
      </div>
      <div className="p-2">
      <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary" onClick={updateBlog} >Save changes</Button>
      <Button variant="outline-secondary">Cancel</Button>
      </Stack>
      </div>
      </Form>
    </Stack>
    </div>
    </DashboardLayout>
  )
}

export default blogEdit