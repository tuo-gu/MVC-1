import $ from 'jquery';
const $addNum=$('#addNum')
const $minusNum=$('#minusNum')
const $rideNum=$('#rideNum')
const $besidesNum=$('#besidesNum')
const $output=$("#output")
const n=localStorage.getItem('n')
$output.text(n||100)
$addNum.on("click",()=>{
  let n=parseInt($output.text())
  n+=1
  $output.text(n)
  localStorage.setItem('n',n)
})
$minusNum.on("click",()=>{
  let n=parseInt($output.text())
  n-=1
  $output.text(n)
  localStorage.setItem('n',n)
})
$rideNum.on("click",()=>{
  let n=parseInt($output.text())
  n*=2
  $output.text(n)
  localStorage.setItem('n',n)
})
$besidesNum.on("click",()=>{
  let n=parseInt($output.text())
  n/=2
  $output.text(n)
  localStorage.setItem('n',n)
})