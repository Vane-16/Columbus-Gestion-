// ================= CARGAR DESDE LOCALSTORAGE =================
let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
let contratos = JSON.parse(localStorage.getItem("contratos")) || [];
let seguridades = JSON.parse(localStorage.getItem("seguridades")) || [];
let entornos = JSON.parse(localStorage.getItem("entornos")) || [];

let editEmpleado = null;
let editContrato = null;
let editSeguridad = null;
let editEntorno = null;

// ================= GUARDAR EN LOCALSTORAGE =================
function guardarStorage(){
    localStorage.setItem("empleados", JSON.stringify(empleados));
    localStorage.setItem("contratos", JSON.stringify(contratos));
    localStorage.setItem("seguridades", JSON.stringify(seguridades));
     localStorage.setItem("entornos", JSON.stringify(entornos));
}

// ================= NAVEGACIÓN =================
function mostrarSeccion(seccion) {

    document.getElementById("seccionEmpleado").style.display = "none";
    document.getElementById("seccionContrato").style.display = "none";
    document.getElementById("seccionSeguridad").style.display = "none";
    document.getElementById("seccionEntorno").style.display = "none";

    if (seccion === "empleado") {
        document.getElementById("seccionEmpleado").style.display = "block";
    }

    if (seccion === "contrato") {
        document.getElementById("seccionContrato").style.display = "block";
    }

    if (seccion === "seguridad") {
        document.getElementById("seccionSeguridad").style.display = "block";
    }

    if (seccion === "entorno") {
        document.getElementById("seccionEntorno").style.display = "block";
    }
}

// ================= EMPLEADOS =================
function guardarEmpleado(){

    const empleado = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        documento: numeroDocumento.value,
        fechaNacimiento: fechaNacimiento.value,
        estadoCivil: estadoCivil.value
    };

    if(editEmpleado !== null){
        empleados[editEmpleado] = empleado;
        editEmpleado = null;
        btnGuardarEmpleado.textContent = "Guardar";
    } else {
        empleados.push(empleado);
    }

    guardarStorage();
    document.getElementById("formEmpleado").reset();
    mostrarEmpleados();
}

function mostrarEmpleados(){

    tablaEmpleados.innerHTML = "";

    empleados.forEach((emp, index)=>{

        tablaEmpleados.innerHTML += `
        <tr>
            <td>${emp.nombre}</td>
            <td>${emp.apellidos}</td>
            <td>${emp.documento}</td>
            <td>${emp.fechaNacimiento}</td>
            <td>${emp.estadoCivil}</td>
            <td>
                <button onclick="editarEmpleado(${index})">Editar</button>
                <button onclick="eliminarEmpleado(${index})">Eliminar</button>
                <button onclick="verHistorial('${emp.documento}')">Ver Historial</button>
            </td>
        </tr>
        `;
    });
}

function editarEmpleado(index){
    const emp = empleados[index];

    nombre.value = emp.nombre;
    apellidos.value = emp.apellidos;
    numeroDocumento.value = emp.documento;
    fechaNacimiento.value = emp.fechaNacimiento;
    estadoCivil.value = emp.estadoCivil;

    editEmpleado = index;
    btnGuardarEmpleado.textContent = "Actualizar";
}

function eliminarEmpleado(index){
    empleados.splice(index,1);
    guardarStorage();
    mostrarEmpleados();
}

// ================= CONTRATOS =================
function guardarContrato(){

    const contrato = {
        cedula: String(cedulaContrato.value),
        cargo: cargo.value,
        area: area.value,
        fechaIngreso: fechaIngreso.value,
        tipo: tipoContrato.value,
        remuneracion: remuneracion.value,
        estado: estadoContrato.value
    };

    if(editContrato !== null){
        contratos[editContrato] = contrato;
        editContrato = null;
        btnGuardarContrato.textContent = "Guardar Contrato";
    } else {
        contratos.push(contrato);
    }

    guardarStorage();
    mostrarContratos();

    // ✅ LIMPIAR CAMPOS
    document.getElementById("cedulaContrato").value = "";
    document.getElementById("contratoEscaneado").value = "";
    document.getElementById("liquidacionEscaneada").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("area").value = "";
    document.getElementById("fechaIngreso").value = "";
    document.getElementById("tipoContrato").value = "";
    document.getElementById("fechaVencimiento").value = "";
    document.getElementById("remuneracion").value = "";
    document.getElementById("estadoContrato").value = "";
    document.getElementById("fechaRetiro").value = "";
    document.getElementById("fechaPagoLiquidacion").value = "";
}
function mostrarContratos(){
    tablaContratos.innerHTML = "";

    contratos.forEach((con,index)=>{
        tablaContratos.innerHTML += `
        <tr>
            <td>${con.cedula}</td>
            <td>${con.cargo}</td>
            <td>${con.area}</td>
            <td>${con.fechaIngreso}</td>
            <td>${con.tipo}</td>
            <td>${con.remuneracion}</td>
            <td>${con.estado}</td>
            <td>
                <button onclick="editarContrato(${index})">Editar</button>
                <button onclick="eliminarContrato(${index})">Eliminar</button>
            </td>
        </tr>
        `;
    });
}

function editarContrato(index){
    const con = contratos[index];

    cedulaContrato.value = con.cedula;
    cargo.value = con.cargo;
    area.value = con.area;
    fechaIngreso.value = con.fechaIngreso;
    tipoContrato.value = con.tipo;
    remuneracion.value = con.remuneracion;
    estadoContrato.value = con.estado;

    editContrato = index;
    btnGuardarContrato.textContent = "Actualizar Contrato";
}

function eliminarContrato(index){
    contratos.splice(index,1);
    guardarStorage();
    mostrarContratos();
}

// ================= SEGURIDAD =================
function guardarSeguridad(){

    const seguridad = {
        cedula: String(cedulaSeguridad.value),
        eps: eps.value,
        fechaEps: fechaEps.value,
        beneficiarios: beneficiarios.value,
        caja: caja.value,
        fechaCaja: fechaCaja.value,
        arl: arl.value,
        fechaArl: fechaArl.value,
        enfermedadLaboral: enfermedadLaboral.value,
        pension: pension.value,
        cesantias: cesantias.value
    };

    if(editSeguridad !== null){
        seguridades[editSeguridad] = seguridad;
        editSeguridad = null;
        btnGuardarSeguridad.textContent = "Guardar Seguridad";
    } else {
        seguridades.push(seguridad);
    }

    guardarStorage();
    mostrarSeguridad();

    // ✅ LIMPIAR CAMPOS
    document.getElementById("cedulaSeguridad").value = "";
    document.getElementById("eps").value = "";
    document.getElementById("fechaEps").value = "";
    document.getElementById("beneficiarios").value = "";
    document.getElementById("caja").value = "";
    document.getElementById("fechaCaja").value = "";
    document.getElementById("arl").value = "";
    document.getElementById("fechaArl").value = "";
    document.getElementById("enfermedadLaboral").value = "";
    document.getElementById("pension").value = "";
    document.getElementById("cesantias").value = "";
}

function mostrarSeguridad(){
    tablaSeguridad.innerHTML = "";

    seguridades.forEach((seg,index)=>{
        tablaSeguridad.innerHTML += `
        <tr>
            <td>${seg.cedula}</td>
            <td>${seg.eps}</td>
            <td>${seg.arl}</td>
            <td>${seg.pension}</td>
            <td>
                <button onclick="editarSeguridad(${index})">Editar</button>
                <button onclick="eliminarSeguridad(${index})">Eliminar</button>
            </td>
        </tr>
        `;
    });
}

function editarSeguridad(index){

    const seg = seguridades[index];

    cedulaSeguridad.value = seg.cedula;
    eps.value = seg.eps;
    fechaEps.value = seg.fechaEps;
    beneficiarios.value = seg.beneficiarios;
    caja.value = seg.caja;
    fechaCaja.value = seg.fechaCaja;
    arl.value = seg.arl;
    fechaArl.value = seg.fechaArl;
    enfermedadLaboral.value = seg.enfermedadLaboral;
    pension.value = seg.pension;
    cesantias.value = seg.cesantias;

    editSeguridad = index;
    btnGuardarSeguridad.textContent = "Actualizar Seguridad";
}

function eliminarSeguridad(index){
    seguridades.splice(index,1);
    guardarStorage();
    mostrarSeguridad();
}

// ================= CARGAR AL INICIAR =================
window.onload = function(){
    mostrarEmpleados();
    mostrarContratos();
    mostrarSeguridad();
    mostrarEntornos();
};

// ================= BUSCADOR =================
function buscarEmpleado(){

    const filtro = document.getElementById("buscadorCedula").value.toLowerCase();
    tablaEmpleados.innerHTML = "";

    empleados.forEach((emp, index)=>{

        if(emp.documento.toLowerCase().includes(filtro)){

            tablaEmpleados.innerHTML += `
            <tr>
                <td>${emp.nombre}</td>
                <td>${emp.apellidos}</td>
                <td>${emp.documento}</td>
                <td>${emp.fechaNacimiento}</td>
                <td>${emp.estadoCivil}</td>
                <td>
                    <button onclick="editarEmpleado(${index})">Editar</button>
                    <button onclick="eliminarEmpleado(${index})">Eliminar</button>
                    <button onclick="verHistorial('${emp.documento}')">Ver Historial</button>
                </td>
            </tr>
            `;
        }
    });
}

// ================= VER HISTORIAL =================
function verHistorial(cedula){

    cedula = String(cedula);

    const empleado = empleados.find(e => String(e.documento) === cedula);
    const contrato = contratos.find(c => String(c.cedula) === cedula);
    const seguridad = seguridades.find(s => String(s.cedula) === cedula);

    let html = `
        <h3>Datos Personales</h3>
        <p><strong>Nombre:</strong> ${empleado?.nombre || "No registrado"}</p>
        <p><strong>Apellidos:</strong> ${empleado?.apellidos || "No registrado"}</p>
        <p><strong>Cédula:</strong> ${empleado?.documento || "No registrado"}</p>
        <p><strong>Fecha Nacimiento:</strong> ${empleado?.fechaNacimiento || "No registrado"}</p>
        <p><strong>Estado Civil:</strong> ${empleado?.estadoCivil || "No registrado"}</p>

        <hr>

        <h3>Información de Contrato</h3>
        <p><strong>Cargo:</strong> ${contrato?.cargo || "No registrado"}</p>
        <p><strong>Área:</strong> ${contrato?.area || "No registrado"}</p>
        <p><strong>Fecha Ingreso:</strong> ${contrato?.fechaIngreso || "No registrado"}</p>
        <p><strong>Tipo:</strong> ${contrato?.tipo || "No registrado"}</p>
        <p><strong>Remuneración:</strong> ${contrato?.remuneracion || "No registrado"}</p>
        <p><strong>Estado:</strong> ${contrato?.estado || "No registrado"}</p>

        <hr>

        <h3>Seguridad Social</h3>
        <p><strong>EPS:</strong> ${seguridad?.eps || "No registrado"}</p>
        <p><strong>Fecha Afiliación EPS:</strong> ${seguridad?.fechaEps || "No registrado"}</p>
        <p><strong>Beneficiarios:</strong> ${seguridad?.beneficiarios || "No registrado"}</p>
        <p><strong>Caja de Compensación:</strong> ${seguridad?.caja || "No registrado"}</p>
        <p><strong>Fecha Afiliación Caja:</strong> ${seguridad?.fechaCaja || "No registrado"}</p>
        <p><strong>ARL:</strong> ${seguridad?.arl || "No registrado"}</p>
        <p><strong>Fecha Afiliación ARL:</strong> ${seguridad?.fechaArl || "No registrado"}</p>
        <p><strong>Enfermedad Laboral:</strong> ${seguridad?.enfermedadLaboral || "No registrado"}</p>
        <p><strong>Fondo de Pensiones:</strong> ${seguridad?.pension || "No registrado"}</p>
        <p><strong>Fondo de Cesantías:</strong> ${seguridad?.cesantias || "No registrado"}</p>
    `;

    document.getElementById("contenidoHistorial").innerHTML = html;
    document.getElementById("modalHistorial").style.display = "block";
}

function cerrarModal(){
    document.getElementById("modalHistorial").style.display = "none";
}

// ================= LOGIN =================
function login() {
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorLogin = document.getElementById("errorLogin");

    const usuariosRegistrados = [
        { usuario: "admin", password: "12345" },
    
    ];

    const userValido = usuariosRegistrados.find(u => 
        u.usuario === usuario && u.password === password
    );

    if (userValido) {
        errorLogin.textContent = "";
        localStorage.setItem("usuarioActivo", usuario);
        window.location.href = "empleados.html"; 
    } else {
        errorLogin.textContent = "Usuario o contraseña incorrectos";
    }
}
function cerrarSesion(){

    // Elimina sesión activa
    localStorage.removeItem("usuarioActivo");

    // Redirige al login
    window.location.href = "login.html";
}
function guardarEntornoFamiliar() {

    const entorno = {
        cedula: document.getElementById("cedulaEntorno").value,
        direccion: document.getElementById("direccion").value,
        centroMedico: document.getElementById("centroMedico").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        estadoCivil: document.getElementById("estadoCivilEntorno").value,
        transporte: document.getElementById("transporte").value,
        nfNombre: document.getElementById("nfNombre").value,
        nfApellidos: document.getElementById("nfApellidos").value,
        nfParentesco: document.getElementById("nfParentesco").value,
        nfEdad: document.getElementById("nfEdad").value,
        nfConvive: document.getElementById("nfConvive").value,
        nfDepende: document.getElementById("nfDepende").value
    };

    console.log("Se está guardando:", entorno);

    if (editEntorno === null) {
        entornos.push(entorno);
    } else {
        entornos[editEntorno] = entorno;
        editEntorno = null;
    }

    guardarStorage();
    mostrarEntornos();
    document.getElementById("formEntorno").reset();
}

function mostrarEntornos() {
    const tabla = document.getElementById("tablaEntorno");
    tabla.innerHTML = "";

    entornos.forEach((e, index) => {
        tabla.innerHTML += `
            <tr>
                <td>${e.cedula}</td>
                <td>${e.direccion}</td>
                <td>${e.centroMedico}</td>
                <td>${e.nombreFamiliar}</td>
                <td>${e.parentesco}</td>
                <td>
                    <button onclick="editarEntorno(${index})">Editar</button>
                     <button onclick="eliminarEntorno(${index})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function editarEntorno(index) {
    const e = entornos[index];

    document.getElementById("cedulaEntorno").value = e.cedula;
    document.getElementById("direccion").value = e.direccion;
    document.getElementById("centroMedico").value = e.centroMedico;
    document.getElementById("telefonoEntorno").value = e.telefono;
    document.getElementById("correoEntorno").value = e.correo;
    document.getElementById("estadoCivilEntorno").value = e.estadoCivil;
    document.getElementById("transporte").value = e.transporte;
    document.getElementById("nombreFamiliar").value = e.nombreFamiliar;
    document.getElementById("apellidosFamiliar").value = e.apellidosFamiliar;
    document.getElementById("parentesco").value = e.parentesco;
    document.getElementById("edadFamiliar").value = e.edad;
    document.getElementById("convive").value = e.convive;
    document.getElementById("dependencia").value = e.dependencia;

    editEntorno = index;
}
function eliminarEntorno(index) {
    entornos.splice(index, 1);
    guardarStorage();
    mostrarEntornos();
}
function limpiarFormularioEntorno() {
    document.querySelectorAll("#seccionEntorno input").forEach(input => input.value = "");
}

function toggleAccordion(element){
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}
