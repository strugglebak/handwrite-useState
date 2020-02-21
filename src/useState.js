import ReactDom from 'react-dom'

let _state // 全局变量
let index = 0 // 解决 state 冲突的问题,因为有可能使用多个 useState

const useState = initValue => {
  // 保存当前的 index
  let currentIndex = index
  // _state 用来保存一个全局的状态
  _state[currentIndex] = _state[currentIndex] === undefined 
    ? initValue 
    : _state[currentIndex]
  // setState 是一个 callback, 只要 setState 被调用，就会重新 render 一遍
  // 同时 _state 也会得到更新
  const setState = newValue => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1
  return [_state[currentIndex], setState]
}

const render = () => {
  // 每次渲染的时候应该把 index 清零
  index = 0
  ReactDom.render(<App />, document.getElementById('root'))
}

export default useState