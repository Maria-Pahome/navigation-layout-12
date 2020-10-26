document.addEventListener("DOMContentLoaded", function(event) {
    const menuItems = document.getElementsByClassName ("menu-section");
    console.log ('menuItems', menuItems)

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = menuItems[i];
        
        menuItem.addEventListener('click', function() {
            for (let j = 0; j < menuItems.length; j++) {
                if(menuItems[j].classList.contains('selected')){
                    menuItems[j].classList.remove("selected");
                } else {
                    continue;
                }
            }
            menuItem.classList.add("selected");

        const dataContent = menuItem.dataset.content;
        console.log('dataContent', dataContent)
        const contentElements = document.getElementsByClassName("content");
        for(let k = 0; k < contentElements.length; k++) {
            if(contentElements[k].classList.contains('hidden')) {
                continue;
            } else {
                contentElements[k].classList.add("hidden");
            }
        }
        document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
        document.getElementsByClassName(dataContent)[1].classList.remove("hidden");
        document.getElementsByClassName(dataContent)[2].classList.remove("hidden");
    });
} 

    const ordersLink= document.getElementById('order-link');
    console.log('ordersLink', ordersLink)
            ordersLink.addEventListener('click', function() {
            const dataLink=ordersLink.dataset.content
            console.log('dataLink', dataLink)
            const linkElements=document.getElementsByClassName("content");
            for(let n= 0; n < linkElements.length; n++) {
                if(linkElements[n].classList.contains('hidden')) {
                    continue;
                } else {
                    linkElements[n].classList.add("hidden");
                }
            }
            document.getElementsByClassName(dataLink)[0].classList.remove("hidden");
            document.getElementsByClassName('menu-side-section')[0].getElementsByClassName('your-orders-page')[0].classList.remove("hidden");
        })

    });

    //nu am reusit sa fac meniul cu shopping prin js pentru ca din start am gresit cu formatul paginii, si logo cu boundary sa apara doar pe anumite pagini
    //in schimb am incercat sa fac meniul cu paginile si ceva pe la "order-details", nu stiu cat de corect e. 