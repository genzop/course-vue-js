<template>
    <div>                   
        <div class="form-group">
            <label for="email">First Name</label>
            <input type="text" class="form-control" :value="firstName" @input="changeName(true, $event)">
        </div>                              
        <div class="form-group">
            <label for="email">Last Name</label>
            <input type="text" class="form-control" :value="lastName" @input="changeName(true, $event)">
        </div>                         
    </div>
</template>

<script>
    export default {
        props: {
            value: String,
        },
        computed: {
            names() {
                return this.value.split(' ');
            },
            firstName() {                
                return this.names[0];
            },
            lastName() {                
                return this.names.length > 1 ? this.names[1] : '';
            }
        },
        methods: {
            changeName(isFirst, event) {
                let name = '';
                if(isFirst) {
                    name = event.target.value + ' ' + this.lastName; 
                } else {
                    name = this.firstName + ' ' + event.target.value; 
                }
                this.$emit('input', name);
            }
        },
    }
</script>