<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-items-center">
                    <h1>Set Goals</h1>
                </div>

                <div class="col-md-6 text-right">
                    <router-link to='/dashboard/add'>
                    <button className='my-3 btn btn-primary'>
                    <i className='fas fa-plus'></i> Create a Goal
                    </button>
                    </router-link>
                </div>
            
            </div>

            <div class="column is-12">
                <table class="table striped bordered hover table-responsive">
                    <thead >
                        <tr>
                            <th>Title</th>
                            
                            <th>Description</th>
                           <th>Created at</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="lead in leads" v-bind:key="lead.id">
                                <td>{{ lead.title }}</td>
                               
                                <td>
                                    <router-link :to="{ name: 'Detail', params: { id: lead.id }}" style="text-decoration:none;" class="btn btn-primary btn-sm">View Description</router-link>
                                </td>
                                <td>{{lead.created_at}}</td>
                                
                                
                        </tr> 
                    </tbody>
                </table>

        </div>
        </div>
    </div>
</template>
<script>

    import axios from 'axios'

    export default {
        name: 'MyAccount',
        data() {
            return {
                leads: [],
            }
        },
        
        mounted() {
            this.getLeads()
        },
        methods: {
            getLeads() {
                this.$store.commit('setIsLoading', true)

            
            axios
                .get(`/api/v1/goals/` )
                .then(response => {
                    this.leads = response.data
                })
                .catch(error => {
                    console.log(error)
                })

            this.$store.commit('setIsLoading', false)
            }
        }
    }
</script>
<style lang="">
    
</style>