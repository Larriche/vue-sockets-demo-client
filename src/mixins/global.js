import { mapGetters, mapActions } from 'vuex';
import Partials from '../components/partials';

export default {
    computed: {
        ...mapGetters({
            user: 'Auth/getUser',
            users: 'Users/getAll'
        })
    },

    filters: {
        formattedDate(value) {
            let date = moment(value);

            return date.isValid() ? date.format('ddd Do MMM, YYYY') : value;
        },

        formattedDateTime(value) {
            let date = moment(value);

            return date.isValid() ? date.format('ddd Do MMM, YYYY hh:mm:A') : value;
        }
    },

    methods: {
        ...mapActions({
            loadUsers: 'Users/loadAll',
        }),

        initLoadUsers(query = {}) {
            this.loadUsers(query)
                .catch((error) => {
                    alert('An error occurred');
                });
        }
    },

    mounted() {
        let adminPages = ['commands', 'users'];
        let currentRoute = this.$route.name;

        if (this.user && this.user.role != 'admin') {
            if (adminPages.indexOf(currentRoute) >= 0) {
                this.$router.push({ name: 'messages' });
            }
        }
    }
};