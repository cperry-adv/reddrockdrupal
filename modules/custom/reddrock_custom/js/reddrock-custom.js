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
      //play the sound when the visitor moves the mouse over
      //a menu item. 
      $('.menu--account > li').mouseenter(function() {
        hoverSound.play();
      });
      $('a').click(function() {
        clickSound.play();
      });
    }
  }
})(jQuery, this, Drupal, drupalSettings);