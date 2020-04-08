<template>
    <li class="list-group-item" style="cursor: pointer" @click="select">
        Server #{{ server.id }}
    </li>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        props: {
            server: Object
        },
        methods: {
          select() {
              eventBus.$emit('serverSelected', this.server);
          }  
        },
    }
</script>