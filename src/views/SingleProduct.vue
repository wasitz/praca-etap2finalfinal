<template>
    <div class="card my-2 shadow-lg" >
        <div class="card-body">
            <div class="row align-items-center">
                <div class="col-sm-4">
                    <img :src="product.photo" alt="" class="product-img">
            
                </div>
                <div class="col-sm-7">
                    <ul class="list-group">
                        <li class="list-group-item">Nazwa: <span class="fw-bold">{{ product.name }}</span></li>
                        <li class="list-group-item">Cena: <span class="fw-bold">{{ product.price }}zł</span></li>
                        <li class="list-group-item">Kod: <span class="fw-bold">{{ product.code }}</span></li>
                    </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                    <router-link :to="`/products/view/${product.id}`" class="btn btn-secondary my-1"><i class="fa fa-eye"></i></router-link>
                    <router-link :to="`/products/edit/${product.id}`" class="btn btn-primary my-1"><i class="fa fa-pen"></i></router-link>
                    <button class="btn btn-danger my-1" @click="clickDeleteProduct(product.id)">
                        <i class="fa fa-trash"></i>
                    </button>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ContactService } from '@/services/ContactService';
  
export default {
        data: function() {
        return {
        }

    },
    props: {
         product: Object
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
        }

        }
    }
    </script>
    
<style>

</style>