// import { useState } from "react";
import "./UploadVideoPage.scss";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";

function UploadVideoPage() {
   
    return (
      <>
      
      <div className="upload">
        <img src={uploadImage} alt="upload__img" className="upload__img" />
        <div className="upload__input">
          <label htmlFor="videoTitle"   className="upload__textarea">
            Title your video
            <textarea
              className="upload__title upload__textarea"
              placeholder="Add title to your video">
              </textarea>
          </label>
          <label htmlFor="videoDescription"  className="upload__textarea">
            Add a video description
            <textarea
              className="upload__description"
              placeholder="Add a descriptionn to your video"
            ></textarea>
          </label>
        </div>
        <div className="upload__buttons">
          <input type="button" value="Cancel" className="upload__cancel" />
          <input type="button" value="Publish" className="upload__publish" />
        </div>
      </div>
       
      </>
    );
  }
  
  export default UploadVideoPage;