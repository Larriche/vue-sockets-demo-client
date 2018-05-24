<template>
    <div class="row message-container">
        <div :class="messageClass">
            <p class="sender" v-if="direction=='incoming'">{{ message.Author.name }}</p>
            <p>{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message', 'userId'],

    computed: {
        direction() {
            if (this.message.fromId == this.userId) {
                return 'outgoing';
            } else {
                return 'incoming';
            }
        },

        messageClass() {
            if (this.direction == 'incoming') {
                return 'message incoming col-lg-6 col-md-6 col-xs-12';
            } else {
                return 'message outgoing col-lg-6 col-md-6 col-xs-12 col-lg-offset-6 col-md-offset-6';
            }
        }
    }
}
</script>

<style scoped>
.message {
    padding: 15px;
    color: white;
    border-radius: 10px;
    font-size: 1.3em;
}

.message-container {
    margin-bottom: 30px;
}

.incoming {
    background: green;
}

.outgoing {
    background: lightseagreen;
}

.sender {
    font-size: 0.8em;
}
</style>