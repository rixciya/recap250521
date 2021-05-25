<template>
  <q-page padding>
    <div class="form q-mb-lg">
      <div class="row q-mb-md">
        <label>Nom:</label>
        <input type="text"
               v-model="name"
               v-autofocus
               :class="{'error': !nameIsValid}">
        <label v-show="!nameIsValid"
               class="error">Maximum 15 caractères
        </label>
      </div>
      <div class="row q-mb-md">
        <label>Age:</label>
        <input type="number"
               v-model="age"
               :class="{'error': !ageIsValid}">
        <label v-show="!ageIsValid"
               class="error">Veuillez entrer un âge compris entre 1 et 100</label>
      </div>
      <div class="row">
        <button @click="randomPerson">Générer une personne</button>
      </div>
    </div>
    <div v-if="nameIsValid && ageIsValid"
      class="description q-mb-lg">
      <p>Mon nom est <b>{{ name }}</b> et j'ai <b>{{age}}</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>{{futureAge}}</b> ans.</p>
      <p>Mon nom se compose de <b>{{ name.length }}</b> caractères.</p>
      <p>Mon nom en majuscules est <b>{{name|uppercase}}</b>.</p>
    </div>
    <div v-else
         class="no-details">
      <p>Veuillez entrer un nom et un âge valide !</p>
    </div>
  </q-page>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const names = [
  'Bürki',
  'Dahmani',
  'Glück',
  'Tirole',
  'Waram'
]

export default {
  name: 'PageEx1',
  data () {
    return {
      name: '',
      age: ''
    }
  },
  computed: {
    futureAge () {
      return parseInt(this.age) + 10
    },
    nameIsValid () {
      return this.name.length > 0 && this.name.length <= 15
    },
    ageIsValid () {
      return this.age > 0 && this.age < 101
    }
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  },
  methods: {
    randomPerson () {
      this.name = names[Math.floor(Math.random() * names.length)]
      this.age = Math.floor(Math.random() * 100)
    }
  },
  mounted () {
    this.randomPerson()
  },
  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}

</script>

<style>
.form {
  background: #eee;
  padding: 10px;
}
label {
  min-width: 70px;
}
label.error {
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 3px;
}
input {
  border: 1px solid #ccc;
}
input.error {
  border: 1px solid red;
  background: pink;
}
.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}
.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>
