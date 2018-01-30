var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
    this.mainVideo = new VideoPlayerView();
    this.entryView = new VideoListEntryView();
    this.listView = new VideoListView(window.exampleVideoData);
    this.search = new SearchView();
    
  },


  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
