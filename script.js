new Vue({
  el: '#appVue',
  data: {
    lists: [],
    newKeep: ''
  },
  methods: {
    addKeep: function() {
      this.lists.push({keep: this.newKeep, completed: false});
      this.newKeep = '';
    }
  }
});