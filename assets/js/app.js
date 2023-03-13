 
let _front = document.querySelector('.bg-img')

let _back = document.querySelector('.back')

let cvv = document.querySelector('.ccv ')

let _write  = document.querySelector('.incomtext')

 let CardHolder = document.getElementById('card-holder')

 let fullName = document.querySelector('.full-name')

 let cvv2Input = document.getElementById('cvvInput')

 let _cvv = document.querySelector('.cvv-val')             
 cvv.addEventListener('mousemove', () =>  {
   console.log();
    _front.style.transform = "perspective(1000px) rotateY(-180deg) " 
    _back.style.transform = "perspective(1000px) rotateY(0deg)" 
 })



 cvv.addEventListener('mouseleave', () =>  {
   console.log();
    _front.style.transform = "perspective(1000px) rotateY(0deg) " 
    _back.style.transform = "perspective(1000px) rotateY(180deg)" 
 })


 document.getElementById('cardN').addEventListener('input',function (event) {
             let numberCardVal = this.value
                  
             let  _status = event.data
  
             if(_status == null ){
               
               let temp =  _write.innerHTML

              if(
                  temp.length ==6 ||
                  temp.length==12 ||
                  temp.length ==18
                  ){
                  _write.innerHTML = temp.substring(0 ,  (temp.length) -3)
                }else{
                  _write.innerHTML = temp.substring(0 ,  (temp.length) -1)
                }
             }else{
            
              if(numberCardVal.length < 17) {
                 
                if(this.value.search(/[a-z-*-+-,-.]/i) != -1){
                  document.querySelector('.cardn_mags').innerText = 'please Enter card number'
                 // alert('please Enter card number')
                }else{
                  _cardNUmber(numberCardVal)
                }
             

              }else  if(numberCardVal.length == 16

                ){
                _cardNUmber(numberCardVal)
                 
                CardHolder.focus() 
       
               // this.value=(this.value).substring(0,16)
              }else{
                CardHolder.focus() 
                this.value=(this.value).substring(0,16)
              }
             }

            
     
})

 const _cardNUmber = (numberCardVal) => {
  let  crcNumber = numberCardVal.substr(-1)
 let _temp = _write.innerHTML
 
  if(
    numberCardVal.length == 4 ||
    numberCardVal.length == 8 || 
    numberCardVal.length == 12){
     
    _write.innerHTML+=crcNumber + "  "
}else{
  _write.innerHTML+=crcNumber
 
}
 }

 CardHolder.addEventListener('input', function(event){
   let holderCard = this.value
   let statusHolder = event.data
   let textHolderCard = holderCard.substr(-1)

         if(statusHolder == null){
         let x =  fullName.innerHTML
          fullName.innerHTML = x.substring(0, (x.length) -1)
         }else{
          if(holderCard.length <= 14){
            if((this.value.search(/[0-9-*-+-,-.]/i) != -1)){

              document.querySelector('.holder_mags').innerText= 'please Enter your name'
             // alert("please Enter your name")
            }else{
              fullName.innerHTML += textHolderCard
            }
           
           } else{
            cvv2Input.focus()
            cvv.addEventListener('input', () =>  {
              
               _front.style.transform = "perspective(1000px) rotateY(-180deg) " 
               _back.style.transform = "perspective(1000px) rotateY(0deg)" 
            })
           
           }
         }
     // fullName.innerHTML += textHolderCard
 }) 

 document.querySelector('.years').addEventListener("input", () => {
  document.querySelector("._year").innerText =  document.querySelector('.years').value
})     

document.querySelector('.month').addEventListener("input", () => {
  document.querySelector("._month").innerText =  document.querySelector('.month').value
}) 
///cvv2

 function _cvv2 () {
 
             cvv2Input.addEventListener('input', function (event) {
       
               let  _cvv2 = this.value
               let statustemp = event.data
               if(
                statustemp == null
               ){
                let cvvTemp = _cvv.innerHTML
                _cvv.innerHTML = cvvTemp.substring(0 , (cvvTemp.length) -1)
               }
               else{

                if(_cvv2.length == 3){
                   if(this.value.search(/[a-z-*-+-,-.]/i) != -1){
                      document.querySelector('.cvv_mags').innerText = 'please just number'
                    // alert("please Enter your cvv number")
                   } else{
                    _cvv.innerHTML += _cvv2
                    document.getElementById('focus').focus()
                   }
               
              }else{
               
                this.value = (this.value).substring(0, 3)
              
              }
               }
             
             
            })        
 
  }
  _cvv2()




