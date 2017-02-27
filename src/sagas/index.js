import medidorWatch from './medidor'

function *rootSagas(){
  yield[
    medidorWatch()
  ]
}

export default rootSagas;