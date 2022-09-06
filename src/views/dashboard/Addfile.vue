<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Crete a Goal</h1>
            </div>

            <div class="column is-12">
                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Title</label>
                        <div class="control">
                            <input type="text" name="title" class="input" v-model="title" />
                        </div>
                    </div>

                    <div class="field">
                        <label>Description</label>
                        <div class="control">
                        
                            <textarea type="text" name="description"  class="textarea" v-model="description" />
                        </div>
                    </div>

                    

                    <div class="field">
                        <div class="control">
                            <button class="btn btn-primary">Submit</button>
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
        name: 'Add',
        data() {
            return {
                title: '',
                description: '',
                document:''
            }
        },

        methods: {
            
            async submitForm(e){
                this.$store.commit('setIsLoading', true)

                const formData = new FormData();
                // formData.append("document", e.target.files[0]);


                const lead = {
                        title: this.title,
                        description: this.description,
                        document:formData.append("document", e.target.values)


                    }
                
                await axios
                    .post('/api/v1/goals/', lead)
                    .then(response => {
                        toast({
                            message: 'The file is added successfuly',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'top-right',
                        })

                        this.$router.push('/my-account')
                    })
                    .catch(()=>{
                        console.log("failed");
                    });
            
            this.$store.commit('setIsLoading', false)

            },
        },
        
    }
</script>