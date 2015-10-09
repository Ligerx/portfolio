Template.imageTemplate.helpers({
  noImages: function(images) {
    if(!images || images.length === 0) {
      return true;
    }

    return false;
  },

  onlyOneImage: function(images) {
    return (images.length === 1) ? true : false;
  }
});

Template.imageTemplate.onRendered(function() {
  this.$('a.fancybox').fancybox({ live: false });
});

Template.imageGallery.onDestroyed(function() {
  this.$('a.fancybox').off('click.fb-start');
});




Template.imageGallery.onRendered(function() {
  this.$(".owl-carousel").owlCarousel({
      items: 1,
      center: true,
      nav: true,
  });
});

Template.imageGallery.onDestroyed(function() {
  this.$(".owl-carousel").trigger('destroy.owl.carousel');
});
