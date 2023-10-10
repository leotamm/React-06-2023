import { useEffect, useRef, useState } from "react"
import '../css/chat.css'
import CameraIcon from '../assets/images/camera-icon.png'
import TrashIcon from '../assets/images/trash-icon.png'

function Chat() {

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: { width: 1920, height: 1080 } })
      .then(function (mediaStream) {
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch(err => {
        console.log(err);
      })
  }
  // INFO: webcam temporariliy disabled
  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  }

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  }

  return (
    <div>
      <h4>/ Chat page /</h4><br />
      <div className='camera'>
        <video className='chat-video' autoPlay={true} ref={videoRef}></video>
        <button className='chat-button' onClick={() => takePhoto()}>
          <img className='chat-button-image' src={CameraIcon} alt='camera' />
        </button>
      </div>
      <div className={'result ' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas className='chat-canvas' ref={photoRef}></canvas>
        <button className='chat-button' onClick={() => closePhoto()}>
        <img className='chat-button-image' src={TrashIcon} alt='trash bin' />
        </button>
      </div>
    </div>
  )
}

export default Chat