/************(function ($, window, Drupal, drupalSettings) {

  'use strict';

  /**
   * Redirect to the selected show's blog listing page.
   *
   * @type {{attach: Function}}
   */
/************  Drupal.behaviors.reddrock = {
    attach: function(context, settings) {
      var mySound = document.createElement('audio');
      mySound.setAttribute('src', 'http://dev.reddrockmusic.com/sites/default/files/2018-02/drumtakes%201-Audio.wav');

      //play the sound when the visitor moves the mouse over
      //a menu item. 
      $('.menu--account > li').mouseover(function() {
        mySound.play();
      });
    }
  }
})(jQuery, this, Drupal, drupalSettings);