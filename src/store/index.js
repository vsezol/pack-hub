import Vue from 'vue'
import Vuex from 'vuex'

import {
  START_SEARCH_PACKS,
  SUCCESS_SEARCH_PACKS,
  ERROR_SEARCH_PACKS
} from './mutationTypes'

import search from '@/fetch/search'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    loading: 'begin',
    error: null,
    packages: [],
    pagination: 1,
    total: 0,
    step: 10,
    toSearch: ''
  },
  mutations: {
    [START_SEARCH_PACKS](state) {
      state.loading = true
    },
    [SUCCESS_SEARCH_PACKS](state, { packages, pagination, total, toSearch }) {
      state.packages = packages
      state.pagination = pagination
      state.total = total
      ;(state.loading = false), (state.toSearch = toSearch)
    },
    [ERROR_SEARCH_PACKS](state, payload) {
      state.loading = false
      state.error = payload
    }
  },
  actions: {
    startSearchPacks({ commit }) {
      commit(START_SEARCH_PACKS)
    },
    successSearchPacks({ commit }, payload) {
      commit(SUCCESS_SEARCH_PACKS, payload)
    },
    errorSearchPacks({ commit }, error) {
      commit(ERROR_SEARCH_PACKS, error)
    },
    async searchPacks({ dispatch, state: { step } }, { toSearch, pagination }) {
      dispatch('startSearchPacks')
      pagination = pagination || 0
      const size = (pagination + 1) * step
      try {
        const { total, objects } = await search(toSearch, pagination, size)
        dispatch('successSearchPacks', {
          pagination,
          total,
          packages: objects,
          toSearch
        })
      } catch (error) {
        dispatch('errorSearchPacks', error)
      }
    }
  }
})
