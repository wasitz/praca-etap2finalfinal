<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">Dodaj produkt.</p>
        <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores amet omnis voluptatem cupiditate ipsum cum!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input required type="text" v-model="product.name" class="form-control" placeholder="Nazwa">
          </div>
          <div class="mb-2">
            <input required type="number" v-model="product.price" class="form-control" placeholder="Cena">
          </div>
          <div class="mb-2">
            <input required type="text" v-model="product.code" class="form-control" placeholder="Kod produktu">
          </div>
          <div class="mb-2">
            <input type="text" v-model="product.photo" class="form-control" placeholder="Zdjęcie URL">
          </div>
          <div class="mb-2">
            <select class="form-control" v-model="product.groupId" v-if="groups.length > 0">
              <option value="">Wybierz grupę</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="text" v-model="product.desc" class="form-control" placeholder="Opis">
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Dodaj">
          </div>
        </form>

      </div>
      <div class="col-md-4">
        <img :src="product.photo" alt="" class="product-img">
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
export default {
  name: "AddProduct",
  data: function () {
    return {
      product: {
        name: '',
        price: '',
        code: '',
        photo: '',
        groupId: '',
        desc: '',

      },
      groups: [

      ]
    }
  },
  created: async function () {
    try {
      let response = await ContactService.getAllGroups();
      this.groups = response.data;

    }
    catch (error){
      console.log(error);
    }
  },
  methods: {
    submitCreate : async function () {
      try {
        let response = await ContactService.createProduct(this.product);
        if(response) {
          return this.$router.push('/products');

        } else {
          return this.$router.push('/products/add')
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