<script setup>
import { ref } from 'vue';
import { useJobStore } from '../../stores/JobStore';
import JobCard from './components/JobCard.vue';
import JobFilter from './components/JobFilter.vue';
import SearchCard from './components/SearchCard.vue';
</script>

<template>

  <section>
    <SearchCard />
  </section>

  <section>
    <JobFilter /> 
  </section>
   

  <section>
    <JobCard />
  </section>
  
    
   
  

  

</template>



<router-view /> 
