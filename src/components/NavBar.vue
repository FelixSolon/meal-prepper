<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Prepper</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <router-link class="spacing navbar-nav mr-auto" v-for="routes in links" 
            v-bind:key="routes.id"
            :to="`${routes.page}`">
            <li class="nav-item active">
                <span class="nav-link" href="#">{{routes.text}}</span>
            </li>
        </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
        links: [
            {
            id: 1,
            text: 'Home',
            page:'/'
            },
            {
            id: 2,
            text: 'About',
            page:'/About'
            },
            {
            id: 3,
            text: 'Plan',
            page:'/Plan'
            }
        ]
        }
    }
}
</script>

<style>

</style>