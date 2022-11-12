Vue.component("hello-vue", {
  template: `
  <div class="human">
  <div class="atama">
    <div v-if="isLaughing">🤣</div>
    <div v-else>
      <slot />
    </div>
  </div>
  <div class="karada" v-on:click="makeLaugh">
    <div>💪👕💪</div>
  </div>
  <div class="ashi">
    <div>🦵🦵</div>
  </div>
</div>`,
  data() {
    return {
      isLaughing: false,
    };
  },
  methods: {
    makeLaugh() {
      this.isLaughing = true;
    },
  },
});

var app = new Vue({
  el: "#app",
});
