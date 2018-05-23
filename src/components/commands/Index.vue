<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-wrench"></span> Commands</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <h3>Send commands to clients</h3>

                <div class="form-group">
                    <textarea class="form-control" v-model="command" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                        <select class="form-control" v-model="commandTo">
                            <option value="">Select a client</option>
                            <option v-for="user in users"
                                    :value="user.id">
                                    {{ user.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <button type="submit" class="btn btn-md btn-info btn-block"  @click="sendCommand">
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// Vuex imports
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            user: 'Auth/getUser',
            users: 'Users/getAll'
        })
    },

    data() {
        return {
            command: '',
            commandTo: ''
        }
    },

    methods: {
        ...mapActions({
            loadUsers: 'Users/loadAll',
        }),

        sendCommand() {
            let command = this.command;
            let fromId = this.user.id;
            let toId = this.commandTo;

            let data = {
                command,
                fromId,
                toId
            };

            this.$socket.emit('command', data);
        },

        initLoadUsers(query = {}) {
             this.loadUsers(query)
                .catch((error) => {
                    alert('An error occurred');
                });
        }
    },

    mounted() {
        this.initLoadUsers();
    }
}
</script>