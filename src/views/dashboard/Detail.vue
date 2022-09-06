<template lang="">
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12 mt-4">
                

                <div class="buttons">
                    <router-link :to="{ name: 'Edit'}" class="btn btn-info mr-3">Edit</router-link>

                
                </div>
            </div>

            <div class="column is-12">
                <div class="box">
                <h1 class="title mt-3">{{ lead.title }}</h1>
                <p>{{ lead.created_at }}</p>
                    <p>{{ lead.description}} </p>
                    
                </div>
            </div>



        
        </div>
    </div>
</template>
<script>
    import axios from 'axios'

// dangerouslySetInnerHTML={{__html: artist.biography}}


export default {
    name: 'Detail',
    data() {
        return {
            lead: {}
        }
    },
    mounted() {
        this.getLead()
    },
    methods: {
        
        async getLead() {
                this.$store.commit('setIsLoading', true)

                const leadID = this.$route.params.id

                await axios
                    .get(`/api/v1/goals/${leadID}/`)
                    .then(response => {
                        this.lead = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            },
    },
}
</script>
<style lang="">
    
</style>