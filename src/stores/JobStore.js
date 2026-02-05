import {defineStore} from 'pinia'
export const useJobStore = defineStore('jobs', {
    state: () => ({
        appliedJobs: []
    }),
    actions: {
        async applyToJob(job){
            this.appliedJobs.push(job)
            return true
        }
    }
})