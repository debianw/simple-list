(function () {

  Polymer('simple-list', {

    /**
     *
     */

    initialize: function () {
      var $viewport = this.$.viewport;

      if (!this.data || !this.template) {
        return;
      }

      if (!this.scroll) {
        this.scroll = new IScroll($viewport, {
          probeType: 3,
          mouseWheel: true,
          scrollbars: true
          //bounceEasing: 'elastic', 
          //bounceTime: 300
        });

        this.scroll.on('scroll', this._boundScrollHandler);
      }

      this._target = this.$.scroll;

      this.initializeViewport();
      this.initalizeData();
      this.onMutation(this, this.initializeItems);
    },

    /**
     *
     */

    scrollHandler: function () {
      this._scrollTop = Math.abs(this.scroll.y);
      this.refresh(false);
    },

    /**
     *
     */

    initializeViewport: function () {
      this._target.style.height = this.height * this.data.length + 'px';
      this._visibleCount = Math.ceil(this.$.viewport.offsetHeight / this.height);
      this._physicalCount = Math.min(this._visibleCount + this.extraItems, this.data.length);
      this._physicalHeight = this.height * this._physicalCount;

      this.scroll.refresh(); // refresh iscroll
    },

    /**
     *
     */

    pushItemData: function (source, dest) {
      this.super(arguments);

      dest._ = source;
    },

    /**
     *
     */
     
    scrollToItem: function (index) {
      this.scroll.scrollTo(0, -index * this.height);
      this.scrollHandler();
    }   

  });

})();
