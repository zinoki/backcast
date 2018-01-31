var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.process();
    // console.log(this.el);
    // console.log('models', this.attributes);
    // this.listenTo(this.model.title, 'click', this.model.select);

  },

  // calling global video example data, but in future will 
  // need to dynamically grab real data from somewhere???
  process: function() {
    var videoData = this.model;
  
    var url = videoData.attributes.snippet.thumbnails.default.url;
    var description = videoData.attributes.snippet.description;
    var title = videoData.attributes.snippet.title;
    var videoDiv = `<div class="video-list-entry media">
            <div class="media-left">
              <img class="media-object" src=${url} />
            </div>
            <div class="media-body">
              <div class="video-list-entry-title">${title}</div>
              <div class="video-list-entry-detail">${description}</div>
            </div>
          </div>`;

    this.render();
    
  },

  render: function() {
    // console.log(this.model.attributes);
    // this.$el.html(this.template(this.model.attributes));
    // this.$el.append(videoDiv);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html' )

});
