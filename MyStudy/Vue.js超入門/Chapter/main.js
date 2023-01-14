const appdata = {
  data() {
    return {
      message: "※コンポーネントを表示する",
      name: "no-name",
    };
  },
};

let app = Vue.createApp(appdata);

app.component("hello", {
  props: ["name"],
  template: `<p>Hello, {{name}}! </p>`,
});

app.mount("#app");
