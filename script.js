let arr = [1, 19, 3, 54, 5, 93]
// let showArr = arr => {
// 	for (let i = 0; i < arr.length; i++) {
// 		console.log(arr[i])
// 	}
// }
// showArr(arr)

const showArr = arr => {
	arr.forEach((element, index) => {
		console.log(element)
	})
}

showArr(arr)
