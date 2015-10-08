Template.projectCard.helpers({
  imageUrl: function(project) {
    let placeholder = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=300';

    if(!project.cardImage || !project.cardImage.url) {
      return placeholder;
    }

    return project.cardImage.url;
  }
});
