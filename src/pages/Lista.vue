<template>
  <q-pages padding>
    <div class="container q-pa-md" v-for="doenca in doencas" :key="doenca.id">
      <div class="box-card">
        <q-card class="my-card">
          <img :src="doenca.imagem" />

          <q-card-section>
            <div class="text-h6">{{doenca.nome}}</div>
            <div class="text-subtitle2">{{doenca.categoria}}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">{{doenca.descricao}}</q-card-section>
          <div class="text-subtitle2">Recomendação : {{doenca.recomendacao}}</div>
        </q-card>
      </div>
    </div>
  </q-pages>
</template>
<script>
export default {
  data() {
    return {
      doencas: {}
    };
  },
  created(){
    this.$axios.get("http://localhost:8081/doenca")
      .then((res) => {
        this.doencas = res.data
        console.log(this.doencas)
      })
  }
};
</script>
