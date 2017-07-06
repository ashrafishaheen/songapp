$('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {        //input should be more than 2 char.
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');   
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
//  objects starts from here
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3'
    }]
    //objects ends here
function fancyTimeFormat(time) // it converts seconds into hours and minutes.
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
    function toggleSong() {
var song = document.querySelector('audio'); 
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause'); //if song is playing remove play icon and add pause icon.
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play'); //if song is paused remove pause icon and add play icon.
song.pause();
}
} 

    $('.play-icon').on('click', function() { //call toggleSong Function when play icon is clicked
        toggleSong();
    });
    $('body').on('keypress', function(event) { //when we click spacebar on body toggleSong function will be called.
                if (event.keyCode == 32) {
                	toggleSong();
                        console.log('Playing');
                       
                    } else {
                        console.log('Pausing');
                        toggleSong();
                    }
                }
            );
    function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime); //current time of song is stored in variable currentTime
    currentTime = fancyTimeFormat(currentTime); //current time of song will be converted into minutes which is fancyTimeFormat will be called
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration) //duration will be converted into minutes.
    $('.time-elapsed').text(currentTime); //will show how much song has been played
    $('.song-duration').text(duration);
}
        
            
            
            
            function addSongNameClickEvent(songName,position) {
                var id = '#song' + position;
            $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src; //src of audio is stored in var currentSong
            if(currentSong.search(songName) != -1)  //will search for songName attr and call toggleSong function.
            {
            toggleSong();
            }
            else {
            audio.src = songName;
            toggleSong();
            }
            });
            }
             
                      
            window.onload = function() {
               
            updateCurrentTime(); 
            setInterval(function() {
            updateCurrentTime();
            },1000);
           
                

                 
                 for(var i =0; i < songs.length;i++) { 
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj.fileName,i+1);
    }
    
                }

      
