<template>
    <div class="demo-option">
        <md-speed-dial :class="topPosition" md-direction="bottom">
            <md-speed-dial-target class="md-primary">
                <md-icon>reorder</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <router-link to="/">
                    <md-button class="md-icon-button">
                    <md-icon>home</md-icon>
                    </md-button>
                </router-link>

                <router-link to="/NewRestaurant">
                    <md-button class="md-icon-button">
                    <md-icon>add</md-icon>
                    </md-button>
                </router-link>

                <router-view></router-view>
            </md-speed-dial-content>
        </md-speed-dial>
    </div>
</template>


<script>
export default {
    name: "Redirection",
    data: () => ({
        topPosition: 'md-top-right'
    })
}
</script>

<style scoped>
    .demo-option {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: calc(100%);
        z-index: 10000;
    }
    .select {
      margin: 0 6px;
      display: inline-flex;
      width: auto;
    }
    .md-icon-button {
        background-color: ivory;
    }
  
</style>