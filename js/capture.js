function capture() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', video.clientWidth);                                                                                        
    canvas.setAttribute('height', video.clientHeight);
    canvas.getContext('2d').drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

    // Make a request for a user with a given ID
    axios.post('https://089oiw4mt2.execute-api.ap-northeast-1.amazonaws.com/api/vision', {
        content: canvas.toDataURL('image/jpeg').split(',')[1]
      })
      .then(function (response) {
          console.log(response);
      });
}

setInterval("capture()", 10000);
