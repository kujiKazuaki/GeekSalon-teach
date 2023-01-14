const list = ["one", "two", "three"];
const appData = {
  data() {
    return {
      message: "count",
      count: 0,
      list: list,
      display: `<nav>
          <li>${list[0]}</li>
          <li>${list[1]}</li>
          <li>${list[2]}</li>
          </nav>`,
    };
  },
  methods: {
    countUp() {
      this.count++;
    },
  },
};
Vue.createApp(appData).mount(".app");
