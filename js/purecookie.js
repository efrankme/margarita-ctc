// --- Config --- //
var purecookieTitle = "Cookies"; // Title
var purecookieDesc = `<p>Margarita Ramos Topham utiliza cookies propias y de terceros para fines estrictamente funcionales, permitiendo la navegación en la web, así como para fines analíticos, para mostrarte publicidad (tanto general como personalizada) en base a un perfil elaborado a partir de tu hábitos de navegación (p. ej. páginas visitadas), para optimizar la web y para poder valorar las opiniones de los servicios adquiridos por los usuarios.</p>

<p>Para administrar o deshabilitar estas cookies haz clic en <a href="#" id="txtcookie">Configuración de Cookies</a>. Puedes obtener más información en nuestra <a href="./politica-cookies.html" target="_blank">Política de Cookies.</a></p>

<p>Pulsa el botón Aceptar Cookies para confirmar que has leído y aceptado la información presentada. Después de aceptar, no volveremos a mostrarte este mensaje, excepto en el caso de que borres las cookies de tu dispositivo.</p>`; // Description

var purecookieButton = "Aceptar cookies"; // Button text

let configCookies = `<div id="configCookies">
<p><b>•	Estrictamente necesarias</b> <br>
Estas cookies son necesarias para facilitar la correcta navegación por nuestro sitio web y aseguran que el contenido se carga eficazmente, permitiendo la correcta utilización de las diferentes opciones o servicios.  </p>
<p><b>•	Analíticas y optimización </b><br>
Estas cookies son propias o de terceros que nos permiten optimizar tu experiencia en el sitio web, evaluando su rendimiento y mejorar añadiendo nuevas funcionalidades.</p>
<p><b>•	Publicidad comportamental </b><br>
Estas cookies son utilizadas para almacenar información del comportamiento de los usuarios obtenida a través de la observación continuada. Gracias a ellas, podemos conocer los hábitos de navegación en el sitio web y mostrar publicidad relacionada con el perfil de navegación del usuario.</p>
<p><b>•	Valoración </b><br>
Genera identificadores anónimos para el correcto funcionamiento de las opiniones de clientes sobre productos comprados.</p>

<a class="button is-black is-radiusless" id="cerrarconfig">Cerrar</a>
</div>`;
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieDesc"><p>' + purecookieDesc + '</p></div><div class="cookieButton has-text-centered"><a onClick="purecookieDismiss();">Aceptar Cookies</a></div></div>';
    document.body.innerHTML += configCookies;
	  pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
  pureFadeOut("configCookies");
}


cookieConsent();
const txtcookie = document.querySelector("#txtcookie");
const cerrarconfig = document.querySelector("#cerrarconfig");

if (txtcookie != null && cerrarconfig != null) {
  txtcookie.addEventListener("click", () => {
    pureFadeIn("configCookies");
  });

  cerrarconfig.addEventListener("click", () => {
    pureFadeOut("configCookies");
  });
}