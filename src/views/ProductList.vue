<template>
<div class="container mt-3">
        <div class="row">
            <div class="col-md-6" v-for="product of products" :key="product">

                <SingleProduct @updateList="getProductList()" :product=product />
            </div>

        </div>
    </div>
  
</template>

<script>
import { ContactService } from '@/services/ContactService';
import SingleProduct from './SingleProduct.vue';
import loginManager from '../mixins/LoginManager.js'

export default {
    name: "ProductList",
    components: { SingleProduct },
    mixins: [ loginManager ],
    data: function() {
        return {
            products: [],
        }

    },
    created: async function () {
        this.logoutNotLogged ();

        try {
            this.loading = true;
            let response = await ContactService.getAllProducts();
            this.products = response.data;
            this.loading = false

        }
        catch(error){
            this.errorMessage = error;
            this.loading = false;

        }

    },
    methods: {
        clickDeleteProduct: async function (productId) {
            try {
                this.loading = true;
                let response = await ContactService.deleteProduct(productId);
                if (response) {
                  let response = await ContactService.getAllProducts(); // odswiezanie danych
                  this.products = response.data;
                  this.loading = false;
                }

            }

            catch(error){
                this.errorMessage = error;
                this.loading = false;
            }

        },
        async getProductList () {
            this.loading = true;
            let response = await ContactService.getAllProducts();
            this.products = response.data;
            this.loading = false


        }

        }
    }



</script>

<style>

</style>