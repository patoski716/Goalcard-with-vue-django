<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
  <router-link to="/" style="text-decoration:none;">
    <b-navbar-brand class="text-purple"><img src='../../assets/logo.png' alt="logo" style="height:60px;font-weight:bold;"/>Goal Card</b-navbar-brand>
  </router-link>

    <b-navbar-toggle target="nav-collapse" class="text-purple"><i class="fa fa-bars" aria-hidden="true"></i></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
    <template v-if="!$store.state.isAuthenticated">
        <b-nav-item > <router-link to="/" class="text-purple" style="text-decoration:none;">Home</router-link></b-nav-item>
        <b-nav-item > <router-link to="/sign-up" class="text-purple" style="text-decoration:none;">Register</router-link></b-nav-item>
        <b-nav-item > <router-link to="/log-in" class="text-purple" style="text-decoration:none;">Login</router-link></b-nav-item>
    </template>
        <template v-else>
        <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
            <em class="text-purple"><i className='fas fa-user'></i> My Account</em>
            </template>
            <b-dropdown-item> <router-link to="/my-account" class="text-purple" style="text-decoration:none;">dashboard </router-link></b-dropdown-item>
            <b-dropdown-item class="text-purple" @click="logout()" > Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </template>
        </b-navbar-nav>
        
    </b-collapse>
    </b-navbar>
</div>
</template>
<script>
    import axios from 'axios'

    export default {
            name: 'Navbar',
            methods: {
                async logout() {
                    await axios
                        .post('/api/v1/token/logout/')
                        .then(response => {
                            console.log('Logged out')
                        })
                        .catch(error => {
                            console.log(JSON.stringify(error))
                        })
                    
                    axios.defaults.headers.common['Authorization'] = ''
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    localStorage.removeItem('userid')
                    localStorage.removeItem('team_name')
                    localStorage.removeItem('team_id')
                    this.$store.commit('removeToken')

                    this.$router.push('/')
                }
            }
        }
</script>
<style lang="scss">
    
</style>