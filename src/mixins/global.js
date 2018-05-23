import { mapGetters, mapActions } from 'vuex';
import Partials from '../components/partials';

export default {
    computed: {
        ...mapGetters({
            user: 'Auth/getUser',
            users: 'Users/getAll'
        })
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
        this.initLoadUsers();
    }
};