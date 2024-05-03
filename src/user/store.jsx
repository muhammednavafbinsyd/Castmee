import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

function Store() {
  const ServerURL = process.env.REACT_APP_CASTMEE_URL;
  const [booklist,setBooklist] = useState([])
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const handleShow = (index) =>{
    setSelectedItemIndex(index);
  } 
  const handleClose = () =>{
    setSelectedItemIndex(null);
  } 
  useEffect(()=>{
    const book = async()=>{
      try{
        const response  = await axios.get(`${ServerURL}/users/book_read_front`)
        setBooklist(response.data);
      }catch(error){
        console.log(error);
      }
    }
    book();
  },[])


  return (
    <div>
      <div className="container-fluid bg-dark py-4" name="store">
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="col-12">
              <h1 id="tags2" className="poppins-regular hw-wrkhead text-white">
                <span className="poppins-light " style={{ color: "#FEC400" }}>
                  Our
                </span>{" "}
                Store
              </h1>
            </div>
            {booklist.map((item,index)=>(
            <Card key={index} style={{ borderRadius: "0" }} className="col-6 col-md-3 rounded mx-2 my-2" >
              <div className="storeimg mt-2">
                <Card.Img
                  onClick={handleShow}
                  variant="top"
                  style={{
                    width: "100%",
                    aspectRatio: "3/3",
                    objectFit: "contain",
                  }}
                  src={`${ServerURL}/uploads/${item.Image[0]}`}
                />
              </div>
              <Card.Body style={{ padding: "0" }}>
                <Card.Title>{item.Bookname}</Card.Title>
                <Card.Text>
                  <div className="cardtext">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 p-0">
                          {item.Authorname}
                        </div>
                        <div
                          className="col-sm-12 col-md-6 p-0"
                          style={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "end",
                          }}
                        >
                          <p
                            style={{ margin: "0", color: "blue" ,cursor:"pointer" }}
                            onClick={()=>handleShow(index)}
                          >
                            view
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12"
                    style={{ height: "1px", backgroundColor: "black" }}
                  ></div>
                  <div className="col-12 pt-2">
                    <h4>{item.Price}</h4>
                  </div>{" "}
                  <div
                    className="col-12"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                    }}
                  >
                    <p style={{ margin: "0", paddingRight: "10px" }}>MRP :</p>
                    <p className="crossline" style={{ margin: "0" }}>
                      {item.Mrp}
                    </p>
                  </div>
                </Card.Text>
                <div
                  className="col-12 mt-3"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    type="button"
                    href={item.Buylink} 
                    className="btn btn-success my-2"
                    style={{ width: "80%" }}
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
              ))}
          </div>
        </div>
      </div>
      {booklist.map((item,index)=>(
      <Modal key={index}  style={{padding:'0'}} show={selectedItemIndex === index} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{item.Bookname}</h3>
            <p style={{ fontSize: "medium" }}>
              by <span style={{ color: "blue" }}>{item.Authorname}</span> (Autor)
            </p>
          </Modal.Title>
        </Modal.Header>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-sm-12 col-md-3"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                className="storeImg"
                src={`${ServerURL}/uploads/${item.Image[0]}`}
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-9">
              <p>
                {item.Description}
              </p>
            </div>
          </div>
        </div>
        <Modal.Body>
               <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                       <b>Publisher:</b> 
                    </div>
                    <div className="col-9 storetext">
                      {item.Publishername}
                    </div>
                    <div className="col-3">
                    <b>Published:</b> 
                    </div>
                    <div className="col-9 storetext">
                     {item.Publisheddate}
                    </div>
                    <div className="col-3">
                    <b>ISBN:</b> 
                    </div>
                    <div className="col-9 storetext">
                      {item.Isbn}
                    </div>
                    <div className="col-3">
                    <b>Binding:</b> 
                    </div>
                    <div className="col-9 storetext">
                      {item.Binding}
                    </div>
                    <div className="col-3">
                    <b>Edition:</b> 
                    </div>
                    <div className="col-9 storetext">
                     {item.Edition}
                    </div>
                    <div className="col-3 storetext">
                    <b>pages:</b> 
                    </div>
                    <div className="col-9 storetext">
                      {item.Pages}
                    </div>
                    <div className="col-3">
                    <b>Language:</b> 
                    </div>
                    <div className="col-9 storetext">
                    {item.Language}
                    </div>
                </div>
               </div>      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" href={item.Buylink} onClick={handleClose}>
            Buy Now 
          </Button>
        </Modal.Footer>
      </Modal>
       ))}       
    </div>
  );
}

export default Store;
