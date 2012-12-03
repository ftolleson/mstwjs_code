TimeTravel.Views.TripDetailView = Backbone.View.extend({

  className: 'trip span-20',

  //##render
  render: function() {
    this.basicRender();
    this.hotelRender(this.hotelsView());
    this.extrasRender(this.extrasView());
    this.ordersRender(this.ordersView());
    return this;
  },
  //##render

  basicRender: function() {
    this.$el.html(TimeTravel.template('tripDetailViewTemplate').render(
        this.model.toJSON()));
    this.$el.attr("id", "trip_detail_" + this.model.get("id"));
  },

  hotelsView: function() {
    return new TimeTravel.Views.HotelsView({trip: this.model});
  },

  extrasView: function() {
    return new TimeTravel.Views.ExtrasView({trip: this.model});
  },

  //##orders
  ordersView: function() {
    return new TimeTravel.Views.OrderView({
        model: new TimeTravel.Models.Order({trip: this.model})});
  },

  ordersRender: function(orderView) {
    this.$el.find(".orders").append(orderView.render().el);
  },
  //##orders

  hotelRender: function(hotelsView) {
    this.$el.find(".options").append(hotelsView.render().el);
  },

  extrasRender: function(extrasView) {
    this.$el.find(".options").append(extrasView.render().el)
  }

});
