<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>


<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.button button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
