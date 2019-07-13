function capture() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', 300);                                                                                        
    canvas.setAttribute('height', 300);
    canvas.getContext('2d').drawImage(video, 0, 0, 300, 300);


    console.log(canvas.toDataURL('image/jpeg').split(',')[1]);
    // Make a request for a user with a given ID
    axios.post('https://089oiw4mt2.execute-api.ap-northeast-1.amazonaws.com/api/vision', {
        content: canvas.toDataURL('image/jpeg').split(',')[1]
      })
      .then(function (response) {
          console.log(response);
      });
}

setInterval("capture()", 10000);
