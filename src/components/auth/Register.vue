<template>
    <div class="background">
        <center>
            <form @submit.prevent="register" class="registerBox">
                <div class="registerHeader">
                    <h1>Register</h1>
                </div>
                <div class="registerForm">
                    <span>
                        <input
                            name="first_name"
                            class="form-control"
                            v-validate="'required'"
                            data-vv-as="field"
                            v-model="first_name"
                            type="text"
                            placeholder="first name">
                        <div class="danger">
                            {{ errors.first('first_name') }}
                        </div>
                    </span>
                    <span>
                        <input
                            name="last_name"
                            class="form-control"
                            v-validate="'required'"
                            data-vv-as="field"
                            v-model="last_name"
                            type="text"
                            placeholder="last name">
                        <div class="danger">
                            {{ errors.first('last_name') }}
                        </div>
                    </span>
                    <span>
                        <input
                            type="email"
                            v-model="email"
                            v-validate="'required|email'"
                            name="email"
                            class="form-control"
                            placeholder="email"
                            :class="{ 'is-invalid': submitted && errors.has('email') }"
                            >
                        <div
                            v-if="submitted && errors.has('email')"
                            class="invalid-feedback">
                            {{ errors.first('email') }}
                        </div>
                    </span>
                    <span>
                        <input
                            type="password"
                            v-model="password"
                            v-validate="{ required: true, min: 6 }"
                            name="password"
                            class="form-control"
                            placeholder="password"
                            :class="{ 'is-invalid': submitted && errors.has('password') }">
                        <div
                            v-if="submitted && errors.has('password')"
                            class="invalid-feedback"
                        >{{ errors.first('password') }}</div>
                    </span>
                        <button>Submit <i v-if="submitted" class="fa fa-spinner fa-spin" style="font-size:10px"></i></button>
                </div>
            </form>
        </center>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../../router.js'

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            submitted: false
        }
    },
    methods: {
        async register(){
            this.submitted = true;
            this.$validator.validate();
            
            if (this.email === null || this.password === null || this.password.length <= 6) {
                alert('Please insert valid information')
                return false;
            }
            axios.post('http://localhost:3000/users/register', {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password
            }).then(res => {
                console.log("---------------",res)
                router.push({ name: 'login' })
            }).catch(err => {
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss">
.registerBox{
    margin-top: 100px;
    width: 360px;
    padding: 10px;

    .login-header {
        color:#fff;
        text-align:center;
        font-size:300%;
    }
        .registerForm {
            padding: 20px;
            border:.5px solid #fff;
            background:#E2472F;
            border-radius:10px;
        }
            input{
                width: 80%;
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
                    width: 80%;
                    line-height: 2em;
                    font-family: 'Ubuntu', sans-serif;
                    margin: 1em 2em;
                    background-color: chartreuse;
                    outline: none;
                    border-radius: 5px;
                    border: 2px solid chartreuse;
                }
}
</style>
