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
      <div class="col-12">

        <ProductForm :productProps=product />
      </div>

    </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService'
import ProductForm from '@/components/ProductForm.vue';
import loginManager from '@/mixins/LoginManager';

export default {
    name: "EditProduct",
    components: { ProductForm },
    mixins: [ loginManager ],
    data() {
        return {
            productId: this.$route.params.productId,
            loading: false,
            product: {},
            errorMessage: null,
            groups: [],
        };
    },
    created: async function () {
       this.logoutNotLogged ();
        try {
            this.loading = true;
            let response = await ContactService.getProduct(this.productId);
            let groupResponse = await ContactService.getAllGroups();
            this.product = response.data;
            this.groups = groupResponse.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {},
}
</script>

