<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">Szczegóły produktu.</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam unde ratione sint iusto harum neque esse odio voluptas rerum dolore sequi at totam, illo aspernatur accusamus cupiditate repellendus ea?</p>
      </div>
    </div>

<!-- Spinner  -->
<div v-if="loading">
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <Spinner />
        </div>
    </div>
</div>
</div>
<!-- Error -->
<div v-if="!loading && errorMessage">
<div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h4 text-danger fw-bold">{{errorMessage}}</p>
        </div>
    </div>
</div>
</div>

    <div class="container" v-if="!loding && isDone()">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img :src="product.photo" alt="product-img" class="product-img-big">
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Nazwa: <span class="fw-bold">{{product.name}}</span></li>
            <li class="list-group-item">Cena: <span class="fw-bold">{{product.price}}</span></li>
            <li class="list-group-item">Kod: <span class="fw-bold">{{product.code}}</span></li>
            <li class="list-group-item">Grupa: <span class="fw-bold">{{group.name}}</span></li>
            <li class="list-group-item">Opis: <span class="fw-bold">{{product.desc}}</span></li>
          </ul>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <router-link to="/" class="btn btn-primary"><i class="fa fa-arrow-alt-circle-left"></i> Powrót</router-link>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import { ContactService } from '@/services/ContactService'
import Spinner from '@/components/Spinner.vue'

export default {
  name: "ViewProduct",
  components: { Spinner },
  data() {
    return {
      productId: this.$route.params.productId,
      loading: false,
      product: {},
      errorMessage: null,
      group: {}
    }
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getProduct(this.productId);
      let groupResponse = await ContactService.getGroup(response.data);
      this.product = response.data;
      this.group = groupResponse.data;
      this.loading = false;

    }

    catch(error){
      this.errorMessage = error;
      this.loading = false;

    }
  },
  methods: {
    isDone() {
      return Object.keys(this.product).length > 0 && Object.keys(this.group).length >0;
    }
  }

}
</script>

<style>

</style>