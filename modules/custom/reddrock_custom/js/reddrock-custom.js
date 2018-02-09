(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Redirect to the selected show's blog listing page.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.reddrockcustom = {
    attach: function(context, settings) {
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
      logoSound.setAttribute('src', logoArray[Math.floor(Math.random() * logoArray.length)]);
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

      //page load sound for about page
      var pathz = window.location.pathname;
      if (pathz == '/about') {
        pageturnSound.play();
        //hover for about text
        $('.content').mouseenter(function() {

        });
      }
     

      //play hover sound on mouse over main menu items.
      $('.menu--account > li').mouseenter(function() {
        hoverSound.play();
      });
      $('.menu--account > li').mouseleave(function() {
        hoverSound.pause();
      });
      //play click sound on click
      $('.slider').click(function() {
        clickSound.play();
      });
      //logo
      $('.logo').mouseenter(function() {
        logoSound.setAttribute('src', logoArray[Math.floor(Math.random() * logoArray.length)]);
        logoSound.play();
      });
      $('.logo').mouseleave(function() {
        logoSound.pause();
      });
      //music - the way you see it
      $('.maintheme').mouseenter(function() {
        mainthemeSound.play();
      });
      $('.maintheme').mouseleave(function() {
        mainthemeSound.pause();
      });
      //social media icons
      $('.fblink').click(function() {
        facebookSound.play();
      });
      $('.twlink').click(function() {
        twitterSound.play();
      });
      $('.iglink').click(function() {
        instagramSound.play();
      });
    }
  }
})(jQuery, this, Drupal, drupalSettings);

