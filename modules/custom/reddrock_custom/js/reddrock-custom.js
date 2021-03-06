(function ($, window, Drupal, drupalSettings) {

  'use strict';
  
  /**
   * Redirect to the selected show's blog listing page.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.reddrockcustom = {
    attach: function(context, settings) {
      

      //detect safari users
      var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
      var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
      var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
      var is_safari = navigator.userAgent.indexOf("Safari") > -1;
      var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
      if ((is_chrome)&&(is_safari)) {is_safari=false;}
      if ((is_chrome)&&(is_opera)) {is_chrome=false;}
      if (is_safari) {
        var safarimessage = "<div class='safarimessage'>We've noticed you are using Safari.  To experience site audio please open Safari Preferences -> Websites Tab and enable AutoPlay for Reddrockmusic.com</div>";
        $('.tooltiptext').prepend(safarimessage);
      }


      //set up some variables we need
      var alreadySubmitted = 0;
      var currentQuery = getUrlVars();
      var pathz = window.location.pathname;
      var audioOn = 0;
      var initialLoad = true;

      //save audio switch state in contact form
      $('#edit-field-audio-switch-state-0-value').val(currentQuery);


      //click
      var clickSound = document.createElement('audio');
      clickSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 OVERALL - Main_Click.mp3');
      clickSound.setAttribute('id', 'clicksound');
      clickSound.volume = 0.2;
      //drone
      var hoverSound = document.createElement('audio');
      hoverSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_07 HEADER - Futuristic_Drone_02.mp3');
      hoverSound.setAttribute('id', 'hoversound');
      hoverSound.loop = true;
      hoverSound.volume = 0.2;
      //logo sounds
      var logoArray = ['http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Lead_Lick.mp3','http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Heavy_Riff.mp3','http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Drum_Take_04.mp3','http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Drum_Take_06.mp3','http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Diamond_Dave_Woo_01.mp3','http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Diamond_Dave_Woo_02.mp3'];
      var logoSound = document.createElement('audio');
      logoSound.setAttribute('id', 'logosound');
      logoSound.volume = 0.2;
      //music - the way you see it sounds
      var mainthemeSound = document.createElement('audio');
      mainthemeSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HOME - Music_The_Way_You_See_It_01.mp3');
      mainthemeSound.setAttribute('id', 'mainthemesound');
      mainthemeSound.volume = 0.2;
      //twitter
      var twitterSound = document.createElement('audio');
      twitterSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 FOOTER - Twitter_Tweet.mp3');
      twitterSound.setAttribute('id', 'twittersound');
      twitterSound.volume = 0.2;
      //facebook
      var facebookSound = document.createElement('audio');
      facebookSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 FOOTER - Facebook_Chatter.mp3');
      facebookSound.setAttribute('id', 'facebooksound');
      facebookSound.volume = 0.2;
      //instagram
      var instagramSound = document.createElement('audio');
      instagramSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 FOOTER - Instagram_Camera_Shutter.mp3');
      instagramSound.setAttribute('id', 'instagramsound');
      instagramSound.volume = 0.2;
      //pageturn
      var pageturnSound = document.createElement('audio');
      pageturnSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 ABOUT - Page_Turn.mp3');
      pageturnSound.setAttribute('id', 'pageturnsound');
      pageturnSound.volume = 0.2;
      //scribble
      var scribbleSound = document.createElement('audio');
      scribbleSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 ABOUT - Scribble.mp3');
      scribbleSound.setAttribute('id', 'scribblesound');
      scribbleSound.volume = 0.2;
      //contact arrival
      var arrivalSound = document.createElement('audio');
      arrivalSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 CONTACT - Typewriter_Finish_Line_wBell.mp3');
      arrivalSound.setAttribute('id', 'arrivalsound');
      arrivalSound.volume = 0.2;
      //contact keystrokes
      var keystrokeSound = document.createElement('audio');
      keystrokeSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/keystroke.wav');
      keystrokeSound.setAttribute('id', 'keystrokesound');
      keystrokeSound.volume = 0.2;
      //green bar
      var greenbarSound = document.createElement('audio');
      greenbarSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 CONTACT - Happy_Celeste.mp3');
      greenbarSound.setAttribute('id', 'greenbarsound');
      greenbarSound.volume = 0.2;
      //red bar
      var redbarSound = document.createElement('audio');
      redbarSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 LOGIN - Invalid_Login.mp3');
      redbarSound.setAttribute('id', 'redbarsound');
      redbarSound.volume = 0.2;
      //listen page arrival
      var listenarrivalSound = document.createElement('audio');
      listenarrivalSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 LISTEN - Dreamy_Entrance.mp3');
      listenarrivalSound.setAttribute('id', 'listenarrivalsound');
      listenarrivalSound.volume = 0.2;

      //set correct audio switch state on page load - THIS WORKS
      if (currentQuery['playAudio'] == 'yes') {
        $('#audioswitch').prop('checked', true);
        audioOn = 1;
        $('.menu--account li a').once().each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href + '?playAudio=yes');
            
          });
        $('a.logo').once().each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href + '?playAudio=yes');
          });
      }
      else {
        $('#audioswitch').prop('checked', false);
        audioOn = 0;
        $('.menu--account li a').once().each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href + '?playAudio=yes');
            $(this).attr("href", href.split('?')[0]);
          }); 
        $('a.logo').once().each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href.split('?')[0]);
          });
      }

      

      //logo
      $('a.logo > img').once().on({
        mouseover: function() {
            event.preventDefault();
            if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
          logoSound.setAttribute('src', logoArray[Math.floor(Math.random() * logoArray.length)]);
          logoSound.play();
           console.log(logoSound);
        }
        },
        mouseout: function() {
            event.preventDefault();
            if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
          logoSound.pause();
       }
        }
      });

      //play hover sound on mouse over main menu items.
      $('.menu--account > li').once().on({
        mouseover: function() {
          event.preventDefault();
          if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
            hoverSound.play();
          }
        },
        mouseout: function() {
          event.preventDefault();
          if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
            hoverSound.pause();
          }
        }
      });

      //add click sound on preview button click
      $('#edit-preview').once().on('click', function(e) {
        e.preventDefault();
        if (audioOn == 1) {
          clickSound.play();
        }
      });

      $('.filter-tab a').once().on('click', function(e) {
        e.preventDefault();
        
        alreadySubmitted = 1;
        // Get ID of clicked item
        var id = $(e.target).attr('id'); 
        
        // Set the new value in the SELECT element
        var filter = $('select[name="tid"]');  
        filter.val(id); 

        // Unset and then set the active class
        $('.filter-tab a').removeClass('active');
        $(e.target).addClass('active');

        // Do it! Trigger the select box
        //filter.trigger('change');
        $('select[name="tid"]').trigger('change');
        $('.form-submit').trigger('click');

        //fix player when changing categories
        $('.audiofield-wavesurfer.playing').each(function() {
          $('.audiofield-wavesurfer.playing .playpause').trigger('click');
        });
        

      });


      
      
      
      //music - the way you see it
      $('.maintheme').mouseenter(function() {
        if (audioOn == 1) {
          mainthemeSound.play();
        }
      });
      $('.maintheme').mouseleave(function() {
        if (audioOn == 1) {
          mainthemeSound.pause();
        }
      });
      


      //red bar sad sound
      $('.alert-danger').once().each(function() {
        if (audioOn == 1) {
          redbarSound.play();
        }
      });

      //green bar happy sound
      $('.alert-success').once().each(function() {
        
          greenbarSound.play();
        
      });

      //contact page arrival
      if (pathz == '/contact') {
        if (audioOn == 1) {
          arrivalSound.play();
        }
        //contact keystrokes
        document.onkeydown = function (e) {
          if (audioOn == 1) {
            keystrokeSound.play();
          }
        }
      }

      //page load sound for about page
      if (pathz == '/about') {
        if (audioOn == 1) {
          pageturnSound.play();
        }
        //hover for about text
        $('.content').mouseenter(function() {
          if (audioOn == 1) {
            scribbleSound.play();
          }
        });
        $('.content').mouseleave(function() {
          if (audioOn == 1) {
            scribbleSound.pause();
          }
        });
      }

      

      //audio switch functionality - THIS WORKS
      $('.slider').once().click(function() {
        //play clicksound on click
        if (pathz != '/music' && pathz != '/sounds') {
          clickSound.play();
        }
        
        var currentQuery = getUrlVars();

        if (currentQuery['playAudio'] == 'yes') {
          //update main menu links depending on audio switch state
          $('.menu--account li a').each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href.split('?')[0]);
          });
          $('a.logo').each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href.split('?')[0]);
          });
          updateqs('playAudio','no');
          audioOn = 0;
        }
        else {
          //update main menu links depending on audio switch state
          $('.menu--account li a').each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href + '?playAudio=yes');
          }); 
          $('a.logo').each(function() {
            var href = $(this).attr("href");
            $(this).attr("href", href + '?playAudio=yes');
          });
          updateqs('playAudio','yes');
          audioOn = 1;
        }
      });

      //social media icons
      $('.fblink').click(function() {
        if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
          facebookSound.play();
        }
      });
      $('.twlink').click(function() {
        if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
          twitterSound.play();
        }
      });
      $('.iglink').click(function() {
        if (audioOn == 1 && pathz != '/music' && pathz != '/sounds') {
          instagramSound.play();
        }
      });
      


      

  //get the current query string values
      function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
      }

  //set correct audio switch state in query string
  function updateqs(param,value) {
    var currentPath = window.location; 
    var url = currentPath;
    if (value == 'yes') {
      var new_url = url + '?' + param + '=' + value;
      history.pushState(null, null, new_url);  
    }
    else {
      history.replaceState(null, null, window.location.href.split('?')[0]);
    }
  }

  //update on ajax refresh
  $(document).ajaxComplete(function(event, xhr, settings) {
        initialLoad = false;
        var filter_id = $('.views-exposed-form select[name="tid"]').find(":selected").val();

        $('.filter-tab a').removeClass('active');
        $('.filter-tab').find('#' + filter_id).addClass('active');

        
  });
      }
  }
})(jQuery, this, Drupal, drupalSettings);

