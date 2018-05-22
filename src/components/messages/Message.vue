<template>
    <div class="row message-container">
        <div :class="messageClass">
            <p>{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['message'],

    computed: {
        messageClass() {
            let direction = 'incoming';

            if (direction == 'incoming') {
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
    height: 50px;
    padding: 10px;
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
</style>