<script setup>
import EditProfile from './components/EditProfile.vue';
import ProfileCard from '../dashboard/Components/ProfileCard.vue';
import Portfolio from './components/Portfolio.vue'
</script>

<template>



<main class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 ">
    <section class="cols-span-1 xl:cols-span-2 -px-10">
        <EditProfile/>
    </section>

    <section>
        <ProfileCard />
        <Portfolio/>
    </section>

</main>

    
</template>