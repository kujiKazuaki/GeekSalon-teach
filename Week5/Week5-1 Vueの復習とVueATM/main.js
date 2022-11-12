Vue.createApp({
  data() {
    return {
      partOne: {
        count: 0,
      },
      partTwo: {
        apple: 0,
        orange: 0,
        results: 0,
      },
      partThree: {
        methodsCount: 0,
        number: 0,
        defaultComputedNumber: 0,
      },
      nyuryokugaku: 0,
      zandaka: 0,
      logs: [],
    };
  },
  computed: {
    computedResult() {
      return this.partTwo.apple + this.partTwo.orange;
    },
    partThreeComputed() {
      let computedNumber = this.partThree.defaultComputedNumber;
      if (computedNumber % 3 === 0 && computedNumber !== 0) {
        return computedNumber + "!!!!!!";
      } else {
        return computedNumber;
      }
    },
    hasZandaka() {
      return this.zandaka >= this.nyuryokugaku;
    },
    validateNyuryokugaku() {
      return this.nyuryokugaku > 0;
    },
  },
  methods: {
    partOneCountupBtn() {
      this.partOne.count += 1;
    },
    computedBtn() {
      this.computedResult = "かきくけこ";
    },
    buyAppleBtn() {
      this.partTwo.apple += 1;
    },
    buyOrangeBtn() {
      this.partTwo.orange += 1;
    },
    computedBtn() {
      const result = this.partTwo.apple + this.partTwo.orange;
      this.partTwo.results = result;
    },
    partThreeCounterApp() {
      if (
        this.partThree.methodsCount % 3 === 2 &&
        this.partThree.methodsCount !== 0
      ) {
        this.partThree.number += 1;
        this.partThree.methodsCount = this.partThree.number + "!!!!!!";
      } else {
        this.partThree.number += 1;
        this.partThree.methodsCount = this.partThree.number;
      }
    },
    computedBtn() {
      this.partThree.defaultComputedNumber += 1;
    },
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku);
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: Number(this.nyuryokugaku),
      });
    },
    shukin: function () {
      this.zandaka -= Number(this.nyuryokugaku);
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: Number(this.nyuryokugaku),
      });
    },
  },
}).mount("#app");
