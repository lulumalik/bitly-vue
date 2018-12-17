<template>
    <div class="content">
        <h1 class="title">Shorten Url</h1>
            <form v-on:submit.prevent="shorten">
                <center>
                <div class="form-group center">
                    <input type="text" 
                           name="url" 
                           v-model="data.url" 
                           placeholder="Please Input your URL">
                    <input type="text" 
                           name="url" 
                           v-model="data.customUrl" 
                           placeholder="Please Input your Custom Tag">
                    <input type="text" 
                           name="url" 
                           v-model="data.title" 
                           placeholder="Please Input your Title Url (optional)">       
                </div>
                    <button type="submit" >Generate</button>
                </center>
            </form>
        <table style="width:80%">
            <tr>
                <th>Tag Url</th>
                <th>Short Link</th>
                <th>Original Url</th> 
                <th>Title</th>
            </tr>
            <tr>
                <td>{{forSavedApp.customUrl}}</td>
                <td>{{dataUrl}}</td>
                <td>{{forSavedApp.url}}</td> 
                <td>{{forSavedApp.title}}</td>
            </tr>
        </table>
            <!-- <pre>{{ forSavedApp }}</pre> -->
    </div>
</template>

<script>
import table from './Table'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    data(){
        return {
            data : {
                customUrl: '',
                data: '',
                title: '',
                url: '',
                shortBaseUrl: 'http://localhost'
            },
            dataUrl: ''
        }
    },
    methods: {
        async shorten(){
            
            // console.log(this.data)

            const res = await axios.post('http://localhost:3000/api/custom', {
                url: this.data.url,
                title: this.data.title,
                shortBaseUrl: this.data.shortBaseUrl,
                customUrl: this.data.customUrl
            }, {
                headers: {
                    authorization: localStorage.getItem("usertoken")
                }
            })
            console.log(res.data.short_url)
            this.dataUrl = res.data.short_url

            this.$store.dispatch("forSavedApp", this.data);
            
        }
    },
    computed: {
        ...mapState(["forSavedApp"])
    }
}
</script>

<style>
.content{
  margin-top: 130px;
}
form{
  margin-bottom: 50px;
}
table{
    margin: 10px auto;
}
table, th {
    border: 2px solid #f2f2f2;
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