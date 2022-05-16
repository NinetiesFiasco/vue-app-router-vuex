<template>
  <div>
    <h1>Store Fields</h1>
    {{booleanField}}<br>
    {{stringField}}<br>
    {{integerField}}<br>
    {{floatField}}<br>
    {{arrayField}}<br>
    {{objectField}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'StoreFields',
  computed: {
    ...mapGetters('subStore', [
      'booleanField',
      'stringField',
      'integerField',
      'floatField',
      'arrayField',
      'objectField'
    ])
  }
}
</script>
