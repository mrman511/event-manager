export default class MockUseSearchParam {
  constructor(params){
    this.params = params
  }

  get(param){
    this.params[param]
  }
}