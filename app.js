function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomValue(12, 5);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomValue(15, 8);
    },
  },
});

app.mount("#game");
