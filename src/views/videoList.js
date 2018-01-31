var VideoListView = Backbone.View.extend({
  el: '.list',
  initialize: function() {
    // this.render();
    this.listenTo(this.collection, 'sync', this.render);
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < this.collection.models.length; i++) {
      this.listView = new VideoListEntryView({model: this.collection.models[i]
      });
    }
    // events: this.listenTo(view.$('video-list-entry-title'), 'click', this.select);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
