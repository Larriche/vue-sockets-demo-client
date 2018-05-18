<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-comments-o"></span> Messages</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <message
                    :direction="'incoming'"></message>
                <message
                    :direction="'outgoing'"></message>

                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="input-group">
                                <input type="text" class="form-control chatbox" placeholder="Enter your message" name="search_term">

                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-lg btn-info" id="search-button">
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
import Message from './Message';

export default {
    components: {
        Message
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