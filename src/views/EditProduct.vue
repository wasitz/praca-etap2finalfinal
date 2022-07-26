<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">Edytuj produkt.</p>
        <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, ducimus. Corrupti magnam quaerat aperiam deserunt suscipit sequi, ad sint soluta odio necessitatibus, ex ducimus? Enim expedita placeat quidem repellat inventore!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <form @submit.prevent="updateSubmit()">
          <div class="mb-2">
            <input required type="text" v-model="product.name" class="form-control" placeholder="Nazwa">
          </div>
          <div class="mb-2">
            <input required type="text" v-model="product.price" class="form-control" placeholder="Cena">
          </div>
          <div class="mb-2">
            <input required type="text" v-model="product.code" class="form-control" placeholder="Kod produktu">
          </div>
          <div class="mb-2">
            <input type="text" v-model="product.photo" class="form-control" placeholder="Zdjęcie URL">
          </div>
          <div class="mb-2">
            <select v-model="product.groupId" class="form-control" v-if="groups.length > 0">
              <option value="">Wybierz grupę</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="text" v-model="product.desc" class="form-control" placeholder="Opis">
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Zaktualizuj">
          </div>
        </form>

      </div>
      <div class="col-md-4">
        <img :src="product.photo" alt="product-img" class="product-img">
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
  name: "EditProduct",
  data() {
    return {
      productId: this.$route.params.productId,
      loading: false,
      product: {
        name: '',
        price: '',
        code: '',
        photo: '',
        groupId: '',
        desc: '',

      },
      errorMessage: null,
      groups: [],
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getProduct(this.productId);
      let groupResponse = await ContactService.getAllGroups();
      this.product = response.data;
      this.groups = groupResponse.data;
      this.loading = false;
    }
    catch(error) {
      this.errorMessage = error;
      this.loading = false;

    }
  },
  methods: {
    updateSubmit: async function () {
      try {
        let response = await ContactService.updateProduct(this.product, this.productId);
        if(response) {
          return this.$router.push('/');

        } else {
          return this.$router.push('/products/edit/${this.productId}');
        }
      }
      catch(error){
        console.log(error)
      }

    }
  }

}
</script>

<style>

</style>