export const textMixin = {
    computed: {        
        counted() {
            return this.text + ' (' + this.text.length + ')';
        }
    },
};