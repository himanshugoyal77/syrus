import React from "react";
import { useState } from "react";

const InputForm = () => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
    location: "",
    price: "",
    artist: "",
  });

  const handleSubmit = () => {
    event.preventDefault()
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mockup-window border bg-base-300">
        <div className="title text-3xl pb-2">
          <h1>Enter Event Details</h1>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is the event called?</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Event description</span>
              <span className="label-text-alt">Alt label</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 w-80"
              placeholder="Event Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">When is the event planned?</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="time"
              className="input input-bordered w-full max-w-xs"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Where is the event planned?</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="location"
              className="input input-bordered w-full max-w-xs"
              value={formData.location}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Featured Artists</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="artist"
              value={formData.artist}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="flex justify-center px-4 py-2 bg-base-200">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Enter Your Images here</span>
              <span className="label-text-alt">*</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </label>
        </div>

        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          RSVP or Book Now!
        </button>
      </div>
    </form>
  );
};

export default InputForm;
