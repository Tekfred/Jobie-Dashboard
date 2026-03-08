<script setup>
import { ref } from 'vue';
import { useJobStore } from '../../stores/JobStore';
import JobCard from './components/JobCard.vue'
import JobFilter from './components/JobFilter.vue'
</script>

<template>
  <div class="p-6">
     <JobFilter />
    <JobCard />
  </div>

  

</template>



<router-view /> 
