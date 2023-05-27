const corrollamake = ('toyota corrolla')
const corrollayear = ('2015')
const corrollaprice = ('GHC50,000')

const elantramake = ('hyndai elantra')
const elantrayear = ('2016')
const elantraprice = ('GHC60,000')

const accordmake = ('honda accord')
const accordyear = ('2020')
const accordprice = ('GHC100,000')

const corrollabtn = document.getElementById("corrolla")
const elantrabtn = document.getElementById("elantra")
const accordbtn = document.getElementById("accord")

const cmakeoutput = document.getElementById("1makeoutput")
const cyearoutput = document.getElementById("1yearoutput")
const cpriceoutput = document.getElementById("1priceoutput")

const emakeoutput = document.getElementById("2makeoutput")
const eyearoutput = document.getElementById("2yearoutput")
const epriceoutput = document.getElementById("2priceoutput")

const amakeoutput = document.getElementById("3makeoutput")
const ayearoutput = document.getElementById("3yearoutput")
const apriceoutput = document.getElementById("3priceoutput")



function fun1(){
        cmakeoutput.innerHTML = corrollamake
        cyearoutput.innerHTML = corrollayear
        cpriceoutput.innerHTML = corrollaprice
    }
function fun2(){
        emakeoutput.innerHTML = elantramake
        eyearoutput.innerHTML = elantrayear
        epriceoutput.innerHTML = elantraprice
    }
function fun3(){
        amakeoutput.innerHTML = accordmake
        ayearoutput.innerHTML = accordyear
        apriceoutput.innerHTML = accordprice
    }

corrollabtn.addEventListener('click',fun1)
elantrabtn.addEventListener('click',fun2)
accordbtn.addEventListener('click',fun3)
