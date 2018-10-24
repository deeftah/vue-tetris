import event from '../../unit/event'

const down = store => {
  store.commit('key_music', true)
  if (store.state.lock) {
    return
  }
  event.down({
    key: 'g',
    once: true,
    callback: () => {
      if (store.state.lock) {
        return
      }
      store.commit('music', !store.state.music)
    }
  })
}

const up = store => {
  store.commit('key_music', false)
  event.up({
    key: 'g'
  })
}

export default {
  down,
  up
}
