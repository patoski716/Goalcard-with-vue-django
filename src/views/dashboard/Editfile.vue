<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title mt-3">Edit {{ lead.title }}</h1>
            </div>

            <div class="column is-12">
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Title</label>
                        <div class="control">
                            <input type="text" class="input" v-model="lead.title">
                        </div>
                    </div>

                    <div class="field">
                        <label>Description</label>
                        <div class="control">
                            <textarea type="text" class="textarea" v-model="lead.description"></textarea>
                        </div>
                    </div>

                    
                   
                    <div class="field">
                        <div class="control">
                            <button class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import { toast } from 'bulma-toast'

    export default {
        name: 'Editfile',
        data() {
            return {
                lead: {},
                
            }
        },
        mounted() {
            this.getLead()
            
        },
        methods: {
            async getLead() {
                this.$store.commit('setIsLoading', true)

                const leadID = this.$route.params.id

                axios
                    .get(`/api/v1/goals/${leadID}/`)
                    .then(response => {
                        this.lead = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            },
            async submitForm() {
                this.$store.commit('setIsLoading', true)

                const leadID = this.$route.params.id

                axios
                    .patch(`/api/v1/goals/${leadID}/`, this.lead)
                    .then(response => {
                        toast({
                            message: 'The lead was updated',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })

                        this.$router.push(`/dashboard/detail/${leadID}`)
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            },
            
        }
    }
</script>