<template>
  <q-page padding>
    <div class="q-pa-md row items-stretch">

      <div class="card shadow-1">
        <img src="https://i.imgur.com/0umadnY.jpg" width="198" height="180">
        <div class="card-content">
          <h1 class="text-primary">Burger</h1>
          <p>Un hamburger est un sandwich composé d'une ou plusieurs
            tranches de viande hachée, généralement du bœuf, placées
            dans un petit pain ou une brioche.</p>
          <p>
            <small>
              <b>Note:</b>
            </small>
            <b class="text-primary">
              4/5
            </b>
          </p>
        </div>
      </div>
      <div class="card shadow-1">
        <img src="https://i.imgur.com/b9zDbyb.jpg"
             width="198" height="180">
        <div class="card-content">
          <h1 class="text-primary">Pizza</h1>
          <p>La pizza est un plat savoureux d'origine italienne, consistant
            en une base généralement ronde et aplatie de
            pâte levée à base de blé.</p>
          <p>
            <small>
              <b>Note:</b>
            </small>
            <b class="text-primary">
              5/5
            </b>
          </p>
        </div>
      </div>
      <div class="card shadow-1">
        <img src="https://i.imgur.com/RbKjUjB.jpg"
             width="198" height="180">
        <div class="card-content">
          <h1 class="text-primary">Petits choux</h1>
          <p>Le chou de Bruxelles est une variété de chou, plante herbacée
            de la famille des Brassicaceae. C’est vraiement pas bon...</p>
          <p>
            <small>
              <b>Note:</b>
            </small>
            <b class="text-primary">
              1/5
            </b>
          </p>
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      plats: [
        // vos objets plats
      ]
    }
  }
}
</script>

<style>
.card {
  flex-basis: 210px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.card img {
  max-width: 100%;
}
.card-content {
  padding: 0 10px;
}
h1 {
  font-size: 23px;
}
p {
  font-size: 14px;
}
</style>
