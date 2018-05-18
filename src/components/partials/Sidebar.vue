<template>
    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 sidebar">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 site-logo-container">
                <h3 class="text-center site-logo">Notify</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul class="menu">
                    <router-link :to="{ name: 'messages' }" tag="li" active-class="active" exact>
                        <a>
                            <i class="fa fa-comments-o"></i>
                            <p>Messages</p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'actions' }" tag="li" active-class="active" exact>
                        <a>
                            <i class="fa fa-wrench"></i>
                            <p>Actions</p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'history' }" tag="li" active-class="active" exact>
                        <a>
                            <i class="fa fa-clock-o"></i>
                            <p>History</p>
                        </a>
                    </router-link>

                    <router-link :to="{ name: 'logout' }" tag="li" active-class="active" exact>
                        <a>
                            <i class="fa fa-sign-out"></i>
                            <p>Log Out</p>
                        </a>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>