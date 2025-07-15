<template>
    <CommonCard3 colClass="col-xxl-3 col-lg-4 col-sm-6 col-12" cardClass="title-line" cardheaderClass=" height-equal"
        cardbodyClass=" btn-showcase" pre="true" preClass="f-m-light mt-1" headerTitle="true" title="AJAX Request Movie"
        :desc="desc">
        <button class="btn btn-secondary sweet-15" type="button" @click="movieAlert()">Movie mode</button>
    </CommonCard3>
</template>
<script lang="ts" setup>
const swal = inject("$swal")
let desc = ref<string>("Give the movie name & return value.")
function movieAlert() {
    swal.fire({
        text: 'Search for a movie. e.g. "Herry Poter".',
        input: "text",
    })
        .then((name) => {
            if (!name) throw null;

            return fetch(
                `https://itunes.apple.com/search?term=${name.value}&entity=movie`
            );
        })
        .then((results) => {
            return results.json();
        })
        .then((json) => {
            const movie = json.results[0];

            if (!movie) {
                return swal.fire("No movie was found!");
            }
            const name = movie.trackName;
            const imageURL = movie.artworkUrl100;
            swal.fire({
                imageUrl: imageURL,
                text: name,
            });
        })
        .catch((err) => {
            if (err) {
                swal.fire("Oh noes!", "The AJAX request failed!", "error");
            }
        });
}
</script>