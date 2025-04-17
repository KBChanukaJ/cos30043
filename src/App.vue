<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">Insight Hire</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Jobs</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/apply">Apply</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/todo">To-Do</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <main class="container mt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>