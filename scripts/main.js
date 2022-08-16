// Sort buttons and align progress bars :)

let pres = document.querySelector('#presentation')
let input = document.querySelector('input')

input.addEventListener('input', () =>{
    let countsearch = new Array()
    for (const country of countries) {
        if(country.name.toLowerCase().includes(input.value.toLowerCase()))
        countsearch.push(country)
    }
    load(countsearch)
})

function load(x){
    pres.innerHTML = ''
    for (const item of x) {
        let frame = document.createElement('div')
        frame.classList.add('countryFrame')
        frame.setAttribute('id',item.name)
        frame.setAttribute('pop',item.population)
        frame.style.border = 'solid 0.1px gray'
        frame.style.padding = '10px'
        frame.style.margin = '7px'
        frame.style.maxWidth = '210px'
        frame.style.border = 'none'
        frame.style.backgroundColor = 'rgb(250, 250, 250)'
        pres.append(frame)

        let flag = document.createElement('div')
        frame.append(flag)

        let flagimg = document.createElement('img')
        flagimg.src = item.flag
        flagimg.style.width = '80px'
        flagimg.style.boxShadow = '1px 1px 5px gray'
        flag.append(flagimg)

        let name = document.createElement('div')
        name.classList.add('countryName')
        name.style.margin = '3px'
        frame.append(name)

        let nameTxt = document.createElement('span')
        nameTxt.textContent = item.name
        nameTxt.style.color = 'rgb(255, 200, 109)'
        nameTxt.style.fontSize = '18px'
        nameTxt.style.marginTop = '3px'
        nameTxt.style.textShadow = '0.5px 1px 3px lightgray'
        nameTxt.style.fontWeight = '700'
        nameTxt.classList.add('countryNameTxT')
        name.append(nameTxt)

        let details = document.createElement('div')
        frame.append(details)

        let capital = document.createElement('span')
        capital.textContent = 'Capital : ' + item.capital
        capital.style.display = 'block'
        details.append(capital)

        let languages = document.createElement('span')
        languages.textContent = 'Languages : ' + item.languages
        languages.style.display = 'block'
        details.append(languages)

        let population = document.createElement('span')
        population.textContent = 'Population : ' + item.population.toLocaleString('en-US')
        population.style.display = 'block'
        details.append(population)
        

        }
        let dataCore= document.getElementById('data-core')
        let frames = document.querySelectorAll('.countryFrame')
        dataCore.innerHTML = ''


        let worldpop = 7800000000

        let dataLine = document.createElement('div')
        let dataName = document.createElement('span')
        let dataGraph = document.createElement('progress')
        let dataNum = document.createElement('span')
        
        dataLine.style.display = 'grid-row'
        // dataLine.style.paddingRight = '300px'
        dataLine.style.textAlign = 'left'
        

        dataName.textContent = 'World'
        dataName.style.display = 'inline'
        dataName.style.float = 'left'
        dataName.style.margin = '5px'


        dataGraph.value = '100'
        dataGraph.max = '100'
        // dataGraph.style.width = '800px'
        // dataGraph.style.height = '27px'
        dataGraph.style.display = 'inline'

        dataNum.textContent = worldpop.toLocaleString('en-US')
        dataName.style.display = 'inline'
        dataNum.style.float = 'right'

        dataCore.append(dataLine)
        dataLine.append(dataName)
        dataLine.append(dataGraph)
        dataLine.append(dataNum)

        for (let i = 0; i < 5; i++) {
            let dataLine = document.createElement('div')
            let dataName = document.createElement('span')
            let dataGraph = document.createElement('progress')
            let dataNum = document.createElement('span')
            let pop = frames[i].getAttribute('pop')
            dataLine.style.display = 'grid-row'
            // dataLine.style.paddingRight = '300px'
            dataLine.style.textAlign = 'left'
            dataLine.style.margin = '10px'

            dataName.textContent = frames[i].id
            dataName.style.float = 'left'
            dataName.style.margin = '5px'
            dataName.style.display = 'inline'

            let dataPerc = (pop / worldpop)*100
            dataGraph.value = dataPerc
            dataGraph.max = '100'
            // dataGraph.style.width = '800px'
            // dataGraph.style.height = '27px'
            dataGraph.style.display = 'inline'

            dataNum.style.float = 'right'
            dataNum.textContent = parseInt(pop).toLocaleString('en-US')
            dataNum.style.display = 'inline'

            dataCore.append(dataLine)
            dataLine.append(dataName)
            dataLine.append(dataGraph)
            dataLine.append(dataNum)

    }
}

load(countries)

let frames = document.querySelectorAll('.countryFrame')
for (const x of frames) {
    x.addEventListener('mouseover', () =>{
        x.style.boxShadow = '1px 1px 6px lightgray'
        x.style.cursor = 'pointer'

    })
    x.addEventListener('mouseout', () =>{
        x.style.boxShadow = 'none'

    })
    x.addEventListener('click', () =>{
        let [result] = countries.filter(obj => {return obj.name === x.id})
        console.log(result)
    })
}

let scroll = document.getElementById('scroll')
let dataCore = document.getElementById('data-core')
let nameselec = document.getElementById('nameselec')
let capselec = document.getElementById('capselec')
let popselec = document.getElementById('popselec')

scroll.addEventListener('click', () => dataCore.scrollIntoView())

nameselec.addEventListener('click', () => {
    if(nameselec.style.backgroundColor == 'rgb(251, 142, 59)'){
        nameselec.style.backgroundColor = 'rgb(251, 196, 59)'
    }else{nameselec.style.backgroundColor = 'rgb(251, 142, 59)'}
    capselec.style.backgroundColor = 'rgb(251, 196, 59)'
    popselec.style.backgroundColor = 'rgb(251, 196, 59)'

})

capselec.addEventListener('click', () => {
    if(capselec.style.backgroundColor == 'rgb(251, 142, 59)'){
        capselec.style.backgroundColor = 'rgb(251, 196, 59)'
    }else{capselec.style.backgroundColor = 'rgb(251, 142, 59)'}
        nameselec.style.backgroundColor = 'rgb(251, 196, 59)'
        popselec.style.backgroundColor = 'rgb(251, 196, 59)'

})
popselec.addEventListener('click', () => {
    if(popselec.style.backgroundColor == 'rgb(251, 142, 59)'){
        popselec.style.backgroundColor = 'rgb(251, 196, 59)'
    }else{popselec.style.backgroundColor = 'rgb(251, 142, 59)'}
        capselec.style.backgroundColor = 'rgb(251, 196, 59)'
        nameselec.style.backgroundColor = 'rgb(251, 196, 59)'

})

