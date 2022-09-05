const elem=document.querySelectorAll(".icon");
elem.forEach((element)=>
            {
  element.addEventListener('mouseover',()=>
                              {
    element.classList.add('active');
  })
  element.addEventListener('mouseout',()=>
                          {
element.classList.remove('active');
  })
});




const nav_ele=document.querySelectorAll(".nav");
console.log(nav_ele);
nav_ele.forEach((link)=>{

    link.addEventListener('mouseover',()=>
    {
        link.classList.add('active-page');
    })
    link.addEventListener('mouseout',()=>
    {
        link.classList.remove('active-page');
    })
    link.addEventListener('click',()=>{
        nav_ele.forEach((element)=>
        {
            element.classList.remove('active-page');
        })
        link.classList.add("active-page");

    })
});


