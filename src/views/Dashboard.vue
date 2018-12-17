<template>
  <div>
    <section class="sec1">
      <div v-if="!isUserLogin"
           class="containerBefore">
            <h1 class="title">Shorten Url</h1>
            <form v-on:submit.prevent="short">
                <center>
                <div class="form-group center">
                    <input type="text" 
                           name="url" 
                           v-model="url" 
                           placeholder="Please Input your URL">
                </div>
                    <button type="submit" >Generate</button>
                </center>
            </form>
            <div class="url">{{ data && data.data && data.data.short_url }}</div>
      </div>
      <div v-if="isUserLogin"
          class="containerAfter">
          <h1>Welcome to Lulu Bitly</h1>
          <small>enjoy your link and make it more efficient with support me at github.com/lulumalik
                 and contact person by +6287724833226 (Whatsapp) or ryunitou@gmail.com, thanks in advanced
          </small>
      </div>
    </section>
      <section class="content">
        <p>
          Lorem ipsum dolor sit amet, cu equidem maiestatis eam, 
          antiopam mediocrem ius ne, sumo putant expetenda ad mel. 
          Duo indoctum torquatos ei, vim quod illud iusto ut. Nibh 
          tation perfecto ut pri, ne pro illud habemus accusamus, 
          quo at tibique convenire. Ius an unum primis atomorum. 
          Vim eu civibus facilisi iracundia, sonet insolens maiestatis no his.
          Eum meliore iracundia concludaturque ex, usu euismod accusam epicuri 
          ei. Eius adipisci consetetur ei qui, case tempor no est. 
          Vis ea viris assentior vituperatoribus. Suas placerat pri 
        </p>
        <p>
          Lorem ipsum dolor sit amet, cu equidem maiestatis eam, 
          antiopam mediocrem ius ne, sumo putant expetenda ad mel. 
          Duo indoctum torquatos ei, vim quod illud iusto ut. Nibh 
          tation perfecto ut pri, ne pro illud habemus accusamus, 
          quo at tibique convenire. Ius an unum primis atomorum. 
          Vim eu civibus facilisi iracundia, sonet insolens maiestatis no his.
          Eum meliore iracundia concludaturque ex, usu euismod accusam epicuri 
          ei. Eius adipisci consetetur ei qui, case tempor no est. 
          Vis ea viris assentior vituperatoribus. Suas placerat pri 
        </p>
        <p>
          Lorem ipsum dolor sit amet, cu equidem maiestatis eam, 
          antiopam mediocrem ius ne, sumo putant expetenda ad mel. 
          Duo indoctum torquatos ei, vim quod illud iusto ut. Nibh 
          tation perfecto ut pri, ne pro illud habemus accusamus, 
          quo at tibique convenire. Ius an unum primis atomorum. 
          Vim eu civibus facilisi iracundia, sonet insolens maiestatis no his.
          Eum meliore iracundia concludaturque ex, usu euismod accusam epicuri 
          ei. Eius adipisci consetetur ei qui, case tempor no est. 
          Vis ea viris assentior vituperatoribus. Suas placerat pri 
        </p>
        <p>
          Lorem ipsum dolor sit amet, cu equidem maiestatis eam, 
          antiopam mediocrem ius ne, sumo putant expetenda ad mel. 
          Duo indoctum torquatos ei, vim quod illud iusto ut. Nibh 
          tation perfecto ut pri, ne pro illud habemus accusamus, 
          quo at tibique convenire. Ius an unum primis atomorum. 
          Vim eu civibus facilisi iracundia, sonet insolens maiestatis no his.
          Eum meliore iracundia concludaturque ex, usu euismod accusam epicuri 
          ei. Eius adipisci consetetur ei qui, case tempor no est. 
          Vis ea viris assentior vituperatoribus. Suas placerat pri 
        </p>
        <p>
          Lorem ipsum dolor sit amet, cu equidem maiestatis eam, 
          antiopam mediocrem ius ne, sumo putant expetenda ad mel. 
          Duo indoctum torquatos ei, vim quod illud iusto ut. Nibh 
          tation perfecto ut pri, ne pro illud habemus accusamus, 
          quo at tibique convenire. Ius an unum primis atomorum. 
          Vim eu civibus facilisi iracundia, sonet insolens maiestatis no his.
          Eum meliore iracundia concludaturque ex, usu euismod accusam epicuri 
          ei. Eius adipisci consetetur ei qui, case tempor no est. 
          Vis ea viris assentior vituperatoribus. Suas placerat pri 
        </p>
      </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      data: '',
      url: '',
      shortBaseUrl: 'http://localhost'
    }
  },
  computed: {
    isUserLogin(){
      return this.$store.getters.isUserLogin
    },
  },
  methods: {
    async short(){

      const res = await axios.post('http://localhost:3000/api/item/', {
        url: this.url,
        shortBaseUrl: this.shortBaseUrl
      }).then(res => {
        console.log("---------------",res)
        this.data = res
      }).catch(err => {
        console.log(err)
      })

    }
  }

}
</script>

<style>
section.sec1 {
  margin-top: 100px;
  width: 100%;
  height: 100vh;
  background: url('./../assets/71766872_p0.jpg');
  background-size: cover;
  background-position: center;
}
.content{
  margin-top: 100px;
}
.content p{
  width: 900px;
  margin: 40px auto;
  text-align: justify;
  font-size: 20px;
  line-height: 30px;
}
.containerBefore {
  padding-top: 50px;
}
.containerBefore h1{
  font-size: 40px;
  color: white;
}
.containerAfter {
  margin: 10px auto;
  padding-top: 100px;
  width: 550px;
  color: white;
}
.containerAfter h1{
  font-size: 40px;
}
.containerAfter small{
  line-height: 0px;
  font-size: 15px;
}
input{
  width: 50%;
  line-height:3em;
  font-family: 'Ubuntu', sans-serif;
  margin:1em 2em;
  border-radius:5px;
  border:2px solid #f2f2f2;
  outline:none;
  padding-left:10px;
}
button{
  color: white;
  width: 51%;
  line-height: 2em;
  font-family: 'Ubuntu', sans-serif;
  margin: 0em 2em;
  background-color: chartreuse;
  outline: none;
  border-radius: 5px;
  border: 2px solid chartreuse;
}
.url{
  padding-top: 20px;
  color: white;
}

</style>

