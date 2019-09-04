export default{
    template: `<input class="form-control" placeholder="Nombre de la lista" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">`,
    props: ['value']
}

/*  <input v-model="list.name" class="form-control" placeholder="Nombre de la lista"> */ 