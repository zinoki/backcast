var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.collection = new Videos(window.exampleVideoData);
    this.mainVideo = new VideoPlayerView();
    this.search = new SearchView();
    // this.listView = new VideoListView({el: '.video-list', collection: this.collection});
    
    
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
