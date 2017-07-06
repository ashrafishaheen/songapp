     function toggleSong() {
            var song = document.querySelector('audio');
            if (song.paused == true) {
                console.log('Playing');
                $('.play-icon').removeClass('fa-play').addClass('fa-pause'); //Icon will changed to pause icon
                song.play(); //play pause function 
            } else {
                console.log('Pausing');
                $('.play-icon').removeClass('fa-pause').addClass('fa-play'); //icon will be changed to play icon
                song.pause(); //play pause function
            }
        }

        function fancyTimeFormat(time) //converting time into minutes and seconds. like "3:45"
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
        $('.welcome-screen button').on('click', function() {
            var name = $('#name-input').val();
            if (name.length > 2) {
                var message = "Welcome, " + name;
                $('.main .user-name').text(message);
                $('.welcome-screen').addClass('hidden');
                $('.main').removeClass('hidden');
            } else {
                $('#name-input').addClass('error');
            }
        });
        $('.play-icon').on('click', function() {
            toggleSong(); //when we click on play-icon toggleSong function will be callled and perform play and pause function.
        });
        $('body').on('keypress', function(event) {
            if (event.keyCode == 32) {
                toggleSong(); //it will call toggleSong Function when we press spacebar(code=32) to play and pause the song.
            }
        });
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
        

        

        var songList = ['Badri Ki Dulhania (Title Track)', 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song']; //array list for song list name.
        var fileNames = ['song1.mp3', 'song2.mp3', 'song3.mp3', 'song4.mp3'];
         var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
        function addSongNameClickEvent(songName, position) {
            var id = '#song' + position;
            $(id).click(function() {
                var audio = document.querySelector('audio');
                var currentSong = audio.src;
                if (currentSong.search(songName) != -1) {
                    toggleSong();
                } else {
                    audio.src = songName;
                    toggleSong();
                }
            });
        }
        /*for (var i = 0; i < fileNames.length; i++) {
            addSongNameClickEvent(fileNames[i], i + 1)
        } */

         for(var i =0; i < songList.length;i++) {
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(songList[i]);
        song.find('.song-artist').text(artistList[i]);
    }

        function updateCurrentTime() {
            var song = document.querySelector('audio');
            //console.log(song.currentTime);
            //console.log(song.duration);
            var currentTime = Math.floor(song.currentTime);
            currentTime = fancyTimeFormat(currentTime);
            var duration = Math.floor(song.duration);
            duration = fancyTimeFormat(duration);
            $('.time-elapsed').text(currentTime);
            $('.song-duration').text(duration);
        }
window.onload = function() { //displaying duration of song and currenttime of song.
            setInterval(function() {
                updateCurrentTime();
            }, 1000);
        }