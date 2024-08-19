
let isMobileMenuExpanded = false;

function changeMobileMenu(){
    
    isMobileMenuExpanded = !isMobileMenuExpanded;

    let mobileMenu = document.getElementById('mobileMenu');

    if(isMobileMenuExpanded){
        mobileMenu.style.width = "0";
        
    }
    else{
        mobileMenu.style.width = "100%";
        
    }
    


}