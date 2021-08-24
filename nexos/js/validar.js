function validarFormulario() {
    let txtNombre = document.getElementById("nombre").value;
    let txtEdad = document.getElementById("edad").value;
    let txtCorreo = document.getElementById("correo").value;
    let txtFecha = document.getElementById("fecha").value;
    let cmbSelector = document.getElementById("selector").selectedIndex;
    let chkEstado = document.getElementById("CheckBox");
    let rbtestado = document.getElementsByName("radioButton");
    let banderaRBTN = false;

    //test campo obligatorio
    if (txtNombre == null || txtNombre.length == 0 || /^\s+S/.test(txtNombre)) {
        alert(
            "Error: El campo nombre debe ir vacío o lleno de slamente espacios en blanco."
        );
        return false;
    }

    //text edad
    if (txtEdad == null || txtEdad.length == 0 || isNaN(txtEdad)) {
        alert("Error: Debe ingresar una edad.");
        return false;
    }

    //test correo
    if (!/\S+@\S+\.\S+/.test(txtCorreo)) {
        alert("Error: Debe escribir un correo válido.");
        return false;
    }

    //test fecha
    if (!isNaN(txtFecha)) {
        alert("Error: Debe elegir una fecha.");
        return false;
    }

    //text comboBox
    if (cmbSelector == null || cmbSelector == 0) {
        alert("Error:Debe seleccioonar una opcion del combo box.");
        return false;
    }

    //test checkBox}
    if (!chkEstado.checked) {
        alert("Error: Debe seleccionar el checkbox");
        return false;
    }

    //test radioButtons
    for (let i = o; i < rbtestado.length; i++) {
        if (rbtestado[i].checked) {
            banderaRBTN = true;
            break;
        }
    }
    if (!banderaRBTN) {
        alert("Error: Debe elegir una opcion de radop button.");
        return false;
    }
    return true;
}