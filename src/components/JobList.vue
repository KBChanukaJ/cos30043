<template>
  <div class="job-explorer">
    <h2>Job Explorer</h2>
    <div class="job-list">
      <router-link 
        to="/" 
        class="job-link"
        active-class="active"
      >
        Overview
      </router-link>
      <router-link
        v-for="job in jobs"
        :key="job.job_id"
        :to="'/job/' + job.job_id"
        class="job-link"
        active-class="active"
      >
        {{ job.job_id }} - {{ job.job_title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import jobs from '@/data/jobs.js'

export default {
  data() {
    return {
      jobs: jobs
    }
  }
}
</script>

<style scoped>
.job-explorer {
  padding: 1rem;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.job-link {
  padding: 0.5rem;
  border-radius: 4px;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s;
}

.job-link:hover {
  background-color: #e9ecef;
}

.active {
  background-color: #2c3e50;
  color: white;
}
</style>