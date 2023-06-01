 let arr;
function calculateMinCost() {
arr  = document.getElementById("rope-lengths").value.split(',')
	  let f = 0
    while(arr.length !== 1){
        let d = +arr[0] + +arr[1];
        f+=d
        arr.shift()
        arr.shift()
        arr.unshift(d)
        arr.sort((a,b)=>a-b)
    }
  document.getElementById("result").innerText = f
}  
