var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.videos = new Videos(fakeVideoData);
    this.mainVideo = new VideoPlayerView(this.videos);
    this.entryView = new VideoListEntryView();
    this.listView = new VideoListView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
