import ReactDom from 'react-dom'

let _state // 全局变量

const useState = initValue => {
  // _state 用来保存一个全局的状态
  _state = _state === undefined ? initValue : _state
  // setState 是一个 callback, 只要 setState 被调用，就会重新 render 一遍
  // 同时 _state 也会得到更新
  const setState = newValue => {
    _state = newValue
    render()
  }
  return [_state, setState]
}

const render = () => {
  ReactDom.render(<App />, document.getElementById('root'))
}

export default useState