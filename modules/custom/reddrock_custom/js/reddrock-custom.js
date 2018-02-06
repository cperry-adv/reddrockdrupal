(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Redirect to the selected show's blog listing page.
   *
   * @type {{attach: Function}}
   */
  Drupal.behaviors.reddrockcustom = {
    attach: function(context, settings) {
      var mySound = document.createElement('audio');
      mySound.setAttribute(array('src' => 'http://dev.reddrockmusic.com/sites/default/files/website_sfx/2018_02_05 HEADER - Futuristic_Drone.mp3', 'id' => 'fuckyeah'));
      mySound.volume = 0.2;
      //play the sound when the visitor moves the mouse over
      //a menu item. 
      $('.menu--account > li').mouseenter(function() {
        mySound.play();
      });
    }
  }
})(jQuery, this, Drupal, drupalSettings);