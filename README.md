# 👹 Vue Monster Slayer Game ⚔️

A simple, yet engaging, turn-based browser game built with Vue.js 3. Test your might against the monster!

[![Live Demo](https://img.shields.io/badge/Live_Demo-Play_Now!-brightgreen?style=for-the-badge)](https://rafael-a-g-n.github.io/vue-monster-slayer/)

## ✨ Features

- **Turn-Based Combat:** Engage in classic RPG-style combat.
- **Attack:** Deal a moderate amount of damage to the monster.
- **Special Attack:** Unleash a powerful attack (available every 3 rounds).
- **Heal:** Restore some of your health points.
- **Surrender:** Concede the fight if things get too tough.
- **Dynamic Health Bars:** Visually track player and monster health.
- **Battle Log:** Keep track of the actions taken during the fight.
- **Win/Loss/Draw Conditions:** Clear outcomes for each game.
- **New Game:** Easily start a fresh battle.

## 🛠️ Technologies Used

- **Vue.js 3 (CDN):** Core framework for reactivity and UI rendering.
- **JavaScript (ES6+):** Game logic and interactions.
- **HTML5:** Structure of the game interface.
- **CSS3:** Styling for the visual presentation.

## 💡 Key Vue.js Concepts Demonstrated

This project showcases the practical application of several core Vue.js features:

- **Data Management:** Using the `data()` option to manage reactive game state (`playerHealth`, `monsterHealth`, `currentRound`, etc.).
- **Methods:** Defining game actions (`attackMonster`, `healPlayer`, `specialAttackMonster`, etc.) within the `methods` option.
- **Computed Properties:** Calculating derived state dynamically (e.g., `monsterBarStyles`, `playerBarStyles`, `mayUseSpecialAttack`).
- **Watchers:** Reacting to state changes to trigger side effects (e.g., determining the `winner` when health changes).
- **Conditional Rendering:** Using `v-if` to show/hide elements based on game state (e.g., game over screen, controls).
- **List Rendering:** Using `v-for` to display the dynamic battle log (`logMessages`).
- **Attribute Binding:** Dynamically binding styles (`:style`) and attributes (`:disabled`).
- **Event Handling:** Using `@click` to trigger methods on user interaction.

## 🚀 How to Run Locally

1.  Clone this repository or download the files.
2.  Open the `index.html` file directly in your web browser.

---

## 👨‍💻 Author

**Rafael Nogueira**

- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Rafael_Nogueira-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/ragn/)
