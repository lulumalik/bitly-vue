<template>
  <div>
    <nav>
      <div class="logo">
       <a href="/" 
          style="text-decoration: none !important"><strong>Lulu Bitly</strong>
        </a></div>
      <ul>
        <li>
            <a class="active"
               href="/login"
               v-if="!isUserLogin"><strong>Login</strong></a>
        </li>
        <li>
            <a v-if="!isUserLogin"
               href="/register"
              >Register</a>
        </li>
        <li>
          <a href="/app">App</a>
        </li>
        <li>
          <a  v-if="isUserLogin"
              href="/"
              color="info"
              @click="logout"
            >Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import router from './../router.js'
export default {
    computed: {
      isUserLogin(){
        return this.$store.getters.isUserLogin
      },
    },
    methods: {
      logout(){
        router.push({ name : "Dashboard"})
        this.$store.dispatch("logout")
      }
    }
}

$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  }else{
    $('nav').removeClass('black')
  }
})
</script>

<style>
nav{
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100px;
    padding: 10px 100px;
    box-sizing: border-box;
    transition: .3s;
    box-shadow: 0 10px 4px -2px rgba(0,0,0,.2);
}
nav.black {
    background : rgba(0,0,0,0.8);
    height: 100px;
    padding: 10px 100px;
}
nav .logo{
    color: #151515;
    padding: 22px 20px;
    height: 35px;
    float: left;
    font-size: 24px;
    transition: .3s;
}
nav.black .logo{
    color: #fff ;
}
nav.black .logo a{
    color: #fff;
}
nav .logo a{
    color: #151515;
}
nav ul {
    list-style: none; 
    float: right;
    margin: 0;
    padding: 0;
    display: flex;
}
nav ul li {
    list-style: none;
}
nav ul li a {
    line-height: 80px;
    color: #151515;
    padding: 12px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .3s;
}
nav.black ul li a {
    color: #fff;
}
nav ul li a:focus{
    outline:none;
}
nav ul li a.active{
    background: #E2472F;
    color: #fff;
    border-radius: 10px;
}

@media only screen and (max-width: 745px) {
  nav{
    padding: 0px 10px;
  }
  nav .logo{
    margin:0px;
  }
  nav ul li a {
    padding: 5px 20px;
    margin: 0px;
  }
}
</style>
