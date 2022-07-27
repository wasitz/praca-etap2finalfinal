<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold">Katalog Produktów
                    <router-link to="/products/add" class="btn btn-warning btn-sm"><i class="fa fa-plus-circle"></i> Nowy</router-link>
                    </p>
                    <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam porro. Suscipit, vero a! Odio perspiciatis provident sunt unde nobis. Ipsa saepe animi sapiente asperiores ipsam hic veniam quia illum.</p>

            </div>
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

    <div class="container mt-3" v-if="products.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="product of products" :key="product">
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
            </div>

        </div>
    </div>

    <!-- Modal - próbowałem dodać jako potwierdzenie usuwania pozycji, ale nie działał mi "Usuń" tutaj, pewnie coś z product.id?  -->
    <!-- <div class="modal fade" id="modalDanger" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">UWAGA!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Czy na pewno chcesz usunąć produkt?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>
        <button type="button" class="btn btn-danger" @click="clickDeleteProduct(product.id)">Usuń</button>
      </div>
    </div>
  </div>
</div> -->
</template>

<script>
import { ContactService } from '@/services/ContactService';
import Spinner from '@/components/Spinner.vue'


export default {
    name: "ProductManager",
    components: { Spinner },
    data: function() {
        return {
            loading: false,
            products: [],
            errorMessage: null
        }

    },
    created: async function () {
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
        }

        }
    }


</script>

<style>

</style>