import $ from 'jquery'
const $tag=$('#tag')
const $showTag=$('#showTag')
$tag.on('click','li',(e)=>{
 const $li=$(e.currentTarget)
 $li.addClass('selector')
  .siblings().removeClass('selector')
 const index=$li.index()
 console.log(index)
 $showTag.children().eq(index)
  .addClass('active')
  .siblings().removeClass('active')
})

$tag.children().eq(0).trigger('click')