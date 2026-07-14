import React, { useState } from 'react'
import axios from 'axios'
const AddCar = () => {

    const[input,setinput]=useState({
        registration_number: "",
        brand: "",
        model: "",
        vehicle_type: "",
        fuel_type: "",
        transmission: "",
        seating_capacity: "",
        rent_per_day: "",
        city: "",
        availability_status: ""
    })

   const inputHandler = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setinput({
        ...input,
        [event.target.name]: event.target.value
    });
};

    const dataHandler=(res)=>{
        console.log(input);
        
        axios.post("https://host-demo-app.onrender.com/api/add-car",input).then(
            (res)=>{
                console.log(res.data);
                
               setinput(res.data) 
               alert("data added")
            }
        ).catch((error)=>{
        console.log(error.response.data);
        })
        
        
    }









  return (
    <div>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">Add Car</h1>
                   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label" >reagister number:</label>
                        <input type="text"
                         className="form-control" required
                         name='registration_number'
                         value={input.registration_number}
                         onChange={inputHandler}

                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Brand:</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='brand'
                          value={input.brand}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">model:</label>
                        <input type="text"
                         className="form-control"
                          required
                          name='model'
                          value={input.model}
                          onChange={inputHandler}
                          />
                        
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">vehicle type :</label>
                        <select name="" id="" className="form-control" name='vehicle_type' value={input.vehicle_type} onChange={inputHandler}>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                             <option value="SUV">SUV</option>
                              <option value="MUV">MUV</option>
                               <option value="Luxury">Luxury</option>
                                
                            

                            
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Fuel type   :</label>
                        <select name="" id="" className="form-control" name='fuel_type' value={input.fuel_type} onChange={inputHandler}>
                            <option value="Petrol">Petrol</option>
                            <option value="Diesel">Diesel</option>
                             <option value="Electric">Electric</option>
                              <option value="Hybrid">Hybrid</option>
                               <option value="CNG">CNG</option>
                               </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">transmission type :</label>
                       <select name="" id="" className="form-control" name='transmission' value={input.transmission} onChange={inputHandler}>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                            
                               </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">seating capacity:</label>
                        <input type="number" className="form-control" required
                        
                        name='seating_capacity'
                         value={input.seating_capacity}
                         onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">rent-per day :</label>
                        <input type="number" className="form-control"  required
                        
                        name='rent_per_day'
                         value={input.rent_per_day}
                         onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">city</label>
                        <input type="text" className="form-control"
                        name='city'
                         value={input.city}
                        onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">available status</label>
                        <select  id="" className="form-control" name='availability_status' value={input.availability_status} onChange={inputHandler}>
                            <option value="Available">Available</option>
                            <option value="Booked">Booked</option>
                            <option value="Maintainance">Maintainance</option>
                               </select>
                    </div>
                    
                    
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success" onClick={dataHandler}>submit :</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCar