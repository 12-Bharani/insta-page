const post1=document.querySelector('#post1')
const post2=document.querySelector('#post2')
const post3=document.querySelector('#post3')
const post4=document.querySelector('#post4')




let i=0


function incrLike(element){      
     const incrElement=element.querySelector('.likes')

    incrElement.innerText=(i+=1)+" Likes";
    console.log(incrElement);
           
}

function incrComments(element){
           
    const incrElement=element.querySelector('.comments')
    
incrElement.innerText=(i+=1)+" Comments";
console.log(incrElement);
}
function addComments(element){
  const getValue=element.querySelector('.inpComment').value
  
  
    console.log(getValue);
   
    const addElement=element.querySelector('.comments')
    console.log(addElement);
    addElement.innerText=getValue+"  "+(i+=1)+"  Comment added "

    
}