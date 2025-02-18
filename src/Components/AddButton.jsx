import React, { useState } from 'react'
import { Button, Form, InputGroup, Offcanvas } from 'react-bootstrap';
import { globalStyles } from '../globalStyles';
import SubmitButtons from '../ReusableComponents/SubmitButtons';
import ToggleCategoryBtn from '../ReusableComponents/ToggleCategoryBtn';
import { setActiveButton,setActiveCondition,
  resetActiveButton,
  resetActiveCondition, } from '../Redux/slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';



const AddButton = () => {

  
  // call the action using dispatch
  const dispatch = useDispatch();
  // access the state
  const { activeButton, activeCondition} = useSelector((state) => state.productReducer);

    // state for sidebar open and close
  const [isAddProductSidebarOpen, setIsAddProductSidebarOpen] = useState(false);

  const handleAddProducts = () => {
    setIsAddProductSidebarOpen(!isAddProductSidebarOpen);
  };

   //   array for categories
   const categories = [
    { label: "Car", value: 1 },
    { label: "Bike", value: 2 },
    { label: "Bus", value: 3 },
    { label: "Cycle", value: 4 },
    { label: "Scooty", value: 5 },
    { label: "Others", value: 6 },
  ];

  //   array for condition
  const conditions = [
    { label: "New", value: 1 },
    { label: "Used", value: 2 },
  ];

  const handleCategoryChange = (value) => {
    dispatch(setActiveButton(value));
    setProductDetails((prev) => ({ ...prev, category: value }));
  };

  const handleConditionChange = (value) => {
    dispatch(setActiveCondition(value));
    setProductDetails((prev) => ({ ...prev, condition: value }));
  };


  return (
    <div> 
    <Button
 onClick={handleAddProducts}
    className="btn position-fixed bottom-0 end-0 m-4 ps-3 pe-3 shadow-lg"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
      backgroundColor: "#008E8E",
      borderRadius: "50px",
      border: "none",
    }}
  >
    Add{" "}
    <i
      class="fa-solid fa-square-plus ms-2"
      style={{ color: "#ffffff" }}
    ></i>
  </Button>

  {/* *************************side bar****************************** */}
  <Offcanvas
    show={isAddProductSidebarOpen}
    onHide={() => setIsAddProductSidebarOpen(false)}
    placement="end"
  >
    <Offcanvas.Header closeButton className="border-bottom">
      <Offcanvas.Title>Add Parts</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Form>
        {/* *********Partname********** */}
        <Form.Group className="mb-3" controlId="formPartName">
          <Form.Label className="AddFontSize">Part Name</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              name="partName"
            //   value={productDetails.partName}
            //   onChange={handleProductDetailsChange}
            />
          </InputGroup>
          {/* {errors.partName && (
            <div className="text-danger">{errors.partName}</div>
          )} */}
        </Form.Group>

        {/* *********Category********** */}
        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Category</Form.Label>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {categories.map((category) => (
              <ToggleCategoryBtn
                key={category.value}
                label={category.label}
                value={category.label}
                onChange={handleCategoryChange}
                activeButton={activeButton}
                setActiveButton={handleCategoryChange}
                type="category"
              />
            ))}
          </div>
          {/* {errors.category && (
            <div className="text-danger">{errors.category}</div>
          )} */}
        </Form.Group>

        {/* condition */}
        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Condition</Form.Label>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {conditions.map((condition) => (
              <ToggleCategoryBtn
                key={condition.value}
                label={condition.label}
                value={condition.label}
                activeButton={activeCondition}
                setActiveButton={handleConditionChange}
                type="condition"
              />
            ))}
          </div>
          {/* {errors.condition && (
            <div className="text-danger">{errors.condition}</div>
          )} */}
        </Form.Group>

        {/* description  */}
        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Description</Form.Label>
          <Form.Control
            as={"textarea"}
            name="description"
            rows={3}
            // value={productDetails.description}
            // onChange={handleProductDetailsChange}
          ></Form.Control>
          {/* {errors.description && (
            <div className="text-danger">{errors.description}</div>
          )} */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            // value={productDetails.brand}
            // onChange={handleProductDetailsChange}
          />
          {/* {errors.brand && (
            <div className="text-danger">{errors.brand}</div>
          )} */}
        </Form.Group>

        {/* Price */}
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            // value={productDetails.price}
            // onChange={handleProductDetailsChange}
          />
          {/* {errors.price && (
            <div className="text-danger">{errors.price}</div>
          )} */}
        </Form.Group>

        {/* contact */}
        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Contact Number</Form.Label>
          <Form.Control
            type="number"
            name="contactNumber"
            // value={productDetails.contactNumber}
            // onChange={handleProductDetailsChange}
          ></Form.Control>
          {/* {errors.contactNumber && (
            <div className="text-danger">{errors.contactNumber}</div>
          )} */}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Availability</Form.Label>
          <div className="d-flex align-items-center gap-3 mt-2">
            <Form.Check
              type="radio"
              label="Yes"
              name="stockAvailability"
              value="true"
              id="available"
            //   checked={productDetails.stockAvailability === "true"}
            //   onChange={handleProductDetailsChange}
            />
            <Form.Check
              type="radio"
              label="No"
              name="stockAvailability"
              value="false"
              id="not-available"
            //   checked={productDetails.stockAvailability === "false"}
            //   onChange={handleProductDetailsChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="AddFontSize">Images</Form.Label>

          <div className="d-flex align-items-center justify-content-center">
            <label
              htmlFor="fileInput"
              className="btn d-flex align-items-center justify-content-center"
              style={globalStyles.AddPageButtonColr}
            >
              {/* <Icon
                icon="solar:upload-bold"
                style={{ fontSize: "24px", color: "#000" }}
              ></Icon> */}
              Upload
            </label>
            <Form.Control
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
            //   onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          {/* {imageArray.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "20px",
              }} */}
            {/* >
              {imageArray.map((imgURL, index) => (
                <div
                  key={index}
                  style={{
                    width: "200px",
                    height: "auto",
                    position: "relative",
                  }}
                > */}
                  {/* <img
                    // src={imgURL}
                    src={URL.createObjectURL(imgURL)}
                    alt={`Preview ${index}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      border: "1px solid #ccc",
                    }}
                  /> */}
                  {/* Close button */}
                  {/* <button
                    onClick={(event) => handleRemoveImage(index, event)}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      background: "red",

                      border: "none",
                      borderRadius: "50%",
                      width: "25px",
                      height: "25px",
                      cursor: "pointer",
                      padding: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    x
                  </button>
                </div>
              ))} */}
            {/* </div>
          )} */}
          {/* {errors.images && (
            <div className="text-danger">{errors.images}</div>
          )} */}
        </Form.Group>
      </Form>
      {/* location */}

      <div style={{ marginTop: "70px" }}>
        {/* <GoogleMapView
        //   selectedLocation={selectedLocation}
        //   onLocationSelect={handleLocationSelect}
        />
        {errors.location && (
          <div className="text-danger">{errors.location}</div>
        )} */}
      </div>

      {/* submit button */}
      <div className="mt-5">
        {" "}
        <SubmitButtons 
        // onClick={handleSubmit}
        >
          {/* {isLoading ? (
            <>
              <Spinner
                animation="border"
                role="status"
                size="sm"
                className="me-2"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner> */}
              Submit
            {/* </>
          ) : (
            " Submit "
          )} */}
        </SubmitButtons>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
  </div>
  )
}

export default AddButton