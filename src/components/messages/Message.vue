<template>
    <div class="row message-container">
        <div :class="messageClass">
            <p class="sender">
                On {{ message.createdAt | formattedDateTime }}, {{ getAuthorName(message.Author) }} wrote
            </p>

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
                return 'message incoming';
            } else {
                return 'message outgoing';
            }
        }
    },

    methods: {
        getAuthorName(author) {
            if (author.id == this.userId) {
                return 'you';
            } else {
                return author.name;
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