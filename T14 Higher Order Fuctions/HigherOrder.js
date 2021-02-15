let data = [20, 65, 45, 150, 75, 85, 96, 120]

const sec_foreach = document.querySelector('#foreach')
const sec_map = document.querySelector('#map')
const sec_reduce = document.querySelector('#reduce')
const sec_filter = document.querySelector('#filter')
const sec_sort = document.querySelector('#sort')

function addDataToSec(section, callback) {
    let temp_data = callback()
    console.log(temp_data)
    if (temp_data.length != 0 && Array.isArray(temp_data)) {
        temp_data.forEach(d => {
            let val = document.createElement('h5')
            val.innerText = d
            section.insertAdjacentElement('beforeend', val)
        })
    }
    if (temp_data != null && (Array.isArray(temp_data) != true)) {
        let val = document.createElement('h5')
        val.innerText = temp_data
        section.insertAdjacentElement('beforeend', val)
    }
}

addDataToSec(sec_foreach, function () {
    let da = []
    data.forEach(d => da.push(d + 10))
    return da
})
addDataToSec(sec_map, () => data.map(d => d + 10))
addDataToSec(sec_filter, () => data.filter(d => d > 50))
addDataToSec(sec_reduce, () => data.reduce((prevOutput, d) => prevOutput + d, 0))
addDataToSec(sec_sort, () => data.sort((a,b) => a > b ? 1 : -1 ))