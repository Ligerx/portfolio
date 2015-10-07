Template.imageGallery.onRendered(function() {
  this.$(".owl-carousel").owlCarousel({
      items: 1,
      center: true,
      nav: true,
  });
});

Template.imageGallery.onDestroyed(function() {
  this.$(".owl-carousel").data('owlCarousel').destroy();
});
