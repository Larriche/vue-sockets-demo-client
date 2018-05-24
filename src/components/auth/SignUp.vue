<template>
    <div class="col-lg-12 col-md-12 col-xs-12">
        <div class="row page-body">
            <div class="col-lg-4 col-md-4 col-sm-8 col-xs-12 col-lg-offset-4 col-md-offset-4 col-sm-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="text-center">Sign Up</h3>
                    </div>

                    <div class="panel-body">
                        <form role="form" @submit.prevent="signupUser">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" name="name" v-model="userData.name">
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="email" v-model="userData.email">
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" v-model="userData.password">
                            </div>

                            <div class="form-group">
                                <div class="col-md-4 col-md-offset-8">
                                    <button type="submit" class="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </form>

                         <p>Already have an account?
                             <router-link :to="{ name: 'login' }" tag="span" exact>
                                <a>
                                    <span>Log in</span>
                                </a>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                name: ''
            }
        }
    },

    methods: {
        ...mapActions({
            signup: 'Auth/signup',
        }),

        signupUser() {
            this.signup(this.userData)
                .then((response) => {
                    this.$router.push({ name: 'messages' });
                })
                .catch((errors) => {
                    console.log(errors);
                    alert('An error occurred submitting your form');
                });
        }
    }
}
</script>