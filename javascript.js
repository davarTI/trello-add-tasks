import Card from './components/card.js'
import CInput from './components/c-input.js'

// Instanciando Vue
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: {
    Card,
    CInput
  },
  data: {
    lists: []
  },
  methods: {
    addList(){
      const newList = {
        name: '',
        status: 'creating',
        cards: []
      }
      this.lists.push(newList)
    },
    saveList(list){
      list.status = 'saved'
    },
    removeList(index){
      this.lists.splice(index, 1)
    },
    // addCard(index){
    //   this.lists[index].cards.push()
    // }
    addCard(list){
      const newCard = {
        title: '',
        readonly: false
      }
      const empty = this.verifyEmpty(list)
      if(empty.length){
        alert('No pueden haber tarjetas vacías')
      } else {
        list.cards.push(newCard)
        for (let num = 0; num < list.cards.length - 1; num++) {
          list.cards[num].readonly = true
        }
      }
    },
    verifyEmpty(list){
      const cards = list.cards
      const emptyCards = cards.filter((card) => {
        return card.title == ''
      })
      return emptyCards
    },
    deleteTitle(list, index){
      list.cards.splice(index, 1)
    },
    editTitle(list, index){
      // list.cards[idx].readonly = !list.cards[idx].readonly
      // console.log(list.cards[idx])
      list.cards[index].readonly = false
    },
    saveTitle(list, index){
      list.cards[index].readonly = true
    }
  }
})