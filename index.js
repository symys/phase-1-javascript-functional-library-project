function myEach(collection, callback){
    let collectionArr = Object.values(collection)
    
    for(let i = 0; i < collectionArr.length; i++){
        callback(collectionArr[i])
    }
    return collection
}

function myMap(collection, callback){
    let collectionArr = Object.values(collection)
    let result = []
    
    for(let i = 0; i < collectionArr.length; i++){
        result.push(callback(collectionArr[i]))
    }
    return result
}

function myReduce(collection, callback, acc){
    let collectionArr = Object.values(collection)

    if(!acc){
        acc = parseInt(collectionArr.slice(0,1))
        const newArr = collectionArr.slice(1)

        for(let element of newArr) {
			element = parseInt(element)
			acc = callback(acc, element, collectionArr)
		}

    }else{
        for(const element of collectionArr){
			acc = callback(acc, element, collectionArr)
		}
    }

    return acc;

}

function myFind(collection, predicate){
    let collectionArr = Object.values(collection)

    for (const element of collectionArr){
		if(predicate(element)){
			return element
		}
	}
}

function myFilter(collection, predicate){
    let collectionArr = Object.values(collection)

    let filteredArr = []
	for (const element of collectionArr) {
		if(predicate(element)){
			filteredArr.push(element)
		}
	}
	return filteredArr
}

function mySize(collection){
    let collectionArr = Object.values(collection)

    let counter = 0;
    for(const element of collectionArr){
        counter++
    }

    return counter;
}

function myFirst(array, numberOfElementToReturn){
    if(numberOfElementToReturn){
        return array.slice(0, numberOfElementToReturn)
    }
    else return array[0]
}

function myLast(array, numberOfElementToReturn){
    if(numberOfElementToReturn){
        return array.slice(-numberOfElementToReturn)
    }
    else return array[array.length-1]
}

function myKeys(obj){
    const keyArr = Object.keys(obj)
    return keyArr
}

function myValues(obj){
    return Object.values(obj)
}