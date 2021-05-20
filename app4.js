import './app4.css'
import $ from 'jquery'
const $wear=$('#wear')
$wear.mouseenter(()=>{
  $wear.addClass('change')
})
$wear.mouseleave(()=>{
  $wear.removeClass('change')
})
