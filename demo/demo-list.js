(function () {

  Polymer('demo-list', {

    //
    ready: function () {
      this.data = this.loadData();
    },

    //
    loadData: function () {
      var data = [];

      for (var i = 0, len = 1000; i < len; i++) {
        data.push({
          id: i,
          name: 'Item: '+i,
          description: 'description goes here ...'+i
        });
      }

      return data;
    }

  });

})();