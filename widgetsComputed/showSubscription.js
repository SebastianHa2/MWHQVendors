return function(){
if($getUser('showSub'))
$setUser('showSub', false)
else{

$setUser('showSub', true)
}
}