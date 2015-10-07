Template.projectCard.helpers({
  imageUrl: function(project) {
    let placeholder = 'images/placeholder.png';

    if(!project.cardImage || !project.cardImage.url) {
      return placeholder;
    }

    return project.cardImage.url;
  }
});
