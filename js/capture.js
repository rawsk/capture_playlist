function capture() {
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    canvas.setAttribute('width', video.clientWidth);                                                                                        
    canvas.setAttribute('height', video.clientHeight);
    canvas.getContext('2d').drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

    // Make a request for a user with a given ID
    var token = getCookieArray(document.cookie)['access_token'];
    axios.post(api_base_url + '/vision', {
        token: token,
        content: canvas.toDataURL('image/jpeg').split(',')[1]
      })
      .then(function (response) {
        console.log(response.data);
      });
}

setInterval("capture()", 10000);
 

function playlist() {
    var token = getCookieArray(document.cookie)['access_token'];
    axios.get(api_base_url + '/playlist?token=' + token)
            .then(function (response) {
                document.getElementById("playlist").src = "https://open.spotify.com/embed/playlist/" + response.data["id"]
            });
}
