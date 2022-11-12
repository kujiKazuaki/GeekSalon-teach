Vue.createApp({
  data() {
    return {
      inputMoney: 0,
      displayMoney: 0,
      items: [],
    };
  },
  methods: {
    addMoneyBtn() {
      this.displayMoney += this.inputMoney;

      const now = new Date();
      this.items.push({
        date: now,
        handle: "入金",
        money: this.inputMoney,
      });
      this.inputMoney = 0;
    },
    outMoneyBtn() {
      if (this.displayMoney > this.inputMoney) {
        this.displayMoney -= this.inputMoney;

        const now = new Date();
        this.items.push({
          date: now,
          handle: "出金",
          money: this.inputMoney,
        });
        this.inputMoney = 0;
      } else {
        alert("そんなにおろせないよ！");
      }
    },
  },
  //   computed: {
  //     finalJudge() {
  //       if (this.displayMoney > this.inputMoney) {
  //         this.disabled = true;
  //         return this.disabled;
  //       } else {
  //         return this.disabled;
  //       }
  //     },
  //   },
}).mount("#app");
