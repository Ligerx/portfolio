Template.singleProject.helpers({
  project: function() {
    let param = FlowRouter.getParam('projectUrl'); // the /:projectUrl param
    return Projects.findOne({ url: param });
  }
});
