<template>
  <div class="col-auto header-right-wrapper page-title" v-if="useRoute().path == '/'">
    <div>
      <h2>Default</h2>
      <nav>
        <ol class="breadcrumb justify-content-sm-start align-items-center mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="breadcrumb-item f-w-500">Dashboard</li>
          <li class="breadcrumb-item f-w-500 active">Default</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="col-auto header-right-wrapper page-title" v-else-if="useRoute().params.sku">
    <div>
      <h2>Product Page</h2>
      <nav>
        <ol class="breadcrumb justify-content-sm-start align-items-center mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/">
              Home
            </nuxt-link></li>
          <li class="breadcrumb-item f-w-500 text-capitalize">ECommerce</li>
          <li class="breadcrumb-item f-w-500 active text-capitalize">Product Page</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="col-auto header-right-wrapper page-title" v-else-if="useRoute().params.id">
    <div>
      <h2>Job Details</h2>
      <nav>
        <ol class="breadcrumb justify-content-sm-start align-items-center mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/">
              Home
            </nuxt-link></li>
          <li class="breadcrumb-item f-w-500 text-capitalize">Job Search</li>
          <li class="breadcrumb-item f-w-500 active text-capitalize">Job Details</li>
        </ol>
      </nav>
    </div>
  </div>
  <div class="col-auto header-right-wrapper page-title" v-else>
    <div>
      <h2 class=" text-capitalize">{{ useRoute().path.split('/')[useRoute().path.split('/').length - 1].replace('_', ' ')
      }}
      </h2>
      <nav>
        <ol class="breadcrumb justify-content-sm-start align-items-center mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/"> Home</nuxt-link></li>
          <li class="breadcrumb-item f-w-500 text-capitalize">{{ useRoute().path.split('/').slice(1)[0].replace('_', ' ')
          }}
          </li>
          <li class="breadcrumb-item f-w-500 active text-capitalize">
            {{ useRoute().path.split('/')[useRoute().path.split('/').length - 1].replace('_', ' ') }}</li>
        </ol>
      </nav>
    </div>
  </div>
</template>
