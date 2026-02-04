const arrayData = ['Tenis Nike', 'Tenis Addidas', 'Tenis Vans', 'Tenis DKN']
const totalItems = arrayData.length
const lastArrayIndex = totalItems - 1

// for (let index = 0; index <= lastArrayIndex; index++) {
//     console.log(arrayData[0])
// }

const newArray = []

function deleteItem(indexItem) {
    arrayData.forEach(function (item, index) {
        if (indexItem !== index) {
            newArray.unshift(item)
        }
    })
}

deleteItem(2)

console.log(newArray)