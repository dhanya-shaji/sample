

$(document).ready(function() {
    $.get(
        "https://rallycoding.herokuapp.com/api/music_albums",
        function(response) {
            var html="";
            response.map(function(obj){
                html=html+'<div class="card" style="width: 18rem;"><img src='+obj.thumbnail_image+' class="card-img-top" alt="...">';
                html=html+'<div class="card-body"><h5 class="card-title">'+obj.title+'</h5><p class="card-text">'+obj.artist+'</p></div></div>';
                  
                
             
                console.log(obj.title);
            })
            $('#maindiv').html(html);
        }
    )
})