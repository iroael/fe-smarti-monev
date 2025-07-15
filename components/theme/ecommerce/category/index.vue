<template>
   <div class="list-product list-category">
        <slot/>
        <table class="table datatable-table" id="project-status">
            <thead> 
                <tr> 
                <th>
                    <div class="form-check"> 
                        <input class="form-check-input checkbox-primary" type="checkbox">
                    </div>
                </th>
                <th @click="sortBy('name')"> <span class="f-light f-w-600">Category</span></th>
                <th @click="sortBy('category')"> <span class="f-light f-w-600">Description</span></th>
                <th @click="sortBy('status')"> <span class="f-light f-w-600">Category Type</span></th>
                <th> <span class="f-light f-w-600">Action</span></th>
                </tr>
            </thead>
            <tbody>
                <tr class="product-removes" v-for="(item , index) in sortedData" :key="index">
                    <td>
                        <div class="form-check"> 
                        <input class="form-check-input checkbox-primary" type="checkbox">
                        </div>
                    </td>
                    <td> 
                        <div class="product-names">
                        <div class="light-product-box"><img class="img-fluid" :src="'/images/'+item.image" alt="t-shirt"></div>
                        <p>{{item.name}}</p>
                        </div>
                    </td>
                    <td> 
                        <p class="f-light">{{item.category}}</p>
                    </td>
                    <td> <span class="badge" :class="item.color">{{item.status}}</span></td>
                    <td> 
                        <div class="product-action">
                        <svg>    
                            <use href="/svg/icon-sprite.svg#edit-content"></use>
                        </svg>
                        <svg>
                            <use href="/svg/icon-sprite.svg#trash1"></use>
                        </svg>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
   <slot name="bottom" />
   </div>
</template>
<script setup lang="ts">
interface category{
    image:string,
    name:string,
    category:string,
    color:string,
    status:string
  }
interface myProps{
    Data:category[]
}
let props = defineProps<myProps>()
let sortedColumn = ref('');
let sortOrder = ref('');
const sortedData = computed(() => {
  if (!sortedColumn.value) return props.Data;
  return props.Data.slice().sort((a, b) => {
    const aValue = a[sortedColumn.value];
    const bValue = b[sortedColumn.value];
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortOrder.value === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }
    return sortOrder.value === 'asc' ? aValue - bValue : bValue - aValue;
  });
});
function sortBy(column:string){
    sortedColumn.value = column;
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
}

</script>