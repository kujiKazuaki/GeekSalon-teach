Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    plus1: function () {
      this.number += 1;
    },
  },
  computed: {
    reaction: function () {
      // 3の倍数の時に
      // (これはconsoleしてるけど、画面に表示したい)
      if (this.number % 3 === 0) {
        return this.number + "!!!!!!!";
      } else {
        return this.number;
      }
    },
  },
}).mount("#app");
