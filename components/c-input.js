export default{
    template: `<input class="form-control" placeholder="Descripción de la tarjeta" style="width: 100%" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" :readonly="readonly">`,
    props: ['value', 'readonly']
}

/* <input v-model="card.title" class="form-control" placeholder="Descripción de la tarjeta" style="width: 90%" :readonly="card.readonly"> */