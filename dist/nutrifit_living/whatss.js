function ejercicio(){document.getElementById("actividadfisica").style.display="block"}function noejercicio(){document.getElementById("actividadfisica").style.display="none"}let edad,valoredad,peso,valorpeso,altura,valoraltura,iimc,porcentajeM,IMC,porcentajeH,MCM,GT,pesoideal,pesometadegrasa;function calcular(){peso=document.getElementById("peso"),valorpeso=peso.value,altura=document.getElementById("altura"),valoraltura=altura.value,iimc=valorpeso/(valoraltura*valoraltura),iimc>30&&iimc<35?alert("esta en Obesidad clase 1, su IMC es : "+iimc):iimc>35&&iimc<40?alert("esta en Obesidad clase 2, su IMC es de : "+iimc):iimc>40?alert(" esta en Obesidad clase 3, su IMC es : "+iimc):iimc>25&&iimc<30?alert("Tiene sobrepeso su IMC es de : "+iimc):iimc>=18.5&&iimc<25?alert("Esta saludable su IMC es de : "+iimc):iimc<18.5&&alert("Esta bajo de peso su IMC es de : "+iimc)}function medidasmujer(){document.getElementById("medidas").style.display="block",peso=document.getElementById("peso"),valorpeso=peso.value,altura=document.getElementById("altura"),valoraltura=altura.value,iimc=valorpeso/(valoraltura*valoraltura),edad=document.getElementById("edad"),valoredad=edad.value,porcentajeM=1.2*iimc+.23*valoredad-5.4,alert("Su porcentaje de grasa corporal es : "+porcentajeM),MCM=valorpeso-valorpeso*(porcentajeM/100),alert("Tu masa corporal magra es de: "+MCM+" kg"),GT=valorpeso*(porcentajeM/100),iimc<=18&&iimc>=15&&valoredad<=20?(pesometadegrasa=.47*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>20&&valoredad<=30?(pesometadegrasa=.52*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>30&&valoredad<=40?(pesometadegrasa=.58*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>40&&valoredad<=50?(pesometadegrasa=.67*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>50?(pesometadegrasa=.77*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad<=20?(pesometadegrasa=.37*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>20&&valoredad<=30?(pesometadegrasa=.45*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>30&&valoredad<=40?(pesometadegrasa=.53*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>40&&valoredad<=50?(pesometadegrasa=.6*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>50?(pesometadegrasa=.69*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad<=20?(pesometadegrasa=.22*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>20&&valoredad<=30?(pesometadegrasa=.27*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>30&&valoredad<=40?(pesometadegrasa=.33*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>40&&valoredad<=50?(pesometadegrasa=.39*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>50&&valoredad<=60?(pesometadegrasa=.45*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>60?(pesometadegrasa=.53*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>20&&valoredad<=40?(pesometadegrasa=.17*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad<=20?(pesometadegrasa=.12*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>40&&valoredad<=50?(pesometadegrasa=.2*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>50&&valoredad<=60?(pesometadegrasa=.27*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>60?(pesometadegrasa=.41*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>30&&iimc<35&&valoredad<=40?(pesometadegrasa=.12*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>40&&valoredad<=50?(pesometadegrasa=.18*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>50&&valoredad<=60?(pesometadegrasa=.24*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>60?(pesometadegrasa=.33*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad<=20?(pesometadegrasa=.015*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>20&&valoredad<=30?(pesometadegrasa=.05*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>30&&valoredad<=40?(pesometadegrasa=.12*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>40&&valoredad<=50?(pesometadegrasa=.17*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>50&&valoredad<=60?(pesometadegrasa=.21*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>60?(pesometadegrasa=.275*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad<=30?(pesometadegrasa=.017*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>30&&valoredad<=40?(pesometadegrasa=.1*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>40&&valoredad<=50?(pesometadegrasa=.13*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>50&&valoredad<=60?(pesometadegrasa=.16*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>60&&(pesometadegrasa=.24*GT/(porcentajeM/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")),iimc>=20&&iimc<=25?alert("","Esta en un buen rango de peso, mantengase en un peso cercano al que esta ahorita","success"):valorpeso>pesoideal&&iimc>25?(pesoabajar=valorpeso-pesoideal,alert("","Usted debera bajar: "+pesoabajar+" kg aprox.","success")):pesoideal>valorpeso&&iimc<25&&(pesoasubir=pesoideal-valorpeso,alert("Usted debera subir: "+pesoasubir+" kg aprox.","success"))}function sexohombre(){document.getElementById("medidas").style.display="none",peso=document.getElementById("peso"),valorpeso=peso.value,altura=document.getElementById("altura"),valoraltura=altura.value,iimc=valorpeso/(valoraltura*valoraltura),edad=document.getElementById("edad"),valoredad=edad.value,porcentajeH=1.2*iimc+.23*valoredad-10.8-5.4,alert("Su porcentaje  de grasa corporal es : "+porcentajeH),MCM=valorpeso-valorpeso*(porcentajeH/100),alert("Tu masa corporal magra es de: "+MCM+" kg aprox."),GT=valorpeso*(porcentajeH/100),iimc<=18&&iimc>=15&&valoredad<=20?(pesometadegrasa=.4*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>20&&valoredad<=30?(pesometadegrasa=.45*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>30&&valoredad<=40?(pesometadegrasa=.52*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>40&&valoredad<=50?(pesometadegrasa=.63*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=18&&iimc>=15&&valoredad>50?(pesometadegrasa=.7*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad<=20?(pesometadegrasa=.3*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>20&&valoredad<=30?(pesometadegrasa=.36*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>30&&valoredad<=40?(pesometadegrasa=.41*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>40&&valoredad<=50?(pesometadegrasa=.46*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=20&&iimc>=18&&valoredad>50?(pesometadegrasa=.6*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad<=20?(pesometadegrasa=.15*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>20&&valoredad<=30?(pesometadegrasa=.2*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>30&&valoredad<=40?(pesometadegrasa=.24*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>40&&valoredad<=50?(pesometadegrasa=.29*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>50&&valoredad<=60?(pesometadegrasa=.355*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc<=25&&iimc>=20&&valoredad>60?(pesometadegrasa=.445*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>20&&valoredad<=40?(pesometadegrasa=.1*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad<=20?(pesometadegrasa=.02*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>40&&valoredad<=50?(pesometadegrasa=.18*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>50&&valoredad<=60?(pesometadegrasa=.24*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>25&&iimc<30&&valoredad>60?(pesometadegrasa=.31*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg aprox.")):iimc>30&&iimc<35&&valoredad<=40?(pesometadegrasa=9e-13*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>40&&valoredad<=50?(pesometadegrasa=.11*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>50&&valoredad<=60?(pesometadegrasa=.15*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>30&&iimc<35&&valoredad>60?(pesometadegrasa=.22*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad<=20?(pesometadegrasa=1e-13*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>20&&valoredad<=30?(pesometadegrasa=.03*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>30&&valoredad<=40?(pesometadegrasa=.05*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>40&&valoredad<=50?(pesometadegrasa=.07*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>50&&valoredad<=60?(pesometadegrasa=.1*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>35&&iimc<40&&valoredad>60?(pesometadegrasa=.15*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad<=30?(pesometadegrasa=1e-13*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>30&&valoredad<=40?(pesometadegrasa=.011*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>40&&valoredad<=50?(pesometadegrasa=.018*GT/(porcentajeH/100),iimc>=20&&iimc<=25?alert("Esta en un buen rango de peso, mantengase en un peso cercano al que esta ahorita"):valorpeso>pesoideal&&iimc>25?(pesoabajar=valorpeso-pesoideal,alert("Usted debera bajar: "+pesoabajar+" kg aprox.")):pesoideal>valorpeso&&iimc<25&&(pesoasubir=pesoideal-valorpeso,alert("Usted debera subir: "+pesoasubir+" kg aprox.")),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>50&&valoredad<=60?(pesometadegrasa=.1*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")):iimc>40&&valoredad>60&&(pesometadegrasa=.15*GT/(porcentajeH/100),pesoideal=MCM+pesometadegrasa,alert("tu peso ideal es de: "+pesoideal+" kg")),iimc>=20&&iimc<=25?alert("Esta en un buen rango de peso, mantengase en un peso cercano al que esta ahorita","success"):valorpeso>pesoideal&&iimc>25?(pesoabajar=valorpeso-pesoideal,alert("Usted debera bajar: "+pesoabajar+" kg aprox.")):pesoideal>valorpeso&&iimc<25&&(pesoasubir=pesoideal-valorpeso,alert("Usted debera subir: "+pesoasubir+" kg aprox."))}window.callbellSettings={token:"y9tCavG2LdfWF36uiD7Hakkd"},function(){var e=window,a=e.callbell;if("function"==typeof a)a("reattach_activator"),a("update",callbellSettings);else{var d=document,o=function(){o.c(arguments)};o.q=[],o.c=function(e){o.q.push(e)},e.Callbell=o;var s=function(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://dash.callbell.eu/include/"+window.callbellSettings.token+".js";var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)};e.attachEvent?e.attachEvent("onload",s):e.addEventListener("load",s,!1)}}();