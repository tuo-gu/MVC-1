import $ from 'jquery'
import './app3.css'
const $square=$('#square')
$square.mouseenter(
  ()=>{$square.addClass('move')
})
$square.mouseleave(
  ()=>{$square.removeClass('move')
})
