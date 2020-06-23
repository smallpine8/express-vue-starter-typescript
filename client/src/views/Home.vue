<template>
    <div class="home">
      <hello-world
        msg="Hello Vue.js with TypeScript"
      />
    </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import HelloWorld from "@/components/HelloWorld.vue";

  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Home extends Vue {}
</script>