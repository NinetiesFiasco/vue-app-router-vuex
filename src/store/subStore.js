export default {
  namespaced: true,
  state: () => ({
    booleanField: true,
    stringField: 'string',
    integerField: 5,
    floatField: 7.777,
    arrayField: ['one', 'two', 'three'],
    objectField: {
      one: 'raz',
      two: 'dva',
      three: 'tri'
    }
  }),
  mutations: {},
  actions: {},
  getters: {
    booleanField: (state) => state.booleanField,
    stringField: (state) => state.stringField,
    integerField: (state) => state.integerField,
    floatField: (state) => state.floatField,
    arrayField: (state) => state.arrayField,
    objectField: (state) => state.objectField,
  }
}