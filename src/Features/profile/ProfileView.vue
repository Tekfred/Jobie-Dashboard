<script setup>
import EditProfile from './components/EditProfile.vue';
// import ProfileStatus from '../Components/ProfileCard.vue';
import Portfolio from './components/Portfolio.vue'
import ProfileStatus from './components/ProfileStatus.vue'

import profileImage from "@/assets/images/profile_img_1.png";

// {name: "profile", path: "/app/profile", icon: "person"}

 
const profile = {
  id: 1,
  name: "Oda Dink",
  title: "Programmer",
  image: profileImage,
  following: 228,
  followers: 4842,
  phone: "+50 123 456 78",
  email: "davidheree@mail.com",
};

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