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
      <div class="col-12">
        <ProductForm />
        
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm.vue';
import loginManager from '@/mixins/LoginManager';

export default {
    name: "AddProduct",
    components: { ProductForm },
    mixins: [ loginManager ],
    data() {
        return {
            product: {},

        };
    },

    created: async function () {
        this.logoutNotLogged ();
    }
}

</script>

<style>

</style>