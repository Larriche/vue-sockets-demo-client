<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-clock-o"></span> History</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Message</th>
                        <th>Author</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="activity in activities">
                        <td>{{ activity.created_at | formattedDateTime }}</td>
                        <td>{{ activity.type }}</td>
                        <td>{{ getActivityMessage(activity) }}</td>
                        <td>{{ getActivityAuthor(activity) }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            activities: 'Activities/getAll',
        })
    },

    methods: {
        ...mapActions({
            loadActivities: 'Activities/loadAll',
        }),

        initLoadActivities(query = {}) {
            query = {
                user_id: this.user.id
            };

            this.loadActivities(query)
                .catch((error) => {
                    alert('An error occurred');
                });
        },

        getActivityMessage(activity) {
            if (activity.type == 'message') {
                return activity.message;
            } else if(activity.type == 'command') {
                return '{"eval": "' + activity.message + '"}';
            } else if(activity.type == 'statistic') {
                return '{"type": "' + activity.subType + '", "action": ' + activity.message + '"}';
            } else {
                return 'hello'
            }
        },

        getActivityAuthor(activity) {
            if (activity.fromId == this.user.id) {
                return 'Me';
            } else {
                return activity.Author.name;
            }
        }
    },

    mounted() {
        this.initLoadActivities();
    }
};
</script>