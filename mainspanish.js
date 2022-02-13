// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];
// const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Szczerze uważam", "Na 5 twierdzę", "Jestem pewien"];
// // console.log(names[index]);
// const nameGenerator = () => {
//  const indexName = Math.floor(Math.random() * names.length);
//  // const indexPrefix = Math.floor(Math.random() * prefixs.length);
//  // div.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`
//  div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[indexName]}`
// }
// btn.addEventListener('click', nameGenerator)
const cover = document.querySelector('.cover')
const btn = document.querySelector('button');
const btnPregunta = document.querySelector('.pregunta')
const btnRespuesta = document.querySelector('.respuesta')
const divQuestion = document.querySelector('.question')
const divAnswer = document.querySelector('.answer')
// const odpowiedz = document.querySelector('.odpowiedz')
const points = document.querySelector('.points')
// const pointRed = document.querySelector('.left')
// const pointGreen = document.querySelector('.right')



const showAllAnswers = document.querySelector('.buttonShowAll')
const questions = [
    '2.1.	Cual es la disculpa mas creativa que se te ha ocurrido all llegar tarde al colegio o al trabajo?',
    '2.2. Que cambiarias en tu vida si tuvieras todo el dinere del mundo?',
    '2.3. Si alguien del ano 4500 puidiera ver como vivimos hoy que creees que le sorprenderia mas?',
    "2.4.	Que titulo le pondrias a una pelicula sobre tu vida?",
    '2.5.	Cuando fuiste a un concierto po primera vez?',
    "2.6.Quando fue la ultima vez que te disfrazaste para carnaval?",
    "2.7.	Que haces cuando no recuerdas una palabra?",
    "2.8.	Que haces quando te pierdes en una ciudad?",
    "2.9.Que haras manana?",
    "2.10.Podremos conocer como sera el futuro?",
    "2.11.Que pasaria si te despertaras siendo un escarabajo?",
    "2.12.Que pasaria si conosieras a Marlyn Monroe?",
    "2.13.Que pasaria si fueras el presidente de tu pais?,",
    "2.14.Cuantas veces has mirado el movil hoy?",
    "2.15.	Como has aprendido a montar en bicicleta?",
    "2.16.Alguna vez has roto un espejo?",
    "2.17.Alguna vez has salido por la tele?",
    "2.18.Qual fue el primer libro que leiste?",
    "2.19.Si tuvieras que elegir una figura de comic para que fuera tu padre o tu madre cual seria?",
    "2.20.Que preferirias? Estar solo el resto de tu vida o estar siempre rodeado de gente insoportable?",
    "2.21.Preferirias no poder utilizar nunca mas una pantalla tactil o un teclado y un raton?",
    "2.22.Que preferirias? Ser un virtuoso impresionante con cualquier instrumento pero solo si io tocas desnudo o ser capaz de hablar cualquier idioma, pero solo si cierras los ojos y bailas mientras lo hablas?",
    "1.1. Si te reencarnaras en una fruta, que fruta serias?",
    "1.2. En el caso de que te fueras a pasar 1 semana con tu clon, crees que disfrutarias de la compana?",
    "1.3. Si durante el resto de tu vida pudieras escuchar una sola cancion, cual seria?",
    "1.4. Si te comes un saltamontes...",
    "1.6. Habra hoteles en el espacio?",
    "1.7. Que pasaria si aprobaras el DELE C1?",
    "1.8. Que pasaria si nacieras en Espana?",
    "1.9. Que pasaria si te perdieras en una isla?",
    "1.10. Alguna vez te has emocionado mirado un cuadro?",
    "1.11. Cual es el regalo mas extravagante que te has hecho?",
    "1.12. Cual fue la primera pelicula que viste en el cine?",
    "1.13. Cuantas horas dormiste en Nochevieja el ano pasado?",
    "1.14. Quanto aprendiste a montar la bicicleta?",
    "1.15. Puedes decir cinco actividades que haces nada mas levantarte?",
    "1.16. Alguna vez has comprado algo increiblemente caro?",
    "1.17. Que hiciste el jueves pasado?",
    "1.18. Que preferirias.. no volver a nunca utilizar las redes sociales o no volver a ver nunca ninguna pelicula o programa de t1levision?",
    "1.19. Preferirias ser completamente invisible por un dia o ser capaz de volar por una dia?",
    "1.20. Que preferirias.. tener una alfombra voladora o una coche que se pueda conducir bajo el aqua?",
    "1.21. Que harias si pudieras predecir el futuro?. Deja volar tu imaginacion.",
    "1.22. Si pudieras cenar con una persona famosa, con quien cenarias y por que?. Deja volar tu imaginacion.",
    "1.5. Usaremos los boligrafos dentro de treinta anos? Conviertete en un adivino y practica el futuro.",
    "3.1. Como le sacarias el mayor provecho de 20 euros?",
    "3.2. Si se rodara una pelicula sobre tu vida, que momentos deberia incluir?",
    "3.3. Con cuantos anos descubriste el gran secreto de Papa Noel?",
    "3.4. Cuando fue la ultima vez que te reiste sin parar?",
    "3.5. Si tubiera 150 anos... ?",
    "3.6. Si los mosquitos no existiesen?",
    "3.7. Que haces cuando ves a un amigo triste?",
    "3.8. Que haces cuando no consigues dormir?",
    "3.9. Que haras en tu proximo cumpleanos?",
    "3.10. A que hora te acostaras manana?",
    "3.11. Alguna vez te han dado planton?",
    "3.12. Alguna vez te has recibido una carta de amor?",
    "3.13. Que preferirias? No tener que volver a trabajar nunca o no tener que volver a dormir (asumiedo que no te sentiras cansado ni sufriras efectos negativos para tu salud)? ",
    "3.14. Preferirias hablar con fluidez en todos los idiomas y no poder viajar nunca, o poder viajar a cualquier lugar durante un ano, pero no ser capaz de aprender ni una sola palabra de otro idioma",
    "3.15. Que prefieririas? Que te obliguen a comer solo comida picante o solo comida increiblemente blanta?",
    "3.16. Si hablaras todos los idiomas del mundo?",
    "3.17. Si pudieras leer un libro en menos de 10 minutos?",
    "3.18. Que harias si el dinero dejara de existir?",
    "3.19. Que harias si un dia te despertaras siendo un mosquito?",
    "3.20. Supongamos que te toca la loteria. Como utilizarias el dinero?",
    "3.21. Alguna vez has estado en una fiesta a la que tubiese que acudir la policia?",
    "3.22. Hay dos cosas infinitas: el universo y la estupidez humana; y el universo no estoy seguro.",
    "4.1. ¿Qué libro crees que todo el mundo debería haber leído antes de morir ?",
    "4.2. Si te diera un vaso que pudieras llenar con lo que  quisieras, ¿de qué lo llenarías ?",
    "4.3. ¿Cuándo fue la última vez que bailaste la noche entera ?",
    "4.4. ¿Cuándo fue la última vez que un pájaro te dejó un “regalito” sobre tu cuerpo ?",
    "4.5. ¿Qué preferirías...no volver a enfadarte nunca más o no volver a sentir envidia ?",
    "4.6. ¿Preferirías vivir en una casa con paredes de cristal  transparentes en una ciudad o en esa misma casa, pero en medio de un bosque lejos de la civilización ?",
    "4.7. ¿Qué preferirías ?¿No quedarte atrapado nunca más en el tráfico o no coger un resfriado nunca más ?",
    "4.8. ¿Con qué película has llorado más en tu vida ?",
    "4.9. Si se me olvida el móvil en casa...",
    "4.10. ¿Qué te pondrás mañana ? (conviértete en un adivino y practica el futuro)",
    "4.11. ¿Dónde y cómo te ves dentro de 5 años",
    "4.12. ¿Crees que algún día la tecnología reemplazará a las personas ?",
    "4.13. ¿Alguna vez has ganado un premio ?",
    "4.14. ¿Cuándo has llorado escuchando una canción por última vez ?",
    "4.15. En el supuesto de que pudieras viajar en el tiempo para  cambiar tu pasado, ¿qué cambiarías ?",
    "4.16. ¿Cuál es el mejor libro que has leído ?",
    "4.17. ¿Y si pudieras detener el tiempo ?",
    "4.18. ¿Y si pudieras volar ?",
    "4.19. Si pudieras transportarte al colegio Hogwarts y conocer a Harry Potter ?",
    "4.20. ¿Qué harías si...cada día durara 30 horas ?",
    "4.21. ¿Qué harías si...la música dejase de existir ? (Deja volar tu imaginación y practica el condicional).",
    "4.22. La verdadera sabiduría está en reconocer la propia ignorancia” (Da tu opinión y practica el subjuntivo) ",

    "5.1. Que elegirias aparte de dinero, si pudieras tener veinte miliones de algo ",
    "5.2. En tu opinion, quien es la persona mas famosa del mundo?",
    "5.3. Que preferirias? Ser capaz de controlar el fuego o el aqua?,",
    "5.4. Preferirias no volver cortarte nunca con un hoja de papel o que nada se vuelta  a meter en tu ojo?",
    "5.5. Que preferirias? Despertar en medio de un desierto desconocido o despertarte en un barco en aquas desconocidas?",
    "5.6. Miras los armarios del bano de otras personas?",
    "5.7. Si estubieras obligado a abandonar tu casa y solo pudieras coger dos cosas, que te llevarias contigo?",
    "5.8. Que es mas importante para ti? Libertad o seguridad?",
    "5.9. Si hubiera tenido cinco hermanos?",
    "5.10. Que haces cuando te olvidas las llaves de casa?",
    "5.11. Que haces cuando te aburres?",
    "5.12. Crees que la gente vivira mas? Por que?",
    "5.13. Como se comunicara la gente dentro de 5anos?",
    "5.14. Has visitado ya un pais donde se habla espanol?",
    "5.15. Quando ha sido la ultima vez que te has reido de ti mismo",
    "5.16. Si pudieras hablar con tu 'yo' de hace 20 anos?",
    "5.17. Si pudieras leer los pensamientos de los demas?",
    "5.18. Que harias si pudieras conocer Cleopatra?",
    "5.19. Que harias si ganaras un viaje a cualquier lugar del mundo?",
    "5.20. Si tubieras cambiar tu nacionalidad? Que otra nacionalidad escogerias?",
    "5.21. Dios no te hubiera dado la capacidad de sonar sin darte tambien la posibilidad de convertir tus suenos en realidas",
    "5.22. Cuanto hables, procura que tus palabras sean mejores que el silensio - proverbio Hindu. (Da tu opinion y practiva subjuntivo)",
    "6.1. En el caso de que hiciera un viaje tu suegra y tu, vosotros solos, crees que disfrutarias el viaje?",

    "6.2. Cual es el mejor libro que has leído?",
    "6.3. Que preferirias ... vivir sin Internet o vivir sin aire acondicionado ni calefaccion?",
    "6.4.Si te transportan 500 anos en el tiempo de forma permanete, preferirias ser transportado al pasado o al futuro?",
    "6.5.Que preferirias? Tener un solo pezon o dos ombligos? ",
    "6.6.Que harias o dirias si tuvieras la atencion del mundo entero durante 30 segundos? ",
    "6.7. Cual es el invento mas inutil de todos los tiempos?.",
    "6.8. Si fueras un perro?.",
    "6.9. Se podra viajar a la luna dentro de unos anos?",
    "6.10. Que pasara con los libros en formato papel?",
    "6.11. Has descubierto un sabor nuevo ultimamente?",
    "6.12. Crees que puede predecirse el futuro leyendo la mano?",
    "6.13. Alguna vez has querido ser una persona diferente?",
    "6.14. Si tuvieras que elegir un personaje de dibujos animados para que fuera tu pareja, cual seria?",
    "6.15. Si fueras mas pequeno que un insecto?",
    "6.16. Si pudieras caminar sobre el agua?",
    "6.17. Si pudieras ser como el Rey Midas y poder convertir cualquier cosa en oro?",
    "6.18. Que harias si gobernaras el mundo?",
    "6.19. Que harias si no tubieras ordenador?",
    "6.20. Si pudieras conocer a un personaje historico, quien seria y por que?",
    "6.21. A que preferirias renunciar? A la nevera, a la television o al movil?",
    "6.22. Inteligencia militar son dos términos contradictorios.",
    "7.1. Conoces otras dietas aparte de la mediterranea? Son igualmente saludables?",
    "7.2.Te preocupa la relacion entre la dieta y la salud? Tomas alguna precaucion especial? Tienes algun habito alimenticio saludable o no tan saludable?",
    "7.3. En tu casa, con que se suelen alinar las ensaladas? Y en tu pais, hay cultura de aceite vegetal?",
    "7.4. Que preferirias.. que tus manos siguieran creciendo a medida que vas envejeciendo o que lo hicieran tus pies?",
    "7.5. Preferirias revivir el mismo dia durante 365 dias o perder un ano de tu vida?",
    "7.6. Que preferirias... ser capaz de hablar con animales terrestres, nimales que vuelan o animales que viven bajo el agua?",
    "7.7. Que haces cuando tu movil se queda sin bateria?",
    "7.8. Que haces cuando te levantas de mal humor?",
    "7.9. Como sera el education en el futuro?. Sera solo a distancia?",
    "7.10. Que pasara con la alimentation? Mejorara o empeorara?",
    "7.11. Alguna vez tuviste ganas de tirar tu movil po la ventana?Por que? Que paso?",
    "7.12. Si te convirtieras en un dulce, que dulce serias?",
    "7.13. Alguna vez no te has cepillado los dientes como te dice la dentista?.",
    "7.14 Crees que hay muchas personas que pueden diferenciar el sabor de un vino caro y el de uno barato?",
    "7.15. Si vivieras en un arbol?.",
    "7.16. Si tubieras el poder de cambiar el tiempo climatico?",
    "7.17. Si fueras detective por un dia?.",
    "7.18. Si conocieras al Doctor Who?",
    "7.19. Que harias si tubieras superpoderes?",
    "7.20. Que harias si no tubieras que estudiar?",
    "7.21. Que harias si te encontraras con Albert Einstein?",
    "7.22. Casi siempre la palabra burla significa pobreza de espiritu - La Bruyere. Da tu opinion.",
    "8.1. ¿Cuánto dinero necesitarías para organizar una vida a tu gusto ?",
    "8.2. ¿Qué lugar crees que todo el mundo debería visitar antes de morir ? ",
    "8.3. ¿Qué haces cuando te encuentras un objeto que no es tuyo ? ",
    "8.4. ¿Qué haces cuando no entiendes a la profesora?",
    "8.5. ¿Alguna vez has dormido al aire libre?",
    "8.6. ¿Has hecho alguna locura en tu vida?",
    "8.7. ¿Y si vivieras bajo el mar?",
    "8.8. ¿Y si cumplieras años todos los días?",
    "8.9.¿Y si fueras más rápido que un coche de fórmula 1?",
    "8.10. ¿Y si encontraras un huevo de un dragón?",
    "8.11.  En tu opinión, ¿qué crees que tiene más influencia sobre el carácter de las personas: los genes o la influencia exterior ? ",
    "8.12. Supongamos que durante el resto de tu vida solo puedes comer una cosa, ¿por qué te decidirías ? ",
    "8.13. ¿Qué harías si…fueras invisible? (Deja volar tu imaginación y practica el condicional) ",
    "8.14. ¿Qué harías si encontraras la lámpara mágica de Aladino ? (Deja volar tu imaginación y practica el condicional) ",
    "8.15. ¿Qué harías si tuvieras 3 meses de vacaciones? (Deja volar tu imaginación y practica el condicional) ",
    "8.16. ¿Preferirías perder la capacidad de leer o perder la capacidad de hablar ? ",
    "8.17. ¿Qué preferirías? ¿No volver a perder tu móvil o no volver a perder tus llaves ? ",
    "8.18. ¿Qué preferirías? ¿No tener dedos en las manos o no tener codos ? ",
    "8.19 ¿Qué preferirías? ¿Renunciar a bañarte durante un mes o renunciar a Internet durante un mes ? ",
    "8.20. Hay que tener cuidado al elegir a los enemigos porque uno termina pareciéndose a ellos . Autor: Jorge Luis Borges(Da tu opinión y practica el subjuntivo).",
    "8.21. Nunca consideres el estudio como una obligación sino como una oportunidad para penetrar en el bello ymaravilloso mundo del saber. Autor: Albert Einstein (Da tu opinión y practica el subjuntivo).",
    "8.22 “El que no tiene celos no está enamorado” San Agustín (Da tu opinión y practica el subjuntivo)",
    "9.1 ¿Crees que los hermanos gemelos realmente tienen sensaciones similares al mismo tiempo ?",
    "9.2 ¿Crees que los gemelos pueden comunicarse telepáticamente ?¿Tienen una conexión extrasensorial ?",
    "9.3 ¿Qué te gustaría saber hacer mejor ?",
    "9.4 ¿Crees que habría menos conflictos en el mundo si todos habláramos la misma lengua ?",
    "9.5 ¿Qué preferirías ?¿Perder tu mano izquierda o tu pie derecho ?",
    "9.6 ¿Preferirías estar obligado a bailar cada vez que escuches música o a cantar cada vez que escuches una canción ?",
    "9.7 ¿Preferirías que tu único medio de transporte fuera un burro o una jirafa ?",
    "9.8 ¿Preferirías estar encerrado en una habitación que esté constantemente a oscuras durante una semana o en una habitación con una luz cegadora ?",
    "9.9 ¿Qué pasaría si encontraras 500€ por la calle ?",
    "9.10 Si hubiera nacido flor… ",

    "9.11 ¿Alguna vez has probado la nieve ?",
    "9.12 ¿Alguna vez has perdido algo ?",
    "9.13 ¿Cómo reaccionarías si conocieras a un niño de 10 años que habla 10 lenguas con fluidez ?",
    "9.14 ¿Qué es el arte ?¿Cómo se puede saber si una obra de arte es buena ?",
    "9.15 ¿Cuál es tu palabra favorita en español ?",
    "9.16 ¿Y si tuvieras una varita mágica ?",
    "9.17 ¿Y si te encontraras con un extraterrestre ?",
    "9.18 ¿Qué harías si…ganaras 1 millón de euros ?",
    "9.19 ¿Qué harías si pudieras viajar en el tiempo ? ",
    "9.20 'El conocimiento habla, pero la sabiduría escucha'. Da tu opinion.",
    "9.21 'Uno llega a ser grande por lo que lee y no por lo que escribe'. Autor: Jorge Luis Borges (Da tu opinión y practica el subjuntivo)",
    "9.22 ¿Qué pasaría si perdieras tu maleta ?",
    "10.1 Si te reencarnaras en un animal, ¿cuál elegirías ?",
    "10.2 En el supuesto de que pudieras viajar en el tiempo para cambiar la historia, ¿qué cambiarías ?",
    "10.3:¿Qué preferirías ?¿Tener una piel que cambie de color en función de tus emociones o que aparezcan tatuajes por todo tu cuerpo mostrando lo que hiciste ayer ?",
    "10.4 ¿Preferirías comer una caja de macarrones secos o una taza de arroz crudo ?",
    "10.5 ¿Qué preferirías ?¿Ser un personaje secundario en la última película que has visto o en el último libro que has leído ?",
    "10.6 ¿Irías a la cárcel si te dieran 10 millones de euros por ello ?",
    "10.7 Si tuvieras la posibilidad de viajar en el tiempo y borrar a alguien ¿a quién borrarías y por qué ?",
    "10.8 Si tuvieras una memoria de elefante… (practica condicionales)",
    "10.9 ¿Crees que la sociedad actual da demasiada importancia al aspecto físico ?",
    "10.10 Si supieras que vas a morir en una semana, ¿qué harías ?",
    "10.11 ¿Qué pasaría si vivieras en los años 40 ?",
    "10.12 ¿Qué pasaría si encontraras a Elvis vivo ?",
    "10.13 ¿Alguna vez has escrito un poema o un relato corto ?",
    "10.14 ¿Sabes por qué tus padres te han puesto tu nombre ?",
    "10.15 ¿Y si pudieras ser invisible ?",
    "10.16 ¿Y si tuvieras 5 piernas ?",
    "10.17 ¿Y si pudieras ver en la oscuridad ?",
    "10.18 ¿Y si pudieras ver todo lo que hace el presidente ?",
    "10.19 ¿Y si tuvieras el poder de la teletransportación ?",
    "10.20 ¿Y si pudieras hablar con el autor de tu libro favorito mientras lo lees ?",
    "10.21 'El sentido común es esa colección de prejuicios que s adquiere hasta los 18 años, y que después es muy difícil modificar'. Autor: Albert Einstein",
    "10.22 'Las guerras seguirán mientras el color de la piel siga siendo más importante que el color de los ojos'. Autor: Bob  Marley",



    "51 Efficiente",
    "52 Un sinfín de informes.",
    "53 Mermar su salud.",
    "54 Con paso firme.",
    "55 Arqueando las cejas.",
    "56 Exhausto ",
    "57 Interrogatorios",
    "58 Escribiendo los informes ",
    "59 Pasarse la noche en vela - ",
    "510 Me va a dar algo",

    "511 Refuerzos",
    "512 Apilado",
    "513 Hacer caso",
    "514 Merecer",

    "515 Quemarse",
    "516 Ponerse las pilas",

    "517 ¡Hala!",

    "518 “No dar un palo al agua”",
    "519 Pasa por .. ",
    "520 Mimarse",
    "521 Pillar algo de paso",
    "522 Una manzana.",
    "523 Le cae bien Nadal",


    "524 No dar abasto",
    "525 Estar agotado/a",
    "526 Tomárselo con calma",
    "527 Pasarlo bien",
    "528 Soler (hacer algo)",
    "529 Recién (hecho /escrito / nacido…)",
    "530 Una afición",
    "531 Acompañar (el tiempo acompaña) -",
    "532 Una pasión",
    "533 “Me paso patinando toda la tarde” ",
    "534 Es hora de (comer) -",
    "535 Hoy toca paella” – Tocar",
    "536 Un nosequé un nosecuantos; un nosequién… ",
    "538 El agobio - ",
    "539 El refrán",
    "540 Cantidad",
    "541 Ir a dormir a las tantas",
    "542 Aprovechar",
    "543 Salir de Marcha",
    "544 Cambiar de aires",
    "545 La calma ",
    "546 Un ruido failiar ",
    "547 Reconocer ",
    "548 Una ciudad compopolita ",
    "549 Un sonido agudo ",
    "550 Un calor horroroso ",
    "551 una cafetera ",
    "552 Echar una mano ",
    "553 sonrie aliviada ",
    "554 que majo ",
    "555 El foco de luz ",
    "556 la extension ",
    "557 La compentencia ",
    "558 una cuestion ",
    "559 un privilegio ",
    "560 Tengo un hambre que me muero ",
    "561 La comida casera ",
    "562 Una napolitana ",
    "563 Poner la tele mas alto ",
    "564 Revelar ",
    "565 Una tendencia hacia ",
    "566 analyzar, un analisis ",
    "568 Un corpuss ",
    "570 Encabezado por ",
    "571 Precedente de, preoceder ",
    "572 Una balanza ",
    "573 Posicionarse ",
    "574 Entreabrir un ojo ",
  





]

const answers = [
    '2.1 Mi mas tonta disculpa fue que mi perro me mordió todos los pantalones y no tenia nada para ponerme, en mi camino al trabajo, dos policías  me detuvieron e intentaron encerrarme en la cárcel .',
    '2.2. Si tuviera todo el dinero, me dejaría un poco para mí. Daría el resto del dinero a las manos de las que fue recogido.',
    '2.3. Si alguien que vivió hace unos miles de años pudiera ver lo que está sucediendo en el mundo, segura mente se sorprenderá de la velocidad a la que se mueve la gente. Se sorprendería de que, a pesar de un desarrollo de la civilización tan alto, no podamos evitar el hambre en el mundo.',
    "2.4.Si hicieran una película sobre mi vida, definitivamente la llamarían: en prevision de la felicidad.",
    "2.5.Para ser honesto, nunca he estado en ningún concierto, espero cambiar este estado de cosas este año.",
    "2.6.Quiero ser honesto contigo. El carnaval no se celebra en mi país. El único carnaval que recuerdo es cuando fui a la escuela primaria. Me vestí de zorro entonces.",
    "2.7.Cuando olvido una palabra, suelo pensar por unos segundos y hablo de repente. Alternativamente, encuentro un sinónimo que es popular y muy usado.",
    "2.8.Cuando me pierdo en una ciudad que no sé, les pido indicaciones a los transeúntes o trato de ir al centro porque allí es lo más seguro.",
    "2.9.Me prepararé para el trabajo por la mañana. Me levantaré temprano en la mañana, prepararé té y encenderé el horno. Luego desayunaré y mientras conduzco un automóvil aprenderé español.",
    "2.10.Creo que no estamos seguros de lo que sucederá en el futuro. Queda por esperar que todos seamos felices y toda la humanidad viva en paz.",
    "2.11.Si me despertara como un escarabajo, me subiría al árbol más alto y volaría tan lejos como pudiera mirando la Tierra desde arriba.",
    "2.12.Si conociera a Marilyn Monroe, le preguntaría cómo logró tal éxito. Luego la invitaría a beber vino y hablar sobre eventos interesantes y nuestras opiniones.",
    "2.13.Si me convirtiera en el presidente de mi país, primero reformaría los tribunales y la educación. Iría a los votantes para reuniones regulares y negociaría con líderes de todo el mundo.",
    "2.14.Hoy vi el auto solo unas pocas veces. Y a decir verdad, era mi auto porque no iba a ninguna parte.",
    "2.15.Aprendí a andar en bicicleta a través de prueba y error. Me he caído algunas veces, es obvio. pero la curiosidad del niño es ilimitada y después de algunas semanas pude conducir mis dos ruedas.",
    "2.16.Me pasó a romper un espejo un par de veces. Se dice que trae mala suerte, pero no lo creo. No creo en la superstición.",
    "2.17.Nunca he estado en televisión. Cuando tenía siete años, mis padres me amenazaron con ir a un programa de música, pero no quería.",
    "2.18.El primer libro que leí fue sobre pingüinos que escaparon de la granja. Era muy delgada y no recuerdo cuál era exactamente la historia en este libro.",
    "2.19.Si tuviera que elegir un personaje de un cómic, elegiría un cocinero de un cuento de hadas gomoso. A este personaje le gustaba cocinar y lo hacía todo el tiempo.",
    "2.20.Prefiero pasar mi vida solo que estar rodeado de personas inseguras. Definitivamente contribuirían a la disminución de mi salud y no terminaría bien para mí.",
    "2.21.Prefiero nunca volver a usar la pantalla táctil. En esa pantalla escribo mucho más lento y en invierno con guantes en mis manos, es difícil operar dispositivos con pantalla táctil.",
    "2.22.Preferiría ser un virtuoso que juega con cualquier instinto mientras juega desnudo. Ahora, cuando soy joven, tengo un cuerpo hermoso y maravilloso, por lo que sería una atracción adicional. Además, los oyentes a menudo cierran los ojos mientras escuchan para que esto no sea un problema.",
    "1.1. Seria pina porque es muy sabrosa. Tiene us aspecto decorativo y es muy dulce por dentro. Todos lo adoran! Tambien madura en un clima calido",
    "1.2. Creo que si. Hariamos las cosas que iba hacer por mucho tiempo. Ciertamente no estaremos aburridos el uno col el otro por une mes",
    "1.3. Seria una cacion que a menudo eschucho cuadno voy al trabajo. Su titulo es 'no puedo quitar mis ojos de ti'. Esta es la portada de la version estadounidense pero el la version espanola",
    "1.4. Si comiera un saltamones vomitaria. A menos que no supiera que se trata de un insecto  y que se cocinaria y sazonaria adecuadamente.",
    "1.6. No lo creo. Hay suficiente espacio en la tierra. Do lo contrario seria demasiado complicado",
    "1.7. Lo primero que haria seria publicar una foto con una diploma en Instagram :D Definitivamente seria feliz y decidi encontrar yn trabajo relacionado con el espanol",
    "1.8. Tendria una tez mas oscura y podria hablar espanol. Ademas, no tendria que conquelarme en invierno",
    "1.9. Descansaria del trabajo y de otras personas. Finalmente tendria paz",
    "1.10 Si, una vez que me impresiono una cuadro de un Leonard llamada 'Mona Lisa'",
    "1.11. El regalo mas extravagante que recibi fue un cupon de compras para una tienda de ropa y un boleto de cine",
    "1.12. Era una 'The Shindler List' - una pelicula que contaba las historias de judios en el campo aleman",
    "1.13. Solo dormi pocas horas. Despues de una fiesta con los vecinoss, me levante temprano a la manana seguiente",
    "1.14. Aprendi a montar la bicicleta cuando tenia 6 anos. Al principio hubo algunas caidas peligorsas.",
    "1.15. Voy al bano, me cepillo los dientes, preparo el desayuno, me pongo la ropa de trabajo y fumo en el horno",
    "1.16. Mi compra mas cara fue una camara. Costo dos mi salario.",
    "1.17. Estaba en el trabajo y luego recogi a mi primo de los ensayos de la orquestra y lo lleve a casa por la noche.",
    "1.18. Prefiero no ver la television y sus peliculas porque de vez en quando hay comerciales alli.",
    "1.19. Preferiria no ser visible por un dia. Podria escabulirme en espacios cerrados sin ser notado",
    "1.20. Prefiero tener una alfombra voladora. Todos los veranos volaria pacificamente sobre el bosque con los pajaros",
    "1.21. Si pudiera predecir el futuro, sorprenderia a mis amigos con mi conocimiento. Iria a un programa de juegos para ganar una fortuna",
    "1.22. Tom Cruse es la primera persona que vino a mi mente. Es un actor ambisioso, valiente y implementa projectos ambiciosos",
    "1.5. En treinta anos, los jovenes no sabian como se ve la pluma. Escribiremos en nuestra telefonos intelignetes y firmaremos documentos electronicamente.",
    "3.1.Obtienes la mayores beneficios cuando compras buena cerveza y ingredientes para la pizza mas simple que hacerias tu misma. Tu cena seria deliciosa",
    "3.2. Si estubieran filmado una pelicula asi, definitivamente tendrian que tener en cuenta  un viaje rapido en automobil y el amor por el manana corriendo",
    "3.3. No me aquerdo exactamente. Supongo que a los doce anos. Los mas probable es que me entere por la television",
    "3.4. Fue hace unos dias en el trabajo cuando mi colega de trabajo conto una gran broma",
    "3.5. Si tubiera 150 anos leeria la mayoria de los libros del mundo y aconsejaria el presidente como especialista de seguridad",
    "3.6. Si los mosquitos no existen, no tendria que levantarme por la noche, porque algunos de ellos me mordieron. Me dormiria mas rapido en varano",
    "3.7. Quando veo a un amigo triste, le insto a que tome alcohol o lo convenza de que su problema es irrelevante",
    "3.8. Quando no puedo dormir empiezo a leer el libro hasta que estoy tan aburrido que me quedo dormido",
    "3.9. En mi proximo cumpleanos descansare en una hamaca bajo el sol de verano, tomare un copa y por la noche ire en moto al bosque cercano hasta del atardecer.",
    "3.10. Ayer me ire a dormir como siempre. Por supuesto que queria ir mas antes pero lo no ha sucedo.... Como siempre, me acostatechoe alrededor de la medianoche.",
    "3.11. Una vez ma ha dado planton una chica, que no ha venido a la reunion. Ella me llamo y dijo que lo haria. Solo creo que no es adulto para salir con alquien.",
    "3.12. Si. Recibi varias veces. Fue muy agradable y tengo allguno de ello al dia en un cajon de la abitacion",
    "3.13. Preferiria no tener que dormir nunca mas, asumiendo que no sentiria cansado ni sufriria efectos negativos para mi salud",
    "3.14. Elegiria la segunda option. Podria utilizar la technologia para la comunication como en traductor en vivo. Despues de eso, los mas importante para mi seria lo que veria; me refiero a paisages, animales, arquitectura",
    "3.15. Prefiero comer solo platos picantes porque me gustan los sabores picantes. No me gustan los alimentos platos",
    "3.16. Si hablaria todos idiomas del mundo crearia cursos de idiomas en linea y ganaria mi jubilacion.",
    "3.17. Obviamente leia todos los libros de la escuela que no podia leer antes",
    "3.18. Si el dinero dejara de existir, dejara de comprar las cosas estupidas. Yo cuidaria mi huerto y vegetales y tendira al menos que comer en el mundo de gran crisis economica.",
    "3.19. Si me despiertara siendo un mosquito, volaria a un prato por la noche para tener huego y conversationes con otros mosquitos",
    "3.20. Invertiría el dinero en activos, transferiría una parte al banco a mi cuenta y viviría de los intereses bancarios. ",
    "3.21. Una vez que organizo una hoguera, a los tres en punto, la policia tubo que intervenir porque la musica estaba tocando todo el regulator",
    "3.22. Jaja.. algunas personas pueden ser tan estupidas e irresponsable que arriesgan sus proprias vidas y las vida de los otros por sus estupidas ideas",
    "4.3.Recuerdo que toda la noche bailé en una fiesta durante mis vacaciones en la capital durante el verano.Estuve allí con mi primo, a quien se suponía que debía llevar a casa, pero lo olvidé.",
    "4.4.Nunca he tenido una caca de pájaro, pero recuerdo que cuando estábamos en la escuela primaria, los cuervos volaban sobre nuestras cabezas y uno de ellos frotó la chaqueta de mi amigo.Era una vista terrible y ridícula al mismo tiempo.",
    "4.5.Prefiero nunca sentir celos.No es un sentimiento muy desagradable, pero permanece en una persona durante mucho tiempo.",
    "4.6.Prefiero vivir en medio del bosque lejos de la civilización porque valoro la paz y la privacidad.Hoy en día, en la era de Internet, estamos conectados al mundo externo, incluso en los confines del mundo.",
    "4.7.Prefiero nunca quedar atrapado en el tráfico de nuevo.Odio perder el tiempo, especialmente perderlo por otros.",
    "4.8.La película donde lloré es sobre el rey león.La escena me conmovió mucho cuando el simba fue modelado por un segundo león y cayó de una roca.Su pequeño hijo vio a su padre por primera vez.Esta escena fue muy conmovedora.",
    "4.9.Si no sé dónde está mi teléfono celular en casa, lo primero que hago es buscarlo debajo de la manta.Luego, desde el segundo teléfono, con la esperanza de que pudiera escuchar mi señal.Si no lo encuentro, me rindo.Se encontrará de alguna manera.",
    "4.10.Mañana usaré pantalones elegantes y una camisa negra.Para esto intentaré ponerme un chaleco y un cinturón de buen gusto.Todo porque mañana seré cantinero en una fiesta.",
    "4.11. En cinco años me veo con una mujer hermosa a mi lado, tendré un gran trabajo en la industria de TI.Probablemente viajaremos alrededor del mundo y exploraremos diferentes culturas.Después de todo, creo que entrenaré deporte para mantenerme en forma.Es poco probable que me quede en un pueblo pequeño.",
    "4.12. Creo que en el futuro la tecnología reemplazará a los seres humanos en ciertas áreas de la vida.Sin embargo, en el amor, nada puede reemplazar a otro hombre y esta esfera seguirá siendo un dominio humano.Quizás cambie, pero no lo creo.",
    "4.13.Si, una vez compré un boleto de lotería y gané más de 5PLN.Los recogí al día siguiente y podía permitirme un capricho de una vez.Por supuesto, perdí este dinero en un abrir y cerrar de ojos.",
    "4.14.Recientemente lloré escuchando una gran canción que era muy enérgica, estaba en italiano y hablaba de mucho amor.Ella era un género pop si no me equivoco.",
    "4.15. Si pudiera retroceder en el tiempo, conocería a más personas en mi juventud, aprendería lo que quiero y viajaría más por el mundo.",
    "4.16.El mejor libro que he leído es la historia del surgimiento de la mitología griega.Cada una de las historias es ligeramente diferente pero intrigante.Habla sobre las ideas de los antiguos griegos sobre cómo se creó el mundo y qué fuerzas misteriosas lo gobiernan.",
    "4.17.Si pudiera detener el tiempo lo haría antes de una terrible catástrofe o cuando mi equipo favorito marque un gol durante el partido.",
    "4.18.Si pudiera volar, volaría en los calurosos días de verano sobre los campos con los pájaros y vería las hermosas vistas.Sentía el viento en mi cabello y escuchaba el sonido del aire en mis oídos.",
    "4.19.Si pudiera ser transportado a la universidad de Harry Potter y conocerlo, le preguntaría sobre varios trucos y me gustaría competir con él más tarde.",
    "4.20.Si, un día durara 30 horas, tendría 6 horas adicionales por placer.Entrenaba más, me encontraba con mis amigos y miraba las estrellas durante al menos media hora por la noche.",
    "4.21. Si la música dejara de existir, estaría muy decepcionado.No escuchaba nada en el trabajo o en el automóvil mientras viajaba al trabajo o de vacaciones.la vida perdería sentido, por decir lo menos.",
    "4.1. Creo que todos deberían leer un libro sobre el gran amor de dos amantes antes de morir.También recomendaría un libro que diga adiós a África.",
    "4.2. Si tuviera un jarrón que pudiera llenar con lo que quisiera, me gustaría que se llenara con alguna bebida noble o monedas de oro.",
    "4.22. hmmm",

    "5.1. En ese caso me gustaria veinte miliones de plantulas de arbustos y arboles. Porque tengo unas pocas hectares de tierra en una docena de anos, las vendi con fines de lucro.",
    "5.2. La persona mas famosa es el Papa, porque lo conoce y reconoce, como una persona valiosa de mas que de tres mi miliones de personas",
    "5.3. Prefiero controlar el aqua. Con tal poder podria influir en el flujo y reflujo y prevenir inundaciones. Que mas no seria no tsunami.",
    "5.4. Definitivamente yo preferia conrtarme nunca con una hoja de papel. No me gusta mucho este sentimiento. Me dan escalorios.",
    "5.5. Prefiero elegir que me despierte en medio de un desierto desconocido. Por supesto, tendria que tener mucha aqua y comida conmigo",
    "5.6. No tengo la acostumbre de mirar los muebles del bano de otra persona quando estoy en la casa. Aunque a veces diseno tales cosas en el trabajo, no hago eso.",
    "5.7. Si tubiera que abandonar de casa rapidamente y coger solo dos cosas, seria una computadora portatil, porque tengo todos los archivos alli. Lo segundo son mis libros donde dentro tengo mis ahorros ",
    "5.8. La libertad es lo mas importante para mi. Libertad que no limita y por lo tanto te da una sensation de seguridad",
    "5.9. Si tubiera sinco hermanos probablemente seria el padrino de cada uno de sus hijos",
    "5.10. Si olvidaba las llaves de mi casa, primero iria a uno de mis primas. Dormiria alli y el dia siguiente pensaria que hacer. Seguramente la solution de problema se encontraria por si misma",
    "5.11. Nunca me aburro. Pero cuando esto sucede, trato de tomar un libro o salir a correr",
    "5.12. Creo que la gente no vivira para siempre. Al final puede ser que el hombre se infecte con un virus mortal o muera en un accidente de trafico",
    "5.13. Todo sera igual que ahora. Hablaremos en persona por telefono y por internet",
    "5.14. No he estado en ningun pais donde hablan espanol. Lo interesante es que tambien he estado aprendiento ingles duranto 10 anos y no he estato en un pais donde ese idioma sea reconocido como oficial",
    "5.15. La ultima vez que me rei de mi mismo fue quando vi mis fotos de los viejos tiempos.",
    "5.16. Si pudiera hablar con mi 'yo' hace 20 anos, me diria a mi mismo que aprender y con quien pasar el rato",
    "5.17. Si pudiera leer los pensamientos de los demas definitivamente seria estupido despues de unos dias.",
    "5.18. Si conocieria Cleopatere le preguntaria como gano al trono a pesar de ser una mujuer",
    "5.19. Si ganera una viage a un lugar donde gustaria, elegiria los lugares mass bellos de America del Sur. Probablemente conocerra la cultura, el arte y  a tardes me sentaria en el porche en un clima calido, bebiendo alcohol local.",
    "5.20. Si tubiera que cambiar mi nacionalidad escogeria nacionalidad estadounidense. Podria volar a los Estados Unidos sin persmiso y sin demora. Podria trabajar alli sin permiso y tener una pension alta en la vejez.",
    "5.21. Creo que cada sueno que tengamos se hará realidad. Solo necesitamos creer firmamente y ser desciplinados en la busqueda de este objetivo.",
    "5.22. Cada vez que digo trato de hacerlo claramente con la entonacion adequada para que el oyente estE satisfecho con la conversation.",


    "6.1. Creo que sí, si a ella le gustaban las fiestas. De todos modos, primero tendría que tener a mi suegra para pensar en tal propuesta.",
    "6.2. El mejor libro que leí fue un libro sobre la vida de una familia polaca en el río Niemen. La acción tuvo lugar a principios del siglo XX.",
    "6.3. Sin embargo, preferiría tener calefacción y aire acondicionado. Sin estos dos elementos, sería difícil concentrarse en el trabajo utilizando Internet, concentrarse en el trabajo o en el funcionamiento normal.",
    "6.4. Me gustaría ser trasladado al futuro. Vería cómo vive la gente, podría usar tecnología avanzada y medicina moderna. ",
    "6.5.Qué pregunta más extraña. Si tuviera que elegir, preferiría tener dos ombligo. Incluso iría junto con los pezones: D. En general, no quiero enfrentar tal elección.",
    "6.6. Si tuviera tanto tiempo, diría: haz el amor, da lo mejor de ti, ¡no te arrepientas de nada! Con los segundos restantes cantaría algo.",
    "6.7. La invención más inútil de la humanidad es el comunismo. Las personas se vuelven perezosas y piensan que lo merecen todo",
    "6.8. Si fueras un perro?",
    "6.9. Si fuera posible, probablemente volaría allí algunas veces. Definitivamente aprovecharía esta oportunidad, pero este viaje no podría perder mucho tiempo. Tengo mucho que hacer en la Tierra.",
    "6.10. Los libros en papel se almacenarán en bibliotecas, museos y bibliotecas en casas particulares, pero continuarán disfrutando de popularidad. ",
    "6.11. Hace poco pedimos sushi y había jengibre. Ni siquiera sabía que se veía así. Por supuesto, el sabor no se puede describir, pero fue realmente interesante.",
    "6.12.Ciertamente, no puede predecir el futuro leyendo de su mano. Alternativamente, una persona que cree tan firmemente puede manejar su futuro para que al final lo que escuchó originalmente sucedería. ",
    "6.13. El hombre siempre quiere cambiar para mejor, así que trato de ser esa persona. El lema de mi vida es: seguir avanzando, pase lo que pase.",
    "6.14. Me gustaría que fuera una persona agradable, bien formada e ingeniosa. Podría ser una mujer gata.",
    "6.15. Si fuera tan pequeño, lo usaría y me subiría a un automóvil que iría al aeropuerto, luego me subiría desapercibido al avión y viajaría por todo el mundo.",
    `6.16. Si pudiera caminar sobre el agua, iría al programa "Tengo talento" y sorprendería al mundo con mi habilidad. ¡Haría una fortuna!`,
    "6.17. Con esta habilidad, me iría del país a los Estados Unidos y haría negocios allí. Cumpliría mis sueños mucho más rápido.",
    "6.18. Si gobernara el mundo, organizaría juegos cada dos años, y cada quinto día a la semana estaría libre del trabajo.",
    "6.19. Si no tuviera una computadora, probablemente me aburriría hasta la muerte: D. Me encontraría con mis amigos cara a cara.",
    "6.20. Me gustaría conocer a Faraón para decirme exactamente cómo se llevó a cabo la construcción de las pirámides.",
    "6.21. Definitivamente abandonaría la televisión. No la miro porque es una pérdida de tiempo. Entonces renunciaría a la nevera. Sin embargo, el auto es insustituible.",
    "6.22. hmmmmmmm No entiendo la pregunta :/",
    "7.1.Además de la dieta mediterránea, también conozco una dieta ligera y digerible. Creo que eso coincide con lo anterior. El énfasis está en el cumplimiento del menú, que no carga al cuerpo y permite un proceso de digestión rápida. Se eliminan los productos aceitosos, fritos y muy condimentados.",
    "7.2.En primer lugar, trato de comer sano y en momentos específicos del día. Tomo alcohol una vez a la semana. Sé que es un mal hábito, pero en pequeñas cantidades creo que me lo hará.",
    "7.3. Muy a menudo, la ensalada consiste en tomates, cebollas, hojuelas de lechuga, pepino. Todo esto se mezcla con aceite de oliva y se sazona.",
    "7.4. A medida que envejezco, prefiero que mis pies crezcan. No son tan visibles como las manos y no causarían sorpresa a la gente.",
    "7.5. Preferiría experimentar el mismo día una y otra vez durante 365 días. Desde el primer segundo después de despertar sabría qué hacer, dónde está y qué sucederá. Lo usaría",
    "7.6. Prefiero poder hablar con animales que pueden volar. De esta manera, podría enviar cartas por aire o saber qué está pasando a la vuelta de la esquina.",
    "7.7.Me enojo mucho porque sucede en el momento menos apropiado: D Estoy buscando rápidamente un cargador y lo enchufo, esperando que se cargue rápidamente.",
    "7.8. Cuando me levanto de mal humor, primero hago café, salgo con ella e intento ventilar. Me digo a mí mismo que esto es solo temporal y que mi estado de ánimo está cambiando.",
    "7.9. Es muy probable que sea solo a distancia. En la era del corona virus ya es una realidad. La gente se acostumbra a este formulario y lo valorará.",
    "7.10. La comida probablemente mejorará. Se imponen normas a los productores de alimentos que deben cumplir. La comida también será más orgánica y, por lo tanto, más saludable.",
    "7.11. No recuerdo ese caso. Probablemente en un ataque de ira, una vez quise tirar el teléfono pero no por la ventana.",
    "7.12.Sería chocolate con nueces, que es dulce y nutritivo. A todos les gustaría comerme: D.",
    "7.13. Sí, el dentista me recuerda constantemente que use el cepillo adecuado y me cepille los dientes durante un mínimo de tres minutos. En cuanto al primero, aplico pero con el segundo es un poco peor;)",
    "7.14. Hay especialistas en este campo. Ciertamente, el aficionado no distinguirá entre el buen vino y la bebida habitual más barata. Para distinguir cuál es el que necesita para ser un especialista.",
    "7.15Si viviera en un árbol, ciertamente no podría soportar el fuerte canto de los pájaros en la mañana. Después de eso, tendría miedo a las alturas o podría caer de las alturas.",
    "7.16. Si tuvieras tal poder, aumentaría la temperatura promedio en el hemisferio norte para que fuera más cálido y disminuiría la temperatura en los desiertos y traería lluvias allí.",
    "7.17. Si fuera un día, estaría familiarizado con los detalles de su trabajo y tal vez resolvería un caso. pero no me interesa demasiado ese trabajo.",
    "7.18. Para ser sincero, no conozco a esta persona. Creo que este es un personaje de la película, pero como no veo televisión, no responderé esas preguntas;)",
    "7.19.Con superpoderes podría ser un héroe a escala nacional. Salvaría a las personas y sus pertenencias de inundaciones, tormentas y accidentes de tráfico. Sería una celebridad;)",
    "7.20. Si no tuviera que estudiar, tendría mucho tiempo libre e iría a donde quisiera. Haría lo que tengo ganas de hacer.",
    "7.21.Creo que me sentaría y escucharía con interés sus hipótesis y análisis. Preguntaría sobre cosas que no entiendo. Iría a tomar una cerveza con él.",
    "7.22. Creo que una persona que se burla de otra persona y lo hace con palabras ciertamente tiene un espíritu pobre y tiene un problema consigo mismo. Estoy de acuerdo con el autor de estas palabras.",
    "8.1. Creo que necesitaría un millón de dólares. Por otro lado, el hombre carece de felicidad. Uno podría vivir sin mayores comodidades pero entre personas que son amadas",
    "8.2. En mi opinión, todos deberían visitar su país y conocerlo a fondo. Luego, deberían visitar los lugares donde en la antigüedad había siete maravillas del mundo",
    "8.3. Cuando encuentro algo que no es mío y que es de gran valor al principio, siento la tentación de tomarlo. Después de lo cual creo que busco si hay alguien cerca que pueda perder esto. Finalmente, se lo doy a la oficina de propiedad perdida",
    "8.4. Cuando no entiendo al maestro, solo pregunto qué quiere decir y trato de llegar a un acuerdo",
    "8.5. Sí, fue en el verano después de reenquentro con mis amigos en la parrilla. Ya eran las 3 de la madrugada y se rompió. Decidí dormir en el sofá, pero rápidamente lamenté esta decisión porque los pájaros comenzaron a cantar sin piedad y además un helicóptero voló muy alto en el cielo No dormí ni un cuarto de hora esa noche ",
    "8.6. Simplemente no hice nada loco y tengo que cambiarlo. Aunque recuerdo que invité a una chica a tomar un café que no conocía en absoluto. Adrenalina antes de que la pregunta principal llego al máximo",
    "8.7. De alguna manera no me puedo imaginar viviendo bajo la superficie del océano. No sé cómo sería. Sería un pez y respiraría oxígeno disuelto en agua. No puedo responder a esta pregunta",
    "8.8. ¡Guau! ¡Vivir un año entero en un día sería una locura! Es un año lo suficientemente rápido para mí. No quiero escuchar sobre esa idea, sería horrible para mí",
    "8.9. Sin duda llegaría a mis lugares favoritos cinco veces más rápido. Cada giro y arco della calle utilizaria al máximo. Y probablemente estaría en el trabajo en diez minutos en lugar de veinticinco.",
    "8.10. Si encontrara un huevo de dragón, Yo le planteo en la clandestinidad, lo alimentaría todo el tiempo y le enseñaría a volar. Eventualmente, lo revelaría al mundo",
    "8.11. Creo que lo que experimentamos y degradamos tiene un gran impacto en nuestro comportamiento y carácter en la edad adulta. Por supuesto, los genes definen el carácter pero solo su base",
    "8.12. Tener solo una cosa para comer por el resto de mi vida sería ensalada de pepino. Es un plato que consiste en pepino en rodajas, cubierto de crema. Este plato es delicioso. Puedes comerlo y beberlo. No morirás de hambre. ",
    "8.13. Si fuera invisible, iría a la bóveda del banco, tomaría todo el dinero que pudiera cargar y luego viviría como un rey. También usaría esta oportunidad para evitar a las personas que, sin verme, me dejarían en paz",
    "8.14. Con la lámpara de Aladdin cumpliría todos mis antojos de la infancia. Me gustaría una alfombra voladora, mi propio helicóptero y una piscina en casa. Me gustaría poder volar y hablar con fluidez en todos los idiomas del mundo",
    "8.15. Tres meses de vacaciones, ¿quién no los querría?",
    "8.16. Definitivamente preferiría perder la capacidad de leer que de hablar. A través del habla puedes comunicarte con otras personas. Ciertamente, esta forma expresa tus pensamientos mejor que la palabra escrita.",
    "8.17. Hmm, es difícil para mí responder esta pregunta. Por un lado, perder las llaves significa costos para conseguir nuevas y problemas para entrar. Perder un teléfono es un desperdicio de información valiosa y la posibilidad de contactar amigos, pero prefiero perder mi teléfono que las llaves. Les puede encontrar un ladrón y robar nuestra casa o piso ",
    "8.18. Preferiría no tener dedos que codos porque si no tuviera codos no tendría dedos también. Es lógico, así que elijo el mal menor",
    "8.19. Preferiría no tener internet. Descansaría de la abrumadora cantidad de información y la usaría para cambiar el ambiente, cambiar mi estado de ánimo. Creo que después de una semana sin bañarme me rascaría y sería muy incómodo para mí",
    "8.20. Hay un dicho polaco: Dime con quien andas y te diré quien eres. Estoy completamente de acuerdo con eso. Deberías salir con personas de tu nivel o superior, eso es cierto ",
    "8.21. El conocimiento trae muchos beneficios, pero debes usarlo en la práctica. No debes tener una actitud negativa. Creo que esta actitud negativa ya surge en un niño cuando va a la escuela y en lugar de aprender en forma de diversión, siente que aprender es una tarea rutinaria",
    "8.22. Sí, si alguien no está celoso de la otra persona, probablemente no los ama. Los celos son un sentimiento natural y no debería avergonzarse de ello. Estoy de acuerdo con el autor de estas palabras",
    "9.1 Creo que los gemelos peden sentir lo mismo al mismo tiempo. Mucho lo eschuche en la tele, entonces puede ser cierto. Mejor preguntar en la fuente. Eso significa que si uno de ellas siente alegria, ele otro entonces que antes sintio tristeza ya no lo siente?",
    "9.2. Si gemelos pueden sentri al mismo tiempo las mismas sensationes pueden ser que tambien comunican telepaticamente, pero yo no lo creo. Deberia primero leer estudios de investigation sobre este tema para decir algo.",
    "9.3. Me gustaria saber mas sobre programacion y usar este conocimiento en la practica, programar en la computadora tan rapido como lo hago ahora escribiendo letras en la teclado.",
    "9.4. Considerando que todos los conflictos surgen de malentendidos uno podia ariesgarse a decir que si todos hablarian el mismo idioma todos viviriamos en paz, sin conflictos, desacuerdos y guerras.",
    "9.5. Preferiria perder mi brazo izquierdo que mi pierna derecha. Sin mi pierna derecha no podia caminar y ademas no podia correr y sin mi brazo izqueirdo lo haria.",
    "9.6. Preferia cantar cada vez que escucho una cancion que bailar  quando eschucho una melodia porque porque cada cancion tiene melodia y luego tambien bailaria cada vez y no me gustaria  hacer el riduculo.",
    "9.7. Prefiero tener un burro como medio de transporte que un girafas porque las girafas son muy altas y ciertamente no cabrian debajo de viaductos y puentes",
    "9.8. Dejame ponerlo de esta manera: podria quedarme en el habitation en la oscuridad durante una semana si tubiera al menos una vela que pasara de contrabando en los bolsillos conmigo de mis pantalones",
    "9.9. Si encontrara 500euros por la calle, definitivamente lo pondra en mi bolsillo y le estaria guardando en mi monton de dinero que quardo en mi casa. Por supesto que estoy bromedando. Definitivamente  iria a la primera tienda y perderia la mitad de esa cantidad.",
    "9.10. Si nacieria una flor floreceria solo una vez cada diez anos pero mi nectar seria la mas dulce de todas las flores y no tendria cempetencia",
    "9.11. Si por supesto, como todos los ninos. Probablemente estaba corriendo y cai en un ventisquero con la boca abierta. Me ha comido neve como nunca en mi vida! :)",
    "9.12. UnA vez perdi mi merecido calendario que puse en el techo de mi auto. Al Subir al coche, me olvide de el y quanto volvi despues de unos kilometros de conducion, no lo encontre, ido para siempre.",
    "9.13. Reaccionaba con inredulidad. Sospecharia una mentira o una juego. Tendria que escucharlo con mi proprios oidos para creerlo",
    "9.14. Una verdadera obra maestra es aquella que evoca emociones que podemos definir y al mismo tiempo tiene algo misterioso que no podemos comprender por completo. Esto es algo que nos anima a volver a admirar esta obra.",
    "9.15. Mi palbra favorita es 'vacaciones' Lo asocio con calidez, viajes y paseos. Cuando escucho esta palabra mi boca sube.",
    "9.16.Convertiria qualquier objeto en lo que quisiera. Una vez me gustaria convertir una botella un hellado frio una vez en harramienta y otra vez en monton de dinero",
    "9.17. Lo atraparia, lo esposaria y lo probaria biologicamente. A continuacion, crearia un gran programa en Internet y se lo mostraria al mundo",
    "9.18. Si ganaria 1.000 000 Euros construiria una casa pequena y haria lo que mas me gusta, es decir, viajar a lugares con mucho encanto. No desprecaria una velada tranquila en casa con una copa de vino y una buena pelicula.",
    "9.19. Si pudiera viajar atras en el tiempo, me movieria 200 anons hacia el futuro y luego retrocederia tanto. Usaria los conocimientos adquiridos para difundir la paz en el mundo, es desir para un buen proposito.",
    "9.20. https://navalmoral.hoy.es/conocimiento-habla-sabiduria-20200411220113-nt.html",
    "9.21. https://www.lanacion.com.ar/cultura/uno-llega-a-ser-grande-por-lo-que-lee-y-no-por-lo-que-escribe-nid1400306",
    "9.22. Si perderia mi maleta la buscaria por mi cuenta poerque primero debes confiar ne ti mismo. Luego llamaria al oficina de objectos perdidos. Si esto no ayudaba, de alguna manera me tragaria la perdida",
    "10.1.  Me convertiría en un ave de presa, preferiblemente un águila que no tiene enemigos naturales.Volaría a donde quisiera, tan alto como quisiera. Observaría paisajes, grandes aglomeraciones urbanas. Simplemente disfrutaría de la oportunidad de volar a cualquier parte del Tierra.",

    "10.2. Si retrocediera en el tiempo para cambiar la historia del mundo, advertiría  la ciudad de Troya que hay soldados dentro del caballo de madera y que no deberían caer en este truco. ",

    "10.3. Preferiría que mi piel cambiara de color en relación con los cambios en mi estado de ánimo. Si tuviera tatuajes que mostraran todo lo que había hecho el día anterior, probablemente me avergonzaría en algunas situaciones.",

    "10.4. Creo que ambos me darían dolor de estómago pero preferiría comerme una taza de arroz crudo porque, por una sencilla razón, hay menos de una caja de fideos crudos, este último también me daría indigestión.",

    "10.5. Definitivamente elegiría la última película que vi. El personaje secundario vivía una vida tranquila en el campo sin preocuparse por el futuro. La desventaja de esta solución es que ya era bastante mayor.",

    "10.6. ¿Iría a la cárcel por unos pocos millones? Por supuesto, no tienes que preguntar dos veces, he oído que los presos en las cárceles no se quejan de las condiciones sociales.",
    "10.7. Borraría la historia de los senadores que traman un complot contra el emperador de Roma. El tipo habría vivido hasta la vejez si no fuera por ellos.",

    "10.8. Con memoria como elefante, podría aprender prácticamente cualquier cosa sin limitaciones. No tendría igual en programas de juegos, en investigación científica. Sería un Internet ambulante.",
    "10.9. Sí, especialmente a los jóvenes les importa su apariencia. En el mundo de las redes sociales, somos atacados por la belleza y la desnudez. La gente empieza a pensar que su apariencia es lo más importante en la vida.",

    "10.10. Si hubiera visto que me iba a morir en una semana, habría tenido asuntos urgentes, me gustaría volverme loco en el concierto, he oído que las drogas son una idea brillante.",

    "10.11. Si hubiera estado vivo en la década de 1940, probablemente me hubiera sentido feliz con el aire fresco, aunque probablemente estaría inhalando los gases de escape de los tanques porque este período era la época de la guerra y la mayoría de los hombres luchaban en el frente con los enemigo.",

    "10.12. El encuentro con el Elvis vivo terminaría en el club por la mañana, sería una fiesta tan buena como no lo ha sido en décadas, la gente se divertiría como nunca.",

    "10.13. Nunca he tenido un don para la poesía y por eso puedo admitir que no tenía ganas de escribir un poema corto.",

    "10.14. Creo que simplemente les gustó el nombre, no hay una historia complicada detrás de la elección de mi nombre. Si lo fuera, sabría sobre ella.",

    "10.15. Si fuera invisible, ¿no hemos pasado por esta pregunta antes?",
    "10.16. Esta es una pregunta extrana. Me pregunto de donde habrian crecido estas piernas? No me gustaria estar frente tal desicion.",

    "10.17. Esa es una pregunta bastante interesante. Ver en la oscuridad es una habilidad muy útil. Podría correr de noche sin preocuparme por tropezar. Conocería la vida de los animales que llevan una vida nocturna por naturaleza.",

    "10.18. Creo que no hay nada misterioso detrás de las decisiones del presidente, por lo que no prestaría tanta atención a sus acciones, a menos que firme decisiones secretas que no permitan la divulgación de información sobre extraterrestres.",

    "10.19. Tal habilidad sería invaluable. Ahorraría dinero y tiempo viajando. Finalmente, pude ver el mundo entero.",
    "10.20. Quizás le preguntaría por qué estos personajes tienen tales caracteres. Le preguntaría qué lo inspiró a escribir este libro.",
    "10.21. Creo que hay mucha verdad en eso, es difícil superar los prejuicios adquiridos en la juventud, especialmente cuando estamos en contacto con amigos o familiares sin educación.",
    "10.22. La naturaleza humana es lo que es y no cambiará. Las guerras siempre han sido y siempre serán. Solo cambiará su forma. Espero que en un futuro cercano la gente sea lo suficientemente madura como sociedad para que haya paz en todos los rincones del mundo. ",



    " 51 Eficiente - La eficiencia se refiere al uso racional de los medios para alcanzar algo. La verdad es que la gente suele equivocar “eficiencia” con “eficacia” que sería hacer un trabajo de manera satisfactoria. Por ejemplo: Si quieres copiar un libro de 300 páginas puedes ser eficaz copiándolo a mano – probablemente tardarás 1 mes, pero finalmente lo copiarás. Por tanto, serás eficaz. Pero, además, puedes ser eficiente, o sea obtener el mismo resultado de copiar un libro con menos esfuerzo y mucho menos tiempo, simplemente usando unafotocopiadora ",

    "52. Un sinfín de informes - Un “sinfín” es una cantidad muygrande, imposible de calcular.Por ejemplo:Me gusta sentarme a menudo en una cafetería en las Ramblas viendo pasar un sinfín de turistas. ",

    "53 Mermar su salud - “Mermar” es reducir el volumen ocantidad de una cosa, por ejemplo: La población medievalde Europa se fue mermando por el hambre y las epidemias. ",

    "54. Con paso firme - seguro, estable, fuerte, inmutable (lo contrario sería un paso vacilante, inseguro).Por ejemplo: una “voz firme”, es decir una voz fuerte, que no titubea, una voz que emite seguridad.",

    "55 Arqueando las cejas - movimiento de las cejas hacia arriba.De hecho, “arquear” viene de la palabra “arco” que es una línea curva.Levantar las cejas es un gesto que puede expresar varias cosas. 1. Levantar las cejas - expresar sorpresa: cuando algo nossorprende y lo desconocemos. 2.También levantamos las cejas para expresar una exclamación: se usa para dar fuerza a una afirmació. 3. También se puedenlevantar las cejas en un gesto decrítica. ",

    "56. Muy cansado, débil y sin fuerzas ",
    "57. - un interrogatorio es cuando alguien hacemuchas preguntas a una persona con el propósito deaclarar algo.Por ejemplo, los interrogatorios se los hacen los policías a los sospechosos; o el fiscal puede interrogar al testigo durante un juicio.",

    "58. Un informe es un documento que describe el estado de una cosa, en nuestro caso podría ser de una investigación que está abierta.Pero los informes también son muy frecuentes en el mundo de la empresa, donde un jefe puede pedir que se le informe de cómo ha ido un viaje de negocios o una reunión, por ejemplo.",

    "59. “Me paso la noche en vela”significa pasarla sin dormir.Pues eso, significa no pegar ojo.Es normal que las personas tengan problemas para dormir de vez en cuando.El estrés, los problemas, las preocupaciones, las prisas, los miedos… dificultan a las personas conciliar un sueño profundo y reparador.",
    "510. “Me va a dar algo” significa que me voy a poner enfermo.Puede ser porque te ponen nervioso o te irritan, o porque hace calor, por exceso de trabajo, por vergüenza… Se puede usar de todas estas maneras porque te pueden dar muchas cosas: un ataque de nervios, un ataque al corazón, un mareo… “Me va a dar un patatús”- coloquial: mareo por una impresión muy fuerte o por un estado de nervios anormal.Por ejemplo: “Si mi hijo no vuelve pronto a casa me va a dar un patatús”. ",
    "511 ayuda, respaldo, colaboración. En nuestro caso es un conjunto de personas que acuden para ayudara otras personas.Porque en la comisaría de Pepe, hay tanto trabajo que se necesita más personal.Porque los policías no dan abasto con el trabajo que tienen.",
    "512 los casos que tengo apilados en mi mesa”. Apilar significa poner unas cosas sobre otras de manera que formen una pila.Por ejemplo: En la bodega de la tienda se apilaban cajas de vino.",
    "513  prestar atención a algo; es, por ejemplo,concentrarse para oír el mensaje de otra persona.“Hace caso” es, entonces, prestar atención y tomar en cuenta.Porejemplo: “no me haces caso cuando te hablo” ",
    "514 Apilado",

    "514 - Estar en situación en la que se te debe algo, como recursos o atención.Por ejemplo: Me merezco un respeto por tu parte. Esa pregunta no merece otra respuesta.",

    "515 Quemarse - Cuando alguien está “quemado” significa que está molesto y disgustado por algo, que está fastidiado.Porejemplo, se habla del síndrome de estar quemado(o eninglés “burnout”), es decir, un síndrome provocado por un estrés prolongado en el trabajo.",

    "516 Ponerse las pilas - Es una expresión de uso coloquial y significa aplicarse, esmerarse; es hacer algo con dedicación, diligencia y cuidado.",

    "517 ¡Hala! (“¡Hala!, vete a casa”) - Se utiliza para instar a alguien a hacer algo, especialmente a hacerlo deprisa.Por ejemplo: Hala, cierra la puerta, que hace frío”. Pero también para animar a alguien.Por ejemplo, cuando alguien no se encuentra bien: “¡Hala, que se mejore!”. También expresa sorpresa.Por ejemplo: ¡Hala, qué torta se ha dado! ",

    "518 “No dar un palo al agua” - La expresión “no dar un palo alagua” es una de las más recurrentes para cuando queremos referirnos a alguien que no se esfuerza o que nohace su trabajo como es debido.En definitiva, es una expresión para referirnos a un vago, es decir, una persona perezosa. El origen de esta expresión proviene del lenguaje marinerode siglos atrás, y de ahí se ha difundido hasta colarse en nuestro vocabulario del día a día. no dé un palo al agua, es aquel que no reme junto a sus compañeros para que el barco avance y, por tanto, es un vago que no colabora con el resto decompañeros de tripulación.",
    "519 Pasar por la Biblioteca” - pasar por es ir a un lugar sin detenerse mucho tiempo en él.Por ejemplo: Me pasaré por tu casa al salir de la oficina. Dicen que después de clase se pasarán por la biblioteca.",

    "520 Mimarse - malcriar, consentir o malacostumbrar. Cuando una persona se mima o mima a otro, es que consiente ciertos caprichos como comer algo de chocolate o cosas así…",
    "521  Pillar algo de paso - coger una cosa con la mano. Es una expresión de uso coloquial que se usa muchísimo en España.Por ejemplo, alguien puede preguntar: “Oye, ya que vas a la tienda a por el pan, ¿puedes pillar también un poco de queso y leche ?”",
    "522  Una manzana - Es una fruta comestible del manzano. Peroen este caso, una manzana se refiere a un espacio urbano edificado generalmente cuadrangular, y que está delimitado por calles.Por ejemplo: Mi escuela primaria ocupaba toda una manzana y estaba situada en el barrio más antiguo de Madrid.",
    "523 Le cae bien Nadal” - Alguien te cae bien cuando loencuentras simpático, cuando te gusta su manera de ser.",


    "524 No dar abasto - - Estar desbordado. Por ejemplo:“No doy abasto para limpiar toda la casa. “No doy abasto para corregir tantos exámenes”",

    "525 Estar agotado/a - Estar muy cansado de forma extrema,exhausto, fatigado, reventado.Por ejemplo: “Estoy agotada con tanto calor en el verano”.",
    "526 Tomárselo con calma - Puede significar: 1) de forma serena, serenamente.Por ejemplo: “Nadal se toma con calma su regreso”. “No es necesario que Juan se pase todo el día en la cama,= pero está enfermo, así que debería tomarse las cosas con calma”. 2) “Tomárselo con calma” puede tener también un matiz negativo indicando que alguien es perezoso o indiferente. Por ejemplo: “Juan que es un vago y se toma las cosas con calma”.",
    "527 Pasarlo bien - Esta expresión significa “divertirse, pasárselo bomba”.Por ejemplo: “Español Automático es  excelente  para aquellos estudiantes que deseen aprender español ypasarlo bien al mismo tiempo”. ",
    "528 Soler (hacer algo) - Significa “tener como costumbre haceruna cosa”.Por ejemplo: “Tu padre suele venir los sábados”.“Suelo desayunar pronto”.“El niño suele dormir la siesta”.“Solemos ir a la playa los domingos”",
    "529Recién (hecho /escrito / nacido…) - Significa que algo seha hecho hace poco tiempo.Por ejemplo: “Recién casados” “Con el pelo recién cortado” “El pan recién salido del horno” “Recién salido de la ducha”",



    "530 Una afición – 1) Interés por una cosa.Por ejemplo: “Afición a la música” “Afición al fútbol” 2 Una afición es una actividad que se realiza por placer durante el tiempo libre, un hobby, un pasatiempo.Porejemplo:“La gran afición del emperador era leer libros de biología marina”.",
    "531 Acompañar (el tiempo acompaña) - Indica que dos cosas van juntas.Por ejemplo: “Una tarjeta acompaña al ramo de flores”. “Si el tiempo acompaña puedes comer en la terraza”. “Voy a la tienda, ¿me acompañas ?",
    "532 Una pasión - Un sentimiento muy intenso por una cosa upersona.En nuestro caso hablamos de que hay muchas personas en Barcelona que comparten la misma pasión por patinar. Un sinónimo aquí podría ser hobby, afición, hacer algo que nos encanta, algo que nos gusta mucho… Cuando una persona siente pasión por algo, en nuestro caso por patinar, normalmente intenta emplear cada rato libre que tiene para hacerlo. Porque le encanta, porque le gusta mucho",

    "533 “Me paso patinando toda la tarde” - Pasarse - ocupar un tiempo en una actividad o estar en un lugar durante un tiempo haciendo algo. Por ejemplo:“Suelo pasar el verano en la playa”. “Juan pasó un rato en el parque”.“Pasé la noche leyendo una novela”. “¿Dónde has pasado el fin de semana ? ",

    "534 Es hora de (comer) - Es una expresión muy usada en España.Creo que el significado está bastante claro: indicaque ya ha llegado el momento de algo.Por ejemplo:  “Cuando es hora de comer, los empleados se van a la cafetería”. “¡Niños, es hora de irse a dormir!",

    "535 Hoy toca paella – Tocar indica que ha llegado el momento de una cosa. Por ejemplo: Hoy me toca lavar la ropa. Ahora toca estudiar. Tocar puede tener un matiz de obligación o responsabilidad. Por ejemplo: Te toca pagar la comida. Te toca limpiar el coche que ya está muy sucio. Esta semana me toca turno de noche en el hospital",


    "536 “Un nosequé; un nosecuantos; un nosequién…” - Son expresiones españolas que se usan cuando desconocemos un dato concreto. Suelen sustituir un nombre que no conocemos, no nos acordamos o que no nos importa nada. Por ejemplo: “El artista de no sé qué acaba de aterrizar en Madrid”. “Esta niña tiene un no sé qué que consigue cautivar a todos”. “El queso francés con no sé qué especias era riquísimo",


    "538 El agobio - Una sensación de ansiedad o inquietud intensa provocada por una situación difícil y que cuesta mucho de superar.Normalmente viene acompañada por estado de molestia y cansancio.Por ejemplo: “El periodo de cierre de año, siempre es una temporada de mucho agobio en el trabajo”.El verbo es “agobiar”.Por ejemplo: “No me agobies con tus preguntas”. “Carmen se agobia por todo”.",

    "539 El refrán - Frase de origen popular transmitida tradicionalmente, y normalmente expresa un pensamiento moral, un consejo o una enseñanza.Suele ser corto y suele tener verso y rima. Algunos ejemplos de refranes: - “Desayunar como un rey, comer como un príncipe y cenar como un pobre” - indica que hay que comer más por la mañana y por la noche solo un poco.- “Nunca te acostarás sin saber una cosa más”. - este refrán se suele decir en España cuando uno se entera de alguna cosa nueva; cuando aprende una cosa que antes desconocía. - “En abril, aguas mil” - quiere decir que en abril suele llover muchísimo.",


    "540 “Cantidad” - está usado aquí de forma coloquial, y significa “mucho”.Por ejemplo: “Me gusta cantidad”. “Ha nevado cantidad”. “Veo cantidad de películas”.",

    "541 Ir a dormir a las tantas - es la forma coloquial o abreviada de a las tantas de la mañana o de la madrugada .Por tanto, “Ir a dormir a las tantas” significa “ir a dormir muy tarde”.Por ejemplo: “El año pasado tuve una conversación con Ana hasta las tantas de la noche",

    "542 Aprovechar - emplear una cosa sacándole el máximo provecho posible.Es sacar utilidad de algo.Por ejemplo:aprovechar el momento / aprovechar el tiempo.",

    "543 Divertirse, generalmente de noche, salir a tomar copas y quizá también bailar.La expresión se empezó a usar en los años 80 y se sigue usando en la actualidad. Pero, ir al cine o a un concierto no es salir de marcha.Ir sólo a cenar y volverte a casa tras el postre, tampoco. Salir de marcha implica ir a bares o discotecas, es decir, sitios donde consume alcohol y donde suena música a todo volumen.",

    "544 Cambiar de aires = cambiar de situación, de trabajo, de lugar de residencia o, en general, de ambiente. Por ejemplo: “Necesito cambiar de aires, así que me iré por un tiempo al campo.",

 

    "545 La calma - tranquilidad, paz, quietud ",
    "546 Un ruido familiar - un sonido conocido, habitual, usual",
    "547 Reconocer –identificar a una persona o una cosa por una serie de características.Por ejemplo: A pesar del disfraz, le reconoció por la voz. Examinar con cuidado y atención una cosa.Por ejemplo: El detective reconoció el lugar del crimen.",
    "548 Una ciudad cosmopolita - internacional, mundial, de diferentes culturas.",

    
    "549 Un sonido agudo - intenso, fuerte, penetrante.",
    "550 Un calor horroroso - horrible, que hace mucho calor ",
    "551 Una cafetera - Un aparato que sirve para preparar café. En España se usan las cafeteras que tienen 3 compartimentos, 3 partes: la parte baja con agua, la parte media con el café seco, y la parte de arriba donde sale el café hecho a presión.",
    "552 Echar una mano - Ayudar ",
    "553 Sonríe aliviada - “alivio” es desahogo. Es cuando teníamos una tensión o una carga pero disminuyó y ya se fue.",
    "554 “¡Qué majo!” - “majo” es una persona muy simpática y agradable.",
    "555 El foco de luz - El foco es una lámpara que emite una luz muy intensa y que, generalmente, es dirigible. Por ejemplo: los focos del estadio, los focos en un teatro",
    "556 La extensión - es un espacio, la superficie de algo. Por ejemplo:Juan tiene un jardín de escasa extensión.Extensión del desierto",
    "557 La competencia - Aquí competencia es la misión u obligación de una persona o de una entidad. La competencia es una responsabilidad. Por ejemplo: La limpieza de la ciudad es competencia del Ayuntamiento.",
    "558 Una cuestión - es un asunto o un tema. Por ejemplo:En muchos lugares del mundo, la disponibilidad de agua limpia es cuestión de vida o muerte. La cuestión de las vacaciones se discutirá en la reunión esta tarde.",
    "559 Un privilegio –es una ventaja o un beneficio especial.Por ejemplo: El embajador goza de diversos privilegios diplomáticos. En la Edad Media, la educación era vista como un privilegio especial. También puede referirse a una situación o un hecho significativo.Por ejemplo: El deportista dijo a la prensa que era un privilegio representar a España en las Olimpiadas.",
    "560 “Tengo un hambre que me muero” - Es una expresión que se usa para decir que se tiene muchísima hambre, que se tiene tanta hambre que es difícil de soportarla. Aunque, claro, normalmente esta frase es una exageración. “Tengo un hambre que me muero”.También puedes decir: “Me muero de hambre",
    "561 “La comida casera” - casero es algo que se hace en casa o que tiene las características de las cosas que se hacen en casa y elaboradas según técnicas tradicionales. Por ejemplo: un flan casero, la repostería casera, la mermelada casera, un remedio muy eficaz y casero.",
    "562 Una napolitana - La napolitana es un famoso producto de pastelería. Es un tipo de dulce de hojaldre con crema pastelera o con chocolate.",
    "563 “Poner la tele más alto” = subir el volumen.",
    "564 Revelar - descubrir lo secreto. Por ejemplo:No reveles a nadie lo que te he contado.Sabemos el secreto, pero no lo revelaremos.Revelar información sensible.",
    "565 Una tendencia natural hacia… - una tendencia es una propensión, una inclinación o una predisposición. Por ejemplo: Juan tiene tendencia a la melancolía.Pepe tiene tendencia a engordar. Miguel tiene tendencia a querer controlar cada evento en su vida.",

    "566 Analizar, un análisis - Analizar es examinar, estudiar y observar con atención. Por ejemplo: Deberías analizar bien la situación antes de actuar.",
    "568 Un corpus - un conjunto de datos, textos u otros materiales sobre un tema. Un corpus es un conjunto de materiales que se usa en un trabajo o en una investigación. Por ejemplo:En la oficina contamos con un corpus de ejemplos extraídos de la prensa internacional.",
    
    "570 Encabezado por - encabezar es liderar, es estar al comienzo de algo. Por ejemplo, encabezar una manifestación.",
    "571 Procedente de, proceder - de origen. Por ejemplo: El avión procede de París. El Rioja es un vino procedente de España.",
    "572 Una balanza. - Un instrumento que sirve para pesar cosas, como las balanzas de cocina o del baño para controlar nuestro peso.Hoy hay balanzas electrónicas, pero, antiguamente, la balanza era un instrumento que tenía una especie de palo y de cada extremo de este palo colgaba un platito.En un plato se ponía lo que queríamos pesar, por ejemplo, manzanas, y en otro plato se iba poniendo los pesos hasta que la balanza estuviera en equilibrio.De esta manera se determinaba cuánto pesaba la cosa que quisiéramos pesar. Aquí en el texto medimos la “felicidad” de idiomas; y así en un lado de la balanza están los idiomas más felices, como el español, y del otro lado de la balanza están los idiomas menos felices.",

    "573 Posicionarse = colocar algo en una posición. Posicionar es situar, ubicar o localizar.",
    "574 Entreabrir un ojo - Abrir un poco o a medias. Por ejemplo: Ana entreabrió la boca como para decir algo, pero no dijo nada. Juan entreabrió la puerta y asomó la cabeza",






    `
    https://devszczepaniak.pl/web-developer-pytania-rekrutacyjne-cz-1/
    "http://net-informations.com/js/iq/unerror.htm
    https://www.toptal.com/javascript/interview-questions#form
    http://net-informations.com/js/default.htm
    https://www.guru99.com/javascript-interview-questions-answers.html",`

]
const generateQuestion = () => {
    const questionIndex = Math.floor(Math.random() * questions.length)
    divQuestion.textContent = questions[questionIndex]
    divAnswer.textContent = "";
    const question = questions[questionIndex]

    // const upperLetterPosition=question.indexOf(toUpperCase())

    // const questionL=question.length
    // console.log(questionL)

    // var i = 0;
    // for (; i < questionL; i++) {
    //     if (question.charAt(i) === question.charAt(i).toUpperCase()) {
    //         console.log(question.charAt(i))
    //     }
    // }

    // console.log(upperLetterPosition)
    // const questionWithoutNumbers=question.substring(start,end)
    const match = question.substr(0, 4)
    const match2 = question.substr(0, 4)
    const answer = answers.filter(ans => ans.substr(0, 4) === match)
    divQuestion.textContent = question
    const realAnswer = answer[0]


    btnRespuesta.classList.remove('addOpacity')
    divQuestion.classList.remove('addOpacity')

    const showAnswer = () => {
        // let questionIndex =Math.floor(Math.random()*questions.length)
        divAnswer.textContent = realAnswer;
        btnRespuesta.classList.add('addOpacity')
        divQuestion.classList.add('addOpacity')
        // var word = "Someword";
        // console.log(word[0] === word[0].toUpperCase());
        console.log("ihihi");

    }
    if (btnRespuesta.addEventListener('click', showAnswer));




    const index = Math.random()
    sessionStorage.setItem(index, JSON.stringify(question))
    const tablicaPytan = JSON.parse(sessionStorage.getItem(index))
    console.log([tablicaPytan])

    // const getUnique = (items, value) => {
    //     return [...new Set(items.map(item => item[value]))]
    // }

    showAllAnswers.addEventListener('click', () => {
        const pageWithAnswers = document.createElement('div')
        // let pytankaaa = getUnique(tablicaPytan, tablicaPytan.substr(0,4));

        pageWithAnswers.innerHTML = tablicaPytan

        cover.appendChild(pageWithAnswers)
        cover.style.opacity = "1";
        cover.style.zIndex = "5";
        pageWithAnswers.classList.add('showAllAnswers')
        console.log('its working')
    })
    cover.addEventListener('click', () => {
        cover.style.opacity = "-1";
        cover.style.zIndex = "-5";
        sessionStorage.clear()
        window.location.reload()
    })
}




console.log("Test --------------------------")

// pointRed.addEventListener('click', () => {
//     const point = document.createElement('div')
//     point.classList.add("point")
//     point.classList.add('red')
//     points.appendChild(point)
// })
// pointGreen.addEventListener('click', () => {
//     const point = document.createElement('div')
//     point.classList.add("point")
//     point.classList.add('green')
//     points.appendChild(point)
// })
btnPregunta.addEventListener("click", generateQuestion);
// -----------------generator kodów
// const btn2 = document.querySelector(".generator");
// const section = document.querySelector(".codes")
// btn2.addEventListener("click", ()=>{
//     console.log("dfdf");
//     const divCode = document.createElement('div');
//     section.appendChild(divCode);
//     const text ="dfdfdfsdfs";
//     console.log(text);
// })



// -----------------------------------
function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true


}


// _______________________________
function arraySum(array) {
    let tempArr = array.sort((a, b) => {
        return a - b;
    })
    let largest = tempArr.pop();
    let number = 0
    tempArr.forEach(item => (number += item))
    return number === largest
    // nie mam odpowiedzi w konsoli czy jest to true czy false



}

array1 = [2, 4, 5, 1, 3, 9, 6, 7]
arraySum(array1)

// ________________
document.addEventListener('auxclick', function () {
    console.log('Hello!');
});

var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}




console.log(largest);


function LargestFour() {
    const arr = [1, 2, 3, 4, -5]


    const newArr = arr.sort()
    console.log(newArr)



    const newArrayLength = newArr.length
    console.log("długość tablicy", newArrayLength)

    const last4numbers = arr.splice(newArrayLength - 4)
    console.log("talibca ostatnie 4", last4numbers.length)

    // code goes here  
    var sum = 0;
    for (let i = 0; i < last4numbers.length; i++) {
        sum += last4numbers[i]
    }
    console.log("to jest suma", sum)
    return sum

}
LargestFour()
