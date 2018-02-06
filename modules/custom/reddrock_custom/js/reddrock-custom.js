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
      hoverSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Futuristic_Drone.mp3');
      hoverSound.setAttribute('id', 'hoversound');
      hoverSound.volume = 0.2;
      //leadlick
      var leadlickSound = document.createElement('audio');
      leadlickSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Lead_Lick.mp3');
      leadlickSound.setAttribute('class', 'logosound');
      leadlickSound.volume = 0.2;
      //heavyriff
      var riffSound = document.createElement('audio');
      riffSound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Heavy_Riff.mp3');
      riffSound.setAttribute('class', 'logosound');
      riffSound.volume = 0.2;
      //drum1
      var drum1Sound = document.createElement('audio');
      drum1Sound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Drum_Take_04.mp3');
      drum1Sound.setAttribute('class', 'logosound');
      drum1Sound.volume = 0.2;
      //drum2
      var drum2Sound = document.createElement('audio');
      drum2Sound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Drum_Take_06.mp3');
      drum2Sound.setAttribute('class', 'logosound');
      drum2Sound.volume = 0.2;
      //woo1
      var woo1Sound = document.createElement('audio');
      woo1Sound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Diamond_Dave_Woo_01.mp3');
      woo1Sound.setAttribute('class', 'logosound');
      woo1Sound.volume = 0.2;
      //woo2
      var woo2Sound = document.createElement('audio');
      woo2Sound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Diamond_Dave_Woo_02.mp3');
      woo2Sound.setAttribute('class', 'logosound');
      woo2Sound.volume = 0.2;

      var random = Math.floor(Math.random()*10);
      //play hover sound on mouse over main menu items.
      $('.menu--account > li').mouseenter(function() {
        hoverSound.play();
      });
      //play click sound on click
      //$('a').click(function() {
      //  clickSound.play();
      //});
      $('.logo').click(function() {
        $(".logosound").eq(random).play();
      });

    }
  }
})(jQuery, this, Drupal, drupalSettings);

