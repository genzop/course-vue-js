// Mixins: permiten reutilizar codigo utilizado en diferentes lugares. Se debe exportar un objeto con las propiedas a reutilizar como una constante.
export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Strawberry'],
            filter: '',
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((fruit) => {
                return fruit.match(this.filter);
            });
        }
    },
    created() {
        console.log('Created!');
    },
}