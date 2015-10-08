Template.imageTemplate.helpers({
  onlyOneImage: function(images) {
    return (images.length === 1) ? true : false;
  }
});

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