function addArticle(){
    const form = document.forms[0];


    form.addEventListener("submit", function(event) {

     event.preventDefault();
         var data = new FormData(form);
         var str = 'обсуждение добалено';
         var doRedirect = true;
         var icon = "success";

        if (data.get('name') == '') 
        {
			
            str ='Заполните название обсуждения';
            icon = "error";
            doRedirect = false;
        }
        if (data.get('content') == '') 
        {
            str ='Добавте описание обсуждения';
            icon = "error";
            doRedirect = false;
        }

        Swal.fire({
            text: str,
            icon: icon,
            showConfirmButton: false
        });

        if (doRedirect) {
            setTimeout(function () {

                window.location.href = "addArticle.html";
            }, 1800); 
        }
    });

    form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}