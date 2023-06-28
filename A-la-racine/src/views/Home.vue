<script setup>
import Menu from "/src/components/Menu.vue";
</script>

<template>
  <Menu />

    <div class="p-3 flex flex-row items-center justify-center" id="title">
      Un moment autour de la science de <br />
      l'alimentation & de la cuisine
    </div>
  <div class="flex flex-col justify-center blockMain">
    <div class="flex flex-row justify-center items-center">
      <div>
        <img
          id="girlSmiling"
          src="../assets/imgs/girl_smiling.jpg"
          alt="Girl Smiling"
        />
        <div class="imgTexts pt-2">Eva Merle</div>
        <div class="imgTexts">Diététicienne - Nutritionniste</div>
        <div class="imgTexts" id="imgTextFonction">
          Alimentation végétale & le microbiote intestinal
        </div>
      </div>

      <div class="w-1/2 pb-14" id="textMain">
        "Votre organisme est unique. Partant de ce principe, il est important de
        personnaliser au maximum nos échanges. Nous allons étudier ensemble sa
        constitution, l'impact des éléments antérieurs et actuels qui jouent sur
        ses mécanismes et sa composition, trouver le ou les chemins qui vous
        conviennent, adapter à vos envies et vos besoins. L'Alimentation, avec
        un grand A, est enchainement sans fin d'une porte ouverte sur une autre.
        Mon rôle sera de vous apporter le maximum de clés de compréhension,
        théoriques mais aussi pratiques."
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  color: white;
  font-family: "Sailors";
  font-style: italic;
  text-align: center;
  font-size: 2em;
  font-weight: 600;
  background-color: #ff4500;
  height:18vh;
}

#girlSmiling {
  height: 40vh;
}

.imgTexts {
  color: #ff4500;
  font-weight: 600;
  font-size: 0.9em;
}

#imgTextFonction {
  font-style: italic;
}

#textMain {
  color: #ff4500;
  font-weight: 300;
  font-size: 1.2em;
}

.blockMain {
  height: 62vh;
}
</style>
