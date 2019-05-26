
    function go() {

        if (name.value == "" || type.value == "" || date.value == "" || hour.value == "" || adress.value == "") {
            swal({
                title: "Aviso",
                text: "Preencha todos os campos!",
                icon: "warning",
                button: "ok",
            });
        } else {
            swal({
                title: "Obrigada!",
                text: "Aguarde o e-mail com todas as informações",
                icon: "success",
                button: "ok",
            });
        }
    }

