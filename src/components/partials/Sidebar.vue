<template>
    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 site-logo-container">
                <h3 class="text-center site-logo">Notify</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="text-center site-user">
                    <p><span class="fa fa-circle logged-in"></span> {{ this.user.name }}</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul class="menu">
                    <router-link :to="{ name: 'messages' }" tag="li" active-class="active" exact>
                        <a>
                            <p>
                                <i class="fa fa-comments-o"></i>Messages
                            </p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'actions' }" tag="li" active-class="active" v-if="user.role == 'user'" exact>
                        <a>
                            <p>
                                <i class="fa fa-wrench"></i>Actions
                            </p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'commands' }" tag="li" active-class="active" v-if="user.role == 'admin'" exact>
                        <a>
                            <p>
                                <i class="fa fa-wrench"></i>Commands
                            </p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'history' }" tag="li" active-class="active" exact>
                        <a>
                            <p>
                                <i class="fa fa-clock-o"></i>History
                            </p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'users' }" tag="li" active-class="active" v-if="user.role == 'admin'" exact>
                        <a>
                            <p>
                                <i class="fa fa-user"></i>Users
                            </p>
                        </a>
                    </router-link>

                    <li @click.prevent="logoutUser" active-class="active" exact>
                        <a>
                            <p>
                                <i class="fa fa-sign-out"></i>Log Out
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions('Auth', [
            'logout'
        ]),

        logoutUser() {
            this.$emit('logout');
        }
    }
}
</script>