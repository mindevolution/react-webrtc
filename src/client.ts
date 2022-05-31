// @ts-nocheck
const setClient = () => {
  const getUserMedia = navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
    || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  if (!!getUserMedia) {
    navigator.getUserMedia = getUserMedia;

    //get both video and audio streams from user's camera 
    navigator.getUserMedia({ video: true, audio: true }, function (stream) {
      var video = document.querySelector('video');

      //insert stream into the video tag 
      video.srcObject = stream;
    }, function (err) { });

  } else {
    alert("Error. WebRTC is not supported!");
  }
}

export default setClient;