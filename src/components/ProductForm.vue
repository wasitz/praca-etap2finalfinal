<template>
    <form @submit.prevent="submitCreate()">
        <div class="col-md-4">
        <img :src="product.photo" alt="" class="product-img">
      </div>
          <div class="mb-2" ref="nameDivRef">
            <input type="text" v-model="product.name" class="form-control" placeholder="Nazwa">
          </div>
              <span class="errorForm" ref="nameSpanRef">To pole musi być uzupełnione!</span>

          <div class="mb-2" ref="priceDivRef">
            <input type="number" v-model="product.price" class="form-control" placeholder="Cena">
          </div>
            <span class="errorForm" ref="priceSpanRef">Ta cena musi być większa od 0!</span>


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
</template>

<script>
export default {
    name: "ProductForm",
    data: function () {
        return {
            product: {
                name: "",
                price: "",
                code: "",
                photo: "",
                groupId: "",
                desc: "",
            },
            groups: []
        };
    },
    props: {
         product: Object
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

        },
            updateSubmit: async function () {
      if (this.validForm()) {
        try {
          let response = await ContactService.updateProduct(this.product, this.productId);
          if(response) {
            return this.$router.push('/products');

          } else {
            return this.$router.push('/products/edit/${this.productId}');
          }
        }
        catch(error){
          console.log(error)
        }
      }
    },
    validForm() {
      let formIsValid = true;

      if (!this.validName()){
         formIsValid = false;
      }
      if (!this.validPrice()){
         formIsValid = false;
      }
      
      return formIsValid


    },
    validName() {
      if(this.product.name == "") {
        this.$refs.nameDivRef.classList.add('error');
        this.$refs.nameSpanRef.classList.add('errorSpan');
        console.log('nazwa');
        return false
      }

      this.$refs.nameDivRef.classList.remove('error');
      this.$refs.nameSpanRef.classList.remove('errorSpan');
      return true

    },
    validPrice() {
      if(this.product.price < 10)  {
        this.$refs.priceDivRef.classList.add('error');
        this.$refs.priceSpanRef.classList.add('errorSpan');
        console.log('cena');

        return false        
      }

      this.$refs.priceDivRef.classList.remove('error');
      this.$refs.priceSpanRef.classList.remove('errorSpan');
      return true


    },

  },
    created: async function () {
        try {
            let response = await ContactService.getAllGroups();
            this.groups = response.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    watch: {
    product: {
      handler() {
        this.validForm()
      },
     deep: true


    },

  }


}
</script>

<style scoped>
  .error {
    border: 2px solid red;
  }

  div span.errorForm {
    display: none;
  }
    div span.errorForm.errorSpan {
    color: red;
    display: block;
  }

</style>