<template>
    <div class="todo-list-container">
      <h2 class="mb-4">To-Do List</h2>
      
      <!-- Add Task Section -->
      <div class="add-task mb-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="newTask"
            placeholder="Enter a new task"
            @keyup.enter="addTask"
          >
          <button 
            class="btn btn-primary"
            @click="addTask"
            :disabled="!newTask.trim()"
          >
            Add
          </button>
        </div>
      </div>
  
      <!-- Task List Section -->
      <div class="task-list">
        <div 
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
          :class="{
            'high-priority': task.priority === 'high',
            'low-priority': task.priority === 'low'
          }"
        >
          <div class="task-content">
            <span class="task-text">{{ task.text }}</span>
            <span class="priority-badge">
              {{ task.priority === 'high' ? 'High Priority' : 'Low Priority' }}
            </span>
          </div>
          
          <div class="task-actions">
            <button
              class="btn btn-sm priority-btn"
              :class="task.priority === 'high' ? 'btn-warning' : 'btn-success'"
              @click="togglePriority(index)"
            >
              {{ task.priority === 'high' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
            </button>
            
            <button
              class="btn btn-sm btn-danger"
              @click="deleteTask(index)"
            >
              Delete
            </button>
          </div>
        </div>
  
        <div v-if="tasks.length === 0" class="empty-state">
          <p>No tasks yet. Add your first task above!</p>
        </div>
      </div>
  
      <!-- Stats Section -->
      <div class="stats-section mt-4">
        <div class="stats-card">
          <span class="stats-count">{{ tasks.length }}</span>
          <span class="stats-label">Total Tasks</span>
        </div>
        <div class="stats-card">
          <span class="stats-count">{{ highPriorityCount }}</span>
          <span class="stats-label">High Priority</span>
        </div>
        <div class="stats-card">
          <span class="stats-count">{{ lowPriorityCount }}</span>
          <span class="stats-label">Low Priority</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    data() {
      return {
        newTask: '',
        tasks: [
          { text: 'Update resume and LinkedIn profile', priority: 'high' },
          { text: 'Review AI Research Assistant job description', priority: 'low' },
          { text: 'Submit job application form for Insight Hire', priority: 'low' }
        ]
      };
    },
    computed: {
      highPriorityCount() {
        return this.tasks.filter(task => task.priority === 'high').length;
      },
      lowPriorityCount() {
        return this.tasks.filter(task => task.priority === 'low').length;
      }
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.unshift({
            text: this.newTask.trim(),
            priority: 'low' // Default to low priority
          });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      togglePriority(index) {
        this.tasks[index].priority = 
          this.tasks[index].priority === 'high' ? 'low' : 'high';
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-list-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .add-task .input-group {
    max-width: 500px;
  }
  
  .task-list {
    border-radius: 8px;
    overflow: hidden;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    background-color: white;
    border-bottom: 1px solid #eee;
    transition: all 0.2s ease;
  }
  
  .task-item.high-priority {
    border-left: 4px solid #dc3545;
    background-color: #fff5f5;
  }
  
  .task-item.low-priority {
    border-left: 4px solid #28a745;
  }
  
  .task-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .task-text {
    margin-right: 10px;
    word-break: break-word;
  }
  
  .priority-badge {
    font-size: 0.75rem;
    padding: 0.25em 0.6em;
    border-radius: 10px;
    background-color: #6c757d;
    color: white;
    align-self: flex-start;
    margin-top: 5px;
  }
  
  .high-priority .priority-badge {
    background-color: #dc3545;
  }
  
  .low-priority .priority-badge {
    background-color: #28a745;
  }
  
  .task-actions {
    display: flex;
    gap: 8px;
  }
  
  .empty-state {
    padding: 30px;
    text-align: center;
    color: #6c757d;
    background-color: white;
    border-radius: 8px;
  }
  
  .stats-section {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .stats-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 15px 20px;
    min-width: 100px;
    text-align: center;
  }
  
  .stats-count {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: #343a40;
  }
  
  .stats-label {
    font-size: 0.85rem;
    color: #6c757d;
  }
  
  @media (max-width: 576px) {
    .task-item {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    
    .task-actions {
      align-self: flex-end;
    }
  }
  </style>