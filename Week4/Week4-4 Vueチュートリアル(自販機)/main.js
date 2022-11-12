Vue.createApp({
  data() {
    return {
      drink: {
        name: "お茶", // 名前
        price: 120, // 値段
        stock: 3,
        buyTeaDisabled: false,
      },
      items: [],
      kattaKazu: 0,
    };
  },
  methods: {
    buyTea() {
      if (this.drink.stock > 0) {
        this.drink.stock -= 1;
        this.kattaKazu += 1;
        this.items.push({ text: "☕" });

        if (this.drink.stock === 0) {
          this.drink.buyTeaDisabled = true;
        }
      }
    },
  },
}).mount("#app");
