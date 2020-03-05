<template>
  <q-page padding>
    <div class="container q-pa-md">
      <div>
        <h4 class="text-center">Editar {{doenca.nome}}</h4>
        <q-form>
          <div class="q-gutter-y-md column">
            <q-input outlined v-model="doenca.nome" label="Nome da doença" />

            <q-select outlined v-model="doenca.categoria" :options="options" label="planta" />

            <div class="q-pa-md" style="max-width: 400px">
              <q-input
                v-model="doenca.descricao"
                filled
                type="textarea"
                label="descrição/Sintomas"
              />
            </div>

            <q-input outlined v-model="doenca.recomendacao" label="Recomendações" />

            <q-input outlined v-model="doenca.imagem" label="Imagem" />
            <!-- <q-file outlined v-model="model" label="imagem" @change="viewImg">
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>-->
            <!-- submit -->
            <q-btn label="Cadastrar Doença" @click="cadastrar()" color="primary" />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      doenca: {
        nome : '',
        categoria : '',
        descricao : '',
        recomendacao : '',
        imagem : '',

      },
      options: ["alface", "mamão", "milho", "soja"]
    };
  },
  methods: {
    async getDoenca(){
      const id = this.$route.params.id;
      const res = await this.$axios.get("http://localhost:8081/doenca/"+id)
      this.doenca = res.data[0];
      console.log(this.doenca)
    },

    cadastrar() {
      const formData = new FormData();

      formData.append("imagem", this.doenca.imagem);
      formData.append("nome", this.doenca.nome);
      formData.append("descricao", this.doenca.descricao);
      formData.append("categoria", this.doenca.categoria);
      formData.append("recomendacao", this.doenca.recomendacao);

      this.$axios.post("http://localhost:8081/doenca", formData)
        .then(function(res){
          console.log(res)
      })
    }
  },
  created(){
    this.getDoenca();
  }
};
</script>
