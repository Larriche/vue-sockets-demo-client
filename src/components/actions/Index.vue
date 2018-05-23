<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-wrench"></span> Actions</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <div class="form-group">
                    <input type="radio"
                        data-name="radiobutton"
                        @click="sendStatistic($event, 'radiobutton_clicked')">
                    <label>Radiobutton</label>
                </div>

                <div class="form-group">
                    <select class="form-control"
                        @change="sendStatistic($event, 'select_changed')">
                        <option>Select an item</option>
                        <option value="one">Option One</option>
                        <option value="two">Option Two</option>
                    </select>
                </div>

                <div class="form-group">
                    <input type="checkbox"
                        data-name="checkbox1"
                        @click="sendStatistic($event, 'checkbox_clicked')">
                    <label>Checkbox 1</label>
                </div>

                <div class="form-group">
                    <input type="checkbox"
                        data-name="checkbox2"
                        @click="sendStatistic($event, 'checkbox_clicked')">
                    <label>Checkbox 2</label>
                </div>

                <div class="form-group">
                    <button class="btn btn-md btn-success"
                        @click="sendStatistic($event, 'action_button_click')"
                        @dblclick="sendStatistic($event, 'action_button_double_click')">Action Button</button>
                </div>

                <div class="form-group">
                    <input type="number" class="form-control">
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
        })
    },

    methods: {
        sendStatistic(event, action) {
            let target = event.target;

            if (action == 'checkbox_clicked') {
                let $target = $(target);
                let name = $target.data('name');

                if ($target.is(':checked')) {
                    action = name + '_checked';
                } else {
                    action = name + '_unchecked';
                }
            }

            let statistic = {
                type: 'event',
                fromId: this.user.id,
                action
            };

            this.$socket.emit('statistic', statistic);
        }
    }
}
</script>