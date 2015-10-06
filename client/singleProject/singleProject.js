Template.singleProject.helpers({
  project: function() {
    // the '/:projectUrl' param
    let param = FlowRouter.getParam('projectUrl');

    // make sure to findOne so {{#with }} works
    return Projects.findOne({ url: param });
  }
});
