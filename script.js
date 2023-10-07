function validate(){
    let e = document.querySelector(".email").value;
    let p = document.querySelector(".pwd").value;
    let uc=0;
    let sc=0;
    let dig=0;
    for(let ch of p)
    {
        if(Number.isInteger(Number(ch)))
        {
            dig++;
        }
        else if(ch==='@' || ch==='#' || ch==='$')
        {
            sc++;
        }
        else if(ch===ch.toUpperCase())
        {
            uc++;
        }
    }
    //alert(uc);
    if((uc>0 && sc>0) && (dig>0 && e.includes("@gmail.com")))
    {
        alert("valid email")
    }
    else
    {
        alert("invalid email")
    }


}