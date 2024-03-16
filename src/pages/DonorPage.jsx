import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context";
import bloodDonationData from "../DummyData";

import axios from "axios";


const DonorPage = () => {
  const { Name } = useContext(UserContext);
  const [userLocation, setUserLocation] = useState({});
  // const [table,setTable] = useState([]);
  const [search,setSearch] = useState("")
  const [table,setTable] = useState(bloodDonationData)



  const handleSearch = () =>{
    console.log(search)
    setTable(table.filter((data) => 
      data.address.toLowerCase().includes(search) || data.name.toLowerCase().includes(search)
    ))
    // setTable(TableData)
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&apiKey=7f5ed6a789f24eb4b8c3c41b593bbe1d`)
          .then(function (response) {
           setSearch(response.data.features[0].properties.city)
           handleSearch()
          })
          .catch(function (error) {
            alert('cant get ur current Location',error);
          })
        }
      )
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  


  return (
    
    <div className="bg-dark" style={{minHeight:"100vh"}}>
      <div className=" shadow bg-danger position-relative" >
        
        <div
          className=" container position-relative "
          style={{ height: "15vh" }}
        >
          
          <div
            className="position-absolute text-white"
            style={{ bottom: "30px" }}
          >
            <div className="fs-1  ">Hii,  <span className="fw-bold">{Name}</span></div>
            <div className=" fs-1 fw-bold "></div>
            <div>We are Grateful to have you here.... :D</div>
          </div>
        </div>
      </div>
      <div className="container pt-4 ">
        <div>

            <div className="shadow p-3 rounded-3 mb-3 bg-white " >
              <div class="dropdown">
                <button class="btn bg-danger-subtle p-2 w-100 dropdown-toggle fs-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Know About Blood Types
                </button>
          <ul class="dropdown-menu">
            <li><div class="dropdown-item" type="button">Action</div></li>
            <li><div class="dropdown-item" type="button">Another action</div></li>
            <li><div class="dropdown-item" type="button">Something else here</div></li>
          </ul>
        </div>
        </div>
        </div>
        <div className="shadow p-3 rounded-3 mb-3 bg-white">
        <div className="input-group input-group-sm  rounded-2 d-flex  flex-wrap justify-content-between fs-5">
          <input value={search} type="text" className=" p-2 px-2 rounded-2 border-danger flex-fill  outline-0  text-danger"
           onChange={(e) =>{ 
            setSearch(e.target.value.toLowerCase())
            setTable(bloodDonationData)
          }} 
          style={{outline:0,border:"2px solid red"}}  placeholder=" Enter Location" aria-label="Enter Location" aria-describedby="button-addon2" />
          <button className="btn bg-danger text-white fs-5 px-3 " type="button" id="button-addon2" onClick={()=>handleSearch()}>Search</button>
        </div>
        <button  className="btn bg-danger  text-white fs-5 p-2 mt-3 w-100 d-flex align-items-center justify-content-center" onClick={getUserLocation} type="button" id="button-addon2">
          <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  height="20px" width="20px" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path> </g> </g></svg>
          <div className=""  style={{paddingLeft:"5px"}}>
          Search Near Your Location
          </div>
          </button>
      </div>

      <div className="shadow p-3 rounded-3 mt-5 fs-5 bg-white">
            <div className="overflow-x-scroll">
              <table className="table table-striped table-hover ">
              <thead>
                <tr> 
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {/* {bloodDonationData.map((data) => (
                  <tr className="">
                    <th scope="row">{data.name}</th>
                    <td>{data.address}</td> 
                    <td>{data.contactNo}</td>
                    <td>{data.timing}</td>
                  </tr>
                ))} */}

                {
                    table.map((datas) => (
                      <tr key={datas.id}>
                      <th scope="row">{datas.name}</th>
                      <td>{datas.address}</td> 
                      <td>{datas.contactNo}</td>
                      <td>{datas.timing}</td>
                    </tr>
                    ))
                }


                {/* {dataTable} */}

                {/* <tr>
                  <th scope="row">Red Cross Blood Center	</th>
                  <td>123 Gandhi Road, Mumbai, Maharashtra, India	 </td> 
                  <td>+91 9876543210	</td>
                  <td>Mon-Fri 9-5</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
              </table>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default DonorPage;
