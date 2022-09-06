<template>
  <div class="home">
    

      <div class="center">
          <div class="row">
            <div class="col-md-8 pt-5 mt-3">
            <h2 class='mb-2 pt-5 mt-5' style="font-size:3rem;font-weight:bold;">A convenient way to accomplish your goal </h2>
          <p>Type and save your goals and make them come to existence.</p><br/>
          <router-link to="/log-in" type="button" class="btn btn-primary mt-4 px-4">Login</router-link>
          

            </div>
            <div class="col-md-4">
              <img src="../assets/hero.png" alt="hero" class="hero"/>
            </div>
          </div>
          
        </div>

        <div class="container">
      <div class="container text-center mt-5 mb-5">
        <h2 style="font-size:30px;font-weight:bold;">How goal card works</h2>
          <div class="row">
            <div class="col-md-4">
              <img src="../assets/billy-pointing-to-phone.ac795dc3.png" alt="pic" />
              <h2 style="font-size:30px;font-weight:bold;">Login</h2>
              Login or create a free account to get started
            </div>
            <div class="col-md-4">
            <img src='../assets/billy-pointing-to-report.a5a073be.png' alt="pic" />
                <h2 style="font-size:30px;font-weight:bold;">Create a Goal</h2>
                Create a goal card and include how you will make them come to existence.
            </div>
            <div class="col-md-4">
            <img src='../assets/billy-chating.305b7e2f.png' alt="pic" />
              <h2 style="font-size:30px;font-weight:bold;">Manage your Goal</h2>
              Modify your goal card the way you want it to be           
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="row">
            <div class="col-md-6">
              <img src='../assets/billy-taking-notes.f010d81a.png' alt="pic"  />
            </div>

            <div class="col-md-6 mt-5">
              <h2 style="font-size:30px;font-weight:bold;">Create your Goal card</h2>
             <p>create a goal card for the season, your birthday, annivesary or just any event you can think of.
              
             <br/> <img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> Give your goal card a custom title.<br class='mt-1'/>
             <br/><img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> Modify your goal card the way you want it to be.<br class='mt-1'/> 
             <br/><img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> You can create multiple goal card<br class='mt-1'/>
             </p> 
            </div>
          </div>
        </div>
        <div class="row">
          <div class="span4"></div>
          <div class="span4 mx-auto"><img class="center-block" src='../assets/right-down-arrow.41a2a961.svg' alt='pic' /></div>
          <div class="span4"></div>
        </div>
          
              <div class="row">
            <div class="col-md-8">
            <h2 style="font-size:30px;font-weight:bold;">MANAGE YOUR GOAL</h2>
              <p > create a goal card for the season, your birthday, annivesary or just any event you can think of.
             
              <br /> <img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> Give your goal card a custom title.<br class='mt-1'/>
              <br/><img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> Modify your goal card the way you want it to be. <br class='mt-1'/>
              <br/> <img src='../assets/list-item-icon.ddbd66ea.svg' alt="pic"  /> You can create multiple goal card.<br class='mt-1'/>
              </p>
            </div>

            <div class=" col-md-4">
              <img src='../assets/billy-on-rocket.033e1719.png' alt="pic"   />
            </div>
          </div>
       
        
      </div>



  </div>

</template>

<script>


export default {
  name: 'HomeView',
  
}
</script>

<style lang="css">
import '@/assets/style.css'

#light {
        background-color: #f3ebf6;
        background-size: cover no-repeat;
    }
    
    #light .pato{
        background-color: #f3ebf6;
        background-size: cover no-repeat;
    }
    
    #dark {
        background-color: rgb(6, 2, 48);
        background-size: cover no-repeat;
    }
    
    #dark .pato{
        background-color: rgb(6, 2, 48);
        background-size: cover no-repeat;
        color: #fff;
    }
    .switch {
        display: flex;
        width: 100vw;
        height: 100px;
        justify-content: center;
        align-items: center;
      }
      
      .switch label {
        margin: 10px;
      }
      
      #light .switch label {
        color: black;
      }
      
      #dark .switch label {
        color: white;
      }
      
    .text-purple{
      color: #582b95 !important;
    }
    .btn-purple{
      background: #582b95 !important;
      color: #fff !important;
    }
    .center-block {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero {
      display: block;
      margin-left: auto;
      margin-right: auto;
      
    }
    .bg-purple{
      background-color:#582b95 !important;
    
    }
    .bg{
      background-color:#582b95;
      min-height: 350px !important;
    }
    
    
    @media (min-width:0px) and (max-width:1200px) {
      .hero, .side{
        display: none;
      }
      .center{
        text-align: center;
      }
      .center-block {
        display: none;
      }
      .about-pic{
       max-height: 100px;
       min-width: 50vw;
       overflow: hidden;
       margin-left: auto;
      margin-right: auto;
      }
      
    }
    
</style>
