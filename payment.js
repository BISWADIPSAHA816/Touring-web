let url = new URL(window.location.href);
        let total = url.searchParams.get("total");

        
        // $(document).ready(function(){
        //     $(".super-price").innerHTML=total;
        // })
        document.querySelector(".super-price").innerHTML=total;