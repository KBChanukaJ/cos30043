<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <router-link class="navbar-brand" to="/">Insight Hire</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
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
      <!-- For Job routes (Home and JobDetail) -->
      <div v-if="$route.name === 'Home' || $route.name === 'JobDetail'" class="row">
        <div class="col-md-3">
          <router-view name="sidebar"></router-view>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
      
      <!-- For other routes (Apply, ToDo) -->
      <router-view v-else></router-view>
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