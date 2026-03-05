<script setup>
import { ref } from 'vue';
const feacturedCompanies = ref([
    {
        id: 1,
        companyName: "Herman-Carter",
        Oportunities: "21 vacancy",
        iconbg: "#41c7d0",
        iconColor: "text-white"
    }
])
</script>

<template>

   <div v-if="feacturedCompanies in feacturedCompanies" key="feacturedCompanies.id">
    <div class="flex ">
        <div>
            <h1>{{ feacturedCompanies.companyName }}</h1>

            <p>{{ feacturedCompanies.Oportunities }}</p>
        </div>
        <span class="material-symbols-outlined text-lg" :class="iconColor">
             
                {{ feacturedCompanies.icon }}
        </span>
    </div>
   </div>
    
</template>