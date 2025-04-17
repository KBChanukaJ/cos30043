<template>
  <div class="job-detail-container">
    <div v-if="job" class="job-card">
      <!-- Job Header Section -->
      <div class="job-header">
        <h2 class="job-title">{{ job.job_title }}</h2>
        <div class="job-meta">
          <span class="badge" :class="categoryBadgeClass">{{ job.category }}</span>
          <span class="company">{{ job.company }}</span>
          <span class="location">{{ job.location }}</span>
        </div>
      </div>

      <!-- Job Details Section -->
      <div class="job-details">
        <div class="detail-row">
          <div class="detail-item">
            <h5>Employment Type</h5>
            <p>{{ job.employment_type }}</p>
          </div>
          <div class="detail-item">
            <h5>Salary Range</h5>
            <p>{{ job.salary_range }}</p>
          </div>
          <div class="detail-item">
            <h5>Job Level</h5>
            <p>{{ job.job_level }}</p>
          </div>
        </div>

        <div class="detail-row">
          <div class="detail-item">
            <h5>Posted Date</h5>
            <p>{{ formatDate(job.posted_date) }}</p>
          </div>
          <div class="detail-item">
            <h5>Application Deadline</h5>
            <p>{{ formatDate(job.application_deadline) }}</p>
          </div>
          <div class="detail-item">
            <h5>Start Date</h5>
            <p>{{ formatDate(job.start_date) }}</p>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="skills-section">
        <div class="skills-column">
          <h4>Required Skills</h4>
          <ul class="skills-list">
            <li v-for="(skill, index) in job.required_skills" :key="'req-' + index">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="skills-column" v-if="job.preferred_qualifications.length > 0">
          <h4>Preferred Qualifications</h4>
          <ul class="skills-list">
            <li v-for="(qual, index) in job.preferred_qualifications" :key="'pref-' + index">
              {{ qual }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Description Section -->
      <div class="description-section">
        <h4>Job Description</h4>
        <p class="job-description">{{ job.job_description }}</p>
      </div>

      <!-- Additional Info -->
      <div class="additional-info">
        <div v-if="job.supervisor">
          <h5>Supervisor</h5>
          <p>{{ job.supervisor }}</p>
        </div>
        <div>
          <h5>Positions Available</h5>
          <p>{{ job.positions_available }}</p>
        </div>
        <div v-if="job.tags && job.tags.length > 0">
          <h5>Tags</h5>
          <div class="tags">
            <span v-for="(tag, index) in job.tags" :key="'tag-' + index" class="tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Apply Button -->
      <router-link to="/apply" class="btn btn-primary apply-btn">
        Apply for this Position
      </router-link>
    </div>

    <div v-else class="job-not-found">
      <h3>Job Not Found</h3>
      <p>The requested job could not be found.</p>
      <router-link to="/" class="btn btn-outline-primary">
        Back to Job Overview
      </router-link>
    </div>
  </div>
</template>

<script>
import jobs from '@/data/jobs.js';

export default {
  name: 'JobDetail',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      job: null
    };
  },
  computed: {
    categoryBadgeClass() {
      const classes = {
        'AI': 'bg-primary',
        'Data Science': 'bg-success',
        'Software Development': 'bg-info',
        'DevOps': 'bg-warning text-dark',
        'Cybersecurity': 'bg-danger'
      };
      return classes[this.job.category] || 'bg-secondary';
    }
  },
  created() {
    this.fetchJob();
  },
  watch: {
    id() {
      this.fetchJob();
    }
  },
  methods: {
    fetchJob() {
      this.job = jobs.find(j => j.job_id === this.id);
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.job-detail-container {
  padding: 20px;
}

.job-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 800px;
  margin: 0 auto;
}

.job-header {
  margin-bottom: 25px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.job-title {
  color: #2c3e50;
  margin-bottom: 10px;
}

.job-meta {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.badge {
  font-size: 0.8rem;
  padding: 5px 10px;
}

.company {
  font-weight: 500;
}

.location {
  color: #666;
}

.detail-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.detail-item {
  flex: 1;
  min-width: 150px;
}

.detail-item h5 {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.skills-section {
  display: flex;
  gap: 30px;
  margin: 25px 0;
  flex-wrap: wrap;
}

.skills-column {
  flex: 1;
  min-width: 200px;
}

.skills-list {
  list-style-type: none;
  padding-left: 0;
}

.skills-list li {
  padding: 5px 0;
  border-bottom: 1px solid #f0f0f0;
}

.description-section {
  margin: 25px 0;
}

.job-description {
  line-height: 1.6;
  white-space: pre-line;
}

.additional-info {
  display: flex;
  gap: 30px;
  margin: 25px 0;
  flex-wrap: wrap;
}

.additional-info > div {
  flex: 1;
  min-width: 150px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f0f0f0;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

.apply-btn {
  margin-top: 20px;
  padding: 10px 25px;
}

.job-not-found {
  text-align: center;
  padding: 50px 20px;
}

@media (max-width: 768px) {
  .detail-row,
  .skills-section,
  .additional-info {
    flex-direction: column;
    gap: 15px;
  }
  
  .detail-item,
  .skills-column {
    min-width: 100%;
  }
}
</style>