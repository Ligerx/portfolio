Template.singleProject.helpers({
  project: function() {
    // the '/:projectUrl' param
    let param = FlowRouter.getParam('projectUrl');

    // make sure to findOne so {{#with }} works
    return Projects.findOne({ url: param }, {
      reactive: false
    });
  },

  sections: function() {
    // the '/:projectUrl' param
    let param = FlowRouter.getParam('projectUrl');

    // make sure to findOne so {{#with }} works
    let project = Projects.findOne({ url: param });

    if(!project) { return []; }

    let sectionIds = project.sections || [];
    return Sections.find({ _id: { $in: sectionIds } }, {
      sort: { priority: -1 },
      reactive: false
  });
  }
});

Template.singleProject.onCreated(function() {
  //// TODO: currently copy-pasta from above
  ////       figure out how to make it more DRY

  let param = FlowRouter.getParam('projectUrl');
  let project = Projects.findOne({ url: param }, {
    reactive: false
  });

  DocHead.setTitle(project.title + ' | Alex Wang');
});
