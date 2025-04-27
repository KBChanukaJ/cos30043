<template>
  <div class="application-form-container">
    <h2 class="mb-4">Job Application Form</h2>
    
    <form 
      method="post" 
      action="http://mercury.swin.edu.au/it000000/formtest.php"
      @submit.prevent="submitForm"
      ref="formElement"
      novalidate
    >
      <!-- Personal Information Fieldset -->
      <fieldset class="mb-4">
        <legend class="form-legend">Personal Information</legend>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName" class="form-label">First Name*</label>
            <input 
              type="text" 
              class="form-control" 
              id="firstName" 
              name="firstName"
              v-model="form.firstName"
              :class="{ 'is-invalid': errors.firstName }"
              @blur="validateField('firstName')"
            >
            <div class="invalid-feedback">{{ errors.firstName }}</div>
          </div>
          
          <div class="col-md-6 mb-3">
            <label for="lastName" class="form-label">Last Name*</label>
            <input 
              type="text" 
              class="form-control" 
              id="lastName" 
              name="lastName"
              v-model="form.lastName"
              :class="{ 'is-invalid': errors.lastName }"
              @blur="validateField('lastName')"
            >
            <div class="invalid-feedback">{{ errors.lastName }}</div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="username" class="form-label">Username*</label>
            <input 
              type="text" 
              class="form-control" 
              id="username" 
              name="username"
              v-model="form.username"
              :class="{ 'is-invalid': errors.username }"
              @blur="validateField('username')"
            >
            <div class="invalid-feedback">{{ errors.username }}</div>
          </div>
          
          <div class="col-md-6 mb-3">
            <label for="email" class="form-label">Email*</label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              name="email"
              v-model="form.email"
              :class="{ 'is-invalid': errors.email }"
              @blur="validateField('email')"
            >
            <div class="invalid-feedback">{{ errors.email }}</div>
          </div>
        </div>
      </fieldset>
      
      <!-- Password Fieldset -->
      <fieldset class="mb-4">
        <legend class="form-legend">Account Security</legend>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="password" class="form-label">Password*</label>
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              name="password"
              v-model="form.password"
              :class="{ 'is-invalid': errors.password }"
              @blur="validateField('password')"
            >
            <div class="invalid-feedback">{{ errors.password }}</div>
            <small class="form-text text-muted">
              Must be at least 8 characters with one special character ($, %, ^, &, *)
            </small>
          </div>
          
          <div class="col-md-6 mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password*</label>
            <input 
              type="password" 
              class="form-control" 
              id="confirmPassword" 
              name="confirmPassword"
              v-model="form.confirmPassword"
              :class="{ 'is-invalid': errors.confirmPassword }"
              @blur="validateField('confirmPassword')"
            >
            <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
          </div>
        </div>
      </fieldset>
      
      <!-- Address Fieldset -->
      <fieldset class="mb-4">
        <legend class="form-legend">Address Information</legend>
        
        <div class="mb-3">
          <label for="streetAddress" class="form-label">Street Address</label>
          <input 
            type="text" 
            class="form-control" 
            id="streetAddress" 
            name="streetAddress"
            v-model="form.streetAddress"
            :class="{ 'is-invalid': errors.streetAddress }"
            @blur="validateField('streetAddress')"
            maxlength="40"
          >
          <div class="invalid-feedback">{{ errors.streetAddress }}</div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="suburb" class="form-label">Suburb</label>
            <input 
              type="text" 
              class="form-control" 
              id="suburb" 
              name="suburb"
              v-model="form.suburb"
              :class="{ 'is-invalid': errors.suburb }"
              @blur="validateField('suburb')"
              maxlength="20"
            >
            <div class="invalid-feedback">{{ errors.suburb }}</div>
          </div>
          
          <div class="col-md-6 mb-3">
            <label for="postcode" class="form-label">Postcode*</label>
            <input 
              type="text" 
              class="form-control" 
              id="postcode" 
              name="postcode"
              v-model="form.postcode"
              :class="{ 'is-invalid': errors.postcode }"
              @blur="validateField('postcode')"
              maxlength="4"
            >
            <div class="invalid-feedback">{{ errors.postcode }}</div>
            <small class="form-text text-muted">Must be exactly 4 digits</small>
          </div>
        </div>
      </fieldset>
      
      <!-- Contact Information Fieldset -->
      <fieldset class="mb-4">
        <legend class="form-legend">Contact Information</legend>
        
        <div class="mb-3">
          <label for="mobileNumber" class="form-label">Mobile Number*</label>
          <input 
            type="tel" 
            class="form-control" 
            id="mobileNumber" 
            name="mobileNumber"
            v-model="form.mobileNumber"
            :class="{ 'is-invalid': errors.mobileNumber }"
            @blur="validateField('mobileNumber')"
            maxlength="10"
          >
          <div class="invalid-feedback">{{ errors.mobileNumber }}</div>
          <small class="form-text text-muted">Must start with 04 and be 10 digits</small>
        </div>
        
        <div class="mb-3">
          <label for="dob" class="form-label">Date of Birth*</label>
          <input 
            type="date" 
            class="form-control" 
            id="dob" 
            name="dob"
            v-model="form.dob"
            :class="{ 'is-invalid': errors.dob }"
            @blur="validateField('dob')"
          >
          <div class="invalid-feedback">{{ errors.dob }}</div>
        </div>
      </fieldset>
      
      <!-- Job Preferences Fieldset -->
      <fieldset class="mb-4">
        <legend class="form-legend">Job Preferences</legend>
        
        <div class="mb-3">
          <label for="jobCategory" class="form-label">Preferred Job Category*</label>
          <select 
            class="form-select" 
            id="jobCategory" 
            name="jobCategory"
            v-model="form.jobCategory"
            :class="{ 'is-invalid': errors.jobCategory }"
            @blur="validateField('jobCategory')"
          >
            <option value="" disabled selected>Select a category</option>
            <option v-for="category in jobCategories" :value="category" :key="category">
              {{ category }}
            </option>
          </select>
          <div class="invalid-feedback">{{ errors.jobCategory }}</div>
        </div>
      </fieldset>
      
      <!-- Terms and Conditions -->
      <div class="mb-4">
        <button 
          type="button" 
          class="btn btn-link p-0 mb-2"
          @click="toggleTerms"
        >
          {{ showTerms ? 'Hide' : 'Show' }} Terms and Conditions
        </button>
        
        <div v-if="showTerms" class="terms-box p-3 mb-3">
          <h5>Terms and Conditions</h5>
          <p>By submitting this application, you agree to our terms of service and privacy policy. All information provided must be accurate and complete. We may contact you using the details provided for application-related communications.</p>
          <p>Your data will be stored securely and only used for recruitment purposes. You may request deletion of your data at any time by contacting our support team.</p>
        </div>
      </div>
      
      <!-- Submit Button -->
      <div class="d-grid">
        <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobileNumber: '',
        dob: '',
        jobCategory: ''
      },
      errors: {},
      showTerms: false,
      isSubmitting: false,
      jobCategories: [
        'AI', 
        'Data Science', 
        'Software Development', 
        'Web Development',
        'Cybersecurity',
        'DevOps'
      ]
    };
  },
  methods: {
    toggleTerms() {
      this.showTerms = !this.showTerms;
    },
    validateField(field) {
      // Clear previous error
      this.errors[field] = '';
      
      // Field-specific validation
      switch(field) {
        case 'firstName':
        case 'lastName':
          if (!this.form[field]) {
            this.errors[field] = 'This field is required';
          } else if (!/^[a-zA-Z]+$/.test(this.form[field])) {
            this.errors[field] = 'Only letters are allowed';
          }
          break;
          
        case 'username':
          if (!this.form.username) {
            this.errors.username = 'Username is required';
          } else if (this.form.username.length < 3) {
            this.errors.username = 'Username must be at least 3 characters';
          }
          break;
          
        case 'password':
          if (!this.form.password) {
            this.errors.password = 'Password is required';
          } else if (this.form.password.length < 8) {
            this.errors.password = 'Password must be at least 8 characters';
          } else if (!/[$%^&*]/.test(this.form.password)) {
            this.errors.password = 'Password must contain at least one special character ($, %, ^, &, *)';
          }
          break;
          
        case 'confirmPassword':
          if (!this.form.confirmPassword) {
            this.errors.confirmPassword = 'Please confirm your password';
          } else if (this.form.password !== this.form.confirmPassword) {
            this.errors.confirmPassword = 'Passwords do not match';
          }
          break;
          
        case 'email':
          if (!this.form.email) {
            this.errors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
            this.errors.email = 'Please enter a valid email address';
          }
          break;
          
        case 'streetAddress':
          if (this.form.streetAddress && this.form.streetAddress.length > 40) {
            this.errors.streetAddress = 'Address must be 40 characters or less';
          }
          break;
          
        case 'suburb':
          if (this.form.suburb && this.form.suburb.length > 20) {
            this.errors.suburb = 'Suburb must be 20 characters or less';
          }
          break;
          
        case 'postcode':
          if (!this.form.postcode) {
            this.errors.postcode = 'Postcode is required';
          } else if (!/^\d{4}$/.test(this.form.postcode)) {
            this.errors.postcode = 'Postcode must be exactly 4 digits';
          }
          break;
          
        case 'mobileNumber':
          if (!this.form.mobileNumber) {
            this.errors.mobileNumber = 'Mobile number is required';
          } else if (!/^04\d{8}$/.test(this.form.mobileNumber)) {
            this.errors.mobileNumber = 'Must start with 04 and be 10 digits';
          }
          break;
          
        case 'dob':
          if (!this.form.dob) {
            this.errors.dob = 'Date of birth is required';
          } else {
            const dobDate = new Date(this.form.dob);
            const today = new Date();
            const minAgeDate = new Date(
              today.getFullYear() - 16, 
              today.getMonth(), 
              today.getDate()
            );
            
            if (dobDate > minAgeDate) {
              this.errors.dob = 'You must be at least 16 years old';
            }
          }
          break;
          
        case 'jobCategory':
          if (!this.form.jobCategory) {
            this.errors.jobCategory = 'Please select a job category';
          }
          break;
      }
    },
    validateForm() {
      // Validate all fields
      Object.keys(this.form).forEach(field => {
        this.validateField(field);
      });
      
      // Check if any errors exist
      return !Object.values(this.errors).some(error => error !== '');
    },
    submitForm() {
      if (this.validateForm()) {
        this.isSubmitting = true;
        // Use the form reference to submit
        this.$refs.formElement.submit();
      }
    }
  }
};
</script>

<style scoped>
.application-form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-legend {
  font-size: 1.1rem;
  padding: 0 10px;
  width: auto;
}

fieldset {
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 20px;
}

.terms-box {
  border: 1px solid #dee2e6;
  border-radius: 5px;
  background-color: #f8f9fa;
}

.invalid-feedback {
  display: block;
}

@media (max-width: 768px) {
  .application-form-container {
    padding: 15px;
  }
  
  fieldset {
    padding: 15px;
  }
}
</style>