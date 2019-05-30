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
            var formulario = new URLSearchParams(new FormData(form_registro));
            console.log(formulario);
            fetch('/usuarios/registrar', {
                method: "POST",
                body: formulario
            }).then((response) => {
                if (response.ok) {
                    setTimeout(function () { window.location = 'login.html' }, 2000);
                    return false;
                } else {
                    console.log(`Erro no registro.`);
                }
            });
            return false;
            // Intervalo para redirecionar para a última página
            // Mesma função só que com arrow function, forma mais atual de se escrever
            // setTimeout(()=>{window.location = 'teste3c.html'},3000);
            
        }
    }



