(function () {

  Polymer({

    //
    created: function () {
      this._boundOnActivated = this.onActivate.bind(this);
    },

    //
    ready: function () {
      this.data = this.loadData();

      this.$.list.addEventListener('core-activate', this._boundOnActivated);
      window.list = this.$.list;
    },

    //
    loadData: function () {
      var data = [];

      for (var i = 0, len = 500; i < len; i++) {
        data.push({
          id: i,
          name: 'Item: '+i,
          description: 'description goes here ...'+i
        });
      }

      return data;
    },

    //
    onActivate: function (e) {
      var obj = e.detail.data;

      console.log('activated: ', obj);
    }

  });

})();