<template>
  <input name="file" ref="file" multiple/>
</template>

<script>
// Used Filepond Javascript version (Not Vue.js)
// https://pqina.nl/filepond/docs/getting-started/installation/javascript/

import * as Filepond from 'filepond';

export default {
  mounted () {
    const pond = Filepond.create(this.$refs.file);
  },
}
</script>