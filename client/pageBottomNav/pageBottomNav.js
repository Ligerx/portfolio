Template.pageBottomNav.onRendered(function() {
  // TODO move out of this template
  let scrollTop = function() {
    let completeCalled = false;

    /**
     * http://stackoverflow.com/questions/4034659/is-it-possible-to-animate-scrolltop-with-jquery
     *
     * Need to target both html and body to work on all browsers
     * Only 1 works, depends which browser supports
     */
    $('html, body').animate(
      { scrollTop: 0 },
      {
        duration: 'slow', // slower, slightly smoother movement

        // This function prevents function from being called twice on both html and body
        complete: function() {
          if(!completeCalled) {
            completeCalled = true;
          }
        }
      }
    );
  }

  this.$('.ui.button.scrollTop').on('click.scrollTop', scrollTop);
});

Template.pageBottomNav.onDestroyed(function (){
  // unbind the scrollTop event from before
  this.$('.ui.button.scrollTop').off('click.scrollTop');
});
