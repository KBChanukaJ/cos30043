<template>
  <div class="job-overview-container">
    <div class="overview-content">
      <h2 class="mb-4">Welcome to Insight Hire</h2>
      
      <div class="overview-text">
        <p>Indigt inter connect problems individual with exciting opportunities in the fields of Artificial Intelligence, Data Science, Cybersecurity, and Software Development. Our platform showcases wide-ranging opportunities from top tech companies, software labs, and innovative startups, offering full-time, part-time, and internship positions tailored for emerging talent and experienced professionals alike.</p>
        
        <p>Whether you're a student looking to break into the tech industry, a researcher aiming to apply machine learning in real-world contexts, or a developer seeking your next challenge, Insight Hire helps you find opportunities that match your skills and aspirations. Each job posting includes detailed descriptions, required skills, company background, and application deadlines, so you can make informed decisions about your career!</p>
        
        <p>Our team is dedicated to promoting meaningful employment by highlighting roles that provide mentorship, skill development, and long-term impact. Explore the job list on the left to view details of each opportunity, and start building your future today.</p>
      </div>
      
      <div class="stats-section mt-5">
        <h3 class="mb-4">Current Opportunities</h3>
        
        <div class="stats-grid">
          <div class="stat-card bg-primary text-white">
            <div class="stat-value">{{ totalJobs }}</div>
            <div class="stat-label">Total Jobs Available</div>
          </div>
          
          <div class="stat-card bg-success text-white">
            <div class="stat-value">{{ categoryCounts['AI'] || 0 }}</div>
            <div class="stat-label">AI Positions</div>
          </div>
          
          <div class="stat-card bg-info text-white">
            <div class="stat-value">{{ categoryCounts['Data Science'] || 0 }}</div>
            <div class="stat-label">Data Science</div>
          </div>
          
          <div class="stat-card bg-warning text-dark">
            <div class="stat-value">{{ categoryCounts['Software Development'] || 0 }}</div>
            <div class="stat-label">Web Development</div>
          </div>
          
          <div class="stat-card bg-danger text-white">
            <div class="stat-value">{{ categoryCounts['Cybersecurity'] || 0 }}</div>
            <div class="stat-label">Cybersecurity</div>
          </div>
          
          <div class="stat-card bg-secondary text-white">
            <div class="stat-value">{{ internshipCount }}</div>
            <div class="stat-label">Internships</div>
          </div>
        </div>
      </div>
      
      <div class="featured-jobs mt-5" v-if="featuredJobs.length > 0">
        <h3 class="mb-4">Featured Opportunities</h3>
        <div class="featured-grid">
          <div v-for="job in featuredJobs" :key="job.job_id" class="featured-card">
            <div class="featured-header">
              <h5>{{ job.job_title }}</h5>
              <span class="badge" :class="getCategoryBadgeClass(job.category)">{{ job.category }}</span>
            </div>
            <div class="featured-company">{{ job.company }}</div>
            <div class="featured-location">{{ job.location }}</div>
            <div class="featured-deadline">
              <strong>Apply by:</strong> {{ formatDate(job.application_deadline) }}
            </div>
            <router-link 
              :to="'/job/' + job.job_id" 
              class="btn btn-sm btn-outline-primary mt-2"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobs from '@/data/jobs.js';

export default {
  name: 'JobOverview',
  data() {
    return {
      jobs: jobs
    };
  },
  computed: {
    totalJobs() {
      return this.jobs.length;
    },
    categoryCounts() {
      return this.jobs.reduce((acc, job) => {
        acc[job.category] = (acc[job.category] || 0) + 1;
        return acc;
      }, {});
    },
    internshipCount() {
      return this.jobs.filter(job => 
        job.employment_type.toLowerCase().includes('internship')
      ).length;
    },
    featuredJobs() {
      // Get 3 random jobs to feature
      const shuffled = [...this.jobs].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    }
  },
  methods: {
    getCategoryBadgeClass(category) {
      const classes = {
        'AI': 'bg-primary',
        'Data Science': 'bg-success',
        'Software Development': 'bg-info',
        'DevOps': 'bg-warning text-dark',
        'Cybersecurity': 'bg-danger'
      };
      return classes[category] || 'bg-secondary';
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.job-overview-container {
  padding: 20px;
}

.overview-content {
  max-width: 1000px;
  margin: 0 auto;
}

.overview-text {
  line-height: 1.7;
  font-size: 1.05rem;
}

.overview-text p {
  margin-bottom: 1.2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.stat-card {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.featured-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-top: 4px solid var(--bs-primary);
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.featured-header h5 {
  margin-right: 10px;
  margin-bottom: 0;
}

.featured-company {
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
}

.featured-location {
  color: #666;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.featured-deadline {
  font-size: 0.9rem;
  color: #d9534f;
  margin-bottom: 10px;
}

.badge {
  font-size: 0.75rem;
  padding: 0.35em 0.65em;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .overview-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>