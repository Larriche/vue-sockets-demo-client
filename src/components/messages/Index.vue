<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-comments-o"></span> Messages</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <p v-if="isConnected">We're connected to the server!</p>
                <message
                    v-for="message in messages"
                    :message="message"></message>

                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-xs-12 col-lg-offset-2 col-md-offset-2">
                            <div class="form-group" v-if="user.role=='admin'">
                                <select class="form-control">
                                    <option value="">Select a client</option>
                                    <option v-for="user in users"
                                            value="user.id"
                                            v-model="messageTo">
                                            {{ user.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="input-group">
                                <input type="text"
                                    class="form-control chatbox"
                                    placeholder="Say something"
                                    v-model="message"
                                    name="search_term">

                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-lg btn-info" id="search-button" @click="sendMessage">
                                        SEND
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
// Child Components
import Message from './Message';

// Vuex imports
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            isConnected: false,
            socketMessage: '',
            message: ''
        }
    },

    computed: {
        ...mapGetters({
            messages: 'Messages/getAll',
            user: 'Auth/getUser',
            users: 'Users/getAll'
        })
    },

    components: {
        Message
    },

    sockets: {
        connect() {
            // Fired when the socket connects.
            this.isConnected = true;
        },

        disconnect() {
            this.isConnected = false;
        },

        // Fired when the server sends something on the "message" channel.
        message(data) {
            if (data.from_id == this.user.id) {
                data.direction = 'outgoing';
            } else {
                data.direction = 'incoming';
            }

            this.addNewMessage(data);
        }
    },

    methods: {
        ...mapActions({
            loadMessages: 'Messages/loadAll',
            loadUsers: 'Users/loadAll',
            addNewMessage: 'Messages/addNewMessage',
            messageTo: ''
        }),

        pingServer() {
            // Send the "pingServer" event to the server.
            this.$socket.emit('pingServer', 'PING!')
        },

        sendMessage() {
            let message = this.message;
            let userId = this.user.id;

            let messageData = {
                message: message,
                fromId: userId
            };

            if (this.user.role == 'admin') {
                messageData.toId = this.messageTo;
            }

            this.$socket.emit('message', messageData)
        },

        initLoadMessages(query = {}) {
            this.loadMessages(query)
                .catch((error) => {
                    alert('An error occurred');
                });
        },

        initLoadUsers(query = {}) {
             this.loadUsers(query)
                .catch((error) => {
                    alert('An error occurred');
                });
        }
    },

    mounted() {
        this.initLoadMessages();
        this.initLoadUsers();
    }
}
</script>

<style scoped>
.chatbox {
    font-size: 1.4em;
    height: 50px;
}

#search-button {
    height: 50px;
}
</style>