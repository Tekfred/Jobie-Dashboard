<script setup>
import EditProfile from './components/EditProfile.vue';
// import ProfileStatus from '../Components/ProfileCard.vue';
import Portfolio from './components/Portfolio.vue'
import ProfileStatus from './components/ProfileStatus.vue'




</script>

<template>



<main class="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-2">

  <!-- LEFT SIDE -->
  <section class="col-span-12 xl:col-span-8">
    <EditProfile/>
  </section>

  <!-- RIGHT SIDE -->
  <section class="col-span-12 xl:col-span-4">
     <ProfileStatus :profile="profile"/>
    <Portfolio/>
  </section>

</main>

    
</template>