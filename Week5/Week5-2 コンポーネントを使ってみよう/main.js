Vue.createApp({
  data() {
    return {
      icon: "🧨",
    };
  },
  methods: {
    fire() {
      this.icon = "🔥";
    },
    bomb() {
      this.icon = "🧨";
    },
  },
}).mount("#app");
