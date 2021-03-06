<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-comments-o"></span> Messages</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-offset-4 col-md-offset-4">
                <p v-if="isConnected">We're connected to the server!</p>
                <div id="messages-container" v-if="messages.length">
                    <message
                        v-for="message in messages"
                        :message="message"
                        :userId="user.id"></message>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xs-12">
                        <div class="form-group" v-if="user.role=='admin'">
                            <select class="form-control" v-model="messageTo" @change='initLoadMessages'>
                                <option value="">Select a client</option>
                                <option v-for="user in users"
                                        :value="user.id">
                                        {{ user.name }}
                                </option>
                            </select>
                        </div>

                        <div class="input-group">
                            <input type="text"
                                class="form-control chatbox"
                                placeholder="Say something"
                                v-model="message"
                                name="message"
                                v-on:keyup="handleMessageKeyPress">

                            <span class="input-group-btn">
                                <button type="submit" id="send-button" class="btn btn-lg btn-info" @click="sendMessage"
                                    :disabled="disableSend">
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

const messages =  {
    data() {
        return {
            isConnected: false,
            socketMessage: '',
            message: '',
            messageTo: ''
        }
    },

    computed: {
        ...mapGetters({
            messages: 'Messages/getAll',
        }),

        disableSend() {
            if (this.user.role == 'admin') {
                if (!this.messageTo) {
                    return true;
                }
            }

            return (this.message.length) ? false : true;
        }
    },

    components: {
        Message
    },

    sockets: {
        // Fired when the server sends something on the "message" channel.
        message(data) {
            this.appendMessage(data);
        }
    },

    methods: {
        ...mapActions({
            loadMessages: 'Messages/loadAll',
            addNewMessage: 'Messages/addNewMessage',
        }),

        pingServer() {
            // Send the "pingServer" event to the server.
            this.$socket.emit('pingServer', 'PING!')
        },

        sendMessage() {
            let message = this.message;
            let userId = this.user.id;

            if (!message) {
                return;
            }

            let messageData = {
                message: message,
                fromId: userId
            };

            if (this.user.role == 'admin') {
                messageData.toId = this.messageTo;
            }

            this.$socket.emit('message', messageData);
            this.message = "";
        },

        appendMessage(message) {
            let $container = $("#messages-container");

            this.addNewMessage(message).then(() => {
                if ($container)
                    $container.scrollTop($container[0].scrollHeight - $container[0].clientHeight);
            });
        },

        initLoadMessages() {
            let query = {};
            let $container = $("#messages-container");

            if (!this.messageTo) {
                query = {
                    user_id: this.user.id
                };
            } else {
                query = {
                    user_1: this.user.id,
                    user_2: this.messageTo
                }
            }

            this.loadMessages(query)
                .then(() => {
                    if ($container && $container[0])
                         $container.scrollTop($container[0].scrollHeight - $container[0].clientHeight);
                })
                .catch((error) => {
                    alert('An error occurred');
                    console.log(error);
                });
        },

        handleMessageKeyPress(e) {
            if (e.keyCode === 13 && !this.disableSend) {
                this.sendMessage();
            }
        }
    },

    mounted() {
        this.initLoadMessages();

        if (this.user && this.user.role == 'admin') {
            this.initLoadUsers();
        }
    }
};

export default messages;
</script>

<style scoped>
.chatbox {
    font-size: 1.4em;
    height: 50px;
}

#send-button {
    height: 50px;
}

#messages-container {
    padding: 20px;
    max-height: 500px;
    overflow-y: scroll;
    margin-bottom: 30px;
}
</style>