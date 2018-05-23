<template>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page-title">
                <h1><span class="fa fa-user"></span> Users</h1>
            </div>
        </div>

        <div class="row page-body">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Joined</th>
                        <th>Last Visit</th>
                        <th>Last Activity</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="user in users">
                        <td>{{ user.name }}</td>
                        <td>{{ user.created_at ? user.created_at : 'N/A'}}</td>
                        <td>{{ user.last_visit ? user.last_visit : 'N/A'}}</td>
                        <td>{{ user.last_activity ? user.last_activity : 'N/A'}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>