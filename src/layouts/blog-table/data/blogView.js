import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import axios from 'axios'
import { IoTelescope } from 'react-icons/io5'

function BlogView() {
    const ServerURL = process.env.REACT_APP_CASTMEE_URL;
    const { id } = useParams()
    const [description, setDescription] = useState("")
    const [Title,setTitle ] = useState("")
    const [image,setImage] = useState([])

    useEffect(() => {
        const viewBlog = async (id) => {
            const token = localStorage.getItem("token");
            axios.defaults.headers.common["Authorization"] = token;
            try {
                const response = await axios.get(`${ServerURL}/users/blog_edit_read/${id}`)
                setDescription(response.data.Description);
                setTitle(response.data.Title);
                setImage(response.data.Image);

            } catch (error) {
                console.log(error)
            }
        }
        viewBlog(id)
    }, [id,ServerURL])

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <div>
                <p>{Title}</p>
                <img style={{maxWidth:"100%"}} src={`${ServerURL}/uploads/${image}`}></img>
            <div dangerouslySetInnerHTML={{ __html:description }} />
            </div>
           
        </DashboardLayout>
    )
}

export default BlogView
