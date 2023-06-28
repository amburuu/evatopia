<script setup>
import Menu from "/src/components/Menu.vue";
</script>

<template>
  <Menu />
  <div id="title" class="text-center">Tarifs consultations</div>
  <div class="flex flex-row justify-between" style="width:70%; margin: auto;">
    <ul class="list-disc list-inside" style="width:60%">
      <li>1ère consultation (1h30) : 80€</li>
      <li>Consultations théorique (1h) : 45€</li>
      <li>Consultations Pratique (2h) : 90€</li>
      <li>Consultations Pratique (3h) : 120€</li>
      <li>Consultations suivi (30min - 1h) : 35€</li>
    </ul>
    <div id="blockForfait">
      <div>
        FORFAIT COMPLET (1ère consultation + 2 consultations théoriques + 3
        consultations pratiques de 2h) : 390€
      </div>
      <div>
        Forfait personnalisé : sur devis. <br />Les consultations peuvent être
        remboursées intégralement ou partiellement par votre mutuelle.
        <div>
          Voici, à titre d’exemple, des mutuelles remboursant les consultations
          diététiques :
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#title {
  font-family: "Sunborn";
  font-size: 2em;
  color: white;
  background-color: #ff4500;
  padding: 20px;
}
li {
  color: #ff4500;
}
#blockForfait{
    color: #ff4500;
}
</style>
