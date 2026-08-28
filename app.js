const STORAGE_KEY='musea_uploaded_v4_slots';

/* ===== CONFIGURACIÓN DE IMÁGENES ===== */
const carpetaImagenes = 'imagenes/';
const extensionImagen = 'jpg';

function imagen(numero) {
  return `${carpetaImagenes}${numero}.${extensionImagen}`;
}

/* ===== TÍTULOS DE LAS OBRAS ===== */
const tituloImagen1='El Sueño Eterno';
const tituloImagen2='Horizonte de Cristal';
const tituloImagen3='Rapsodia en Azul';
const tituloImagen4='Jardín de Sombras';
const tituloImagen5='Pulso Carmesí';
const tituloImagen6='Luz Mineral';
const tituloImagen7='Trama Dorada';
const tituloImagen8='Niebla Rosa';
const tituloImagen9='Vector Índigo';
const tituloImagen10='Campo Solar';
const tituloImagen11='Bosque Esmeralda';
const tituloImagen12='Cobre y Ceniza';
const tituloImagen13='Marea Coral';
const tituloImagen14='Silencio Azul';
const tituloImagen15='Órbita';
const tituloImagen16='Tierra Clara';
const tituloImagen17='Umbral Verde';
const tituloImagen18='Contrapunto';
const tituloImagen19='Río Nocturno';
const tituloImagen20='Materia Viva';
const tituloImagen21='Muro Central I';
const tituloImagen22='Muro Central II';
const tituloImagen23='Muro Central III';
const tituloImagen24='Muro Central IV';
const tituloImagen25='Panel Interior I';
const tituloImagen26='Panel Interior II';
const tituloImagen27='Panel Derecho I';
const tituloImagen28='Panel Derecho II';

/* ===== ARTISTAS ===== */
const artistaImagen1='Clara Montes';
const artistaImagen2='Mateo Rivas';
const artistaImagen3='Sofía Herrero';
const artistaImagen4='Luis Carvajal';
const artistaImagen5='Demo Musea';
const artistaImagen6='Demo Musea';
const artistaImagen7='Demo Musea';
const artistaImagen8='Demo Musea';
const artistaImagen9='Demo Musea';
const artistaImagen10='Demo Musea';
const artistaImagen11='Demo Musea';
const artistaImagen12='Demo Musea';
const artistaImagen13='Demo Musea';
const artistaImagen14='Demo Musea';
const artistaImagen15='Demo Musea';
const artistaImagen16='Demo Musea';
const artistaImagen17='Demo Musea';
const artistaImagen18='Demo Musea';
const artistaImagen19='Demo Musea';
const artistaImagen20='Demo Musea';
const artistaImagen21='Demo Musea';
const artistaImagen22='Demo Musea';
const artistaImagen23='Demo Musea';
const artistaImagen24='Demo Musea';
const artistaImagen25='Demo Musea';
const artistaImagen26='Demo Musea';
const artistaImagen27='Demo Musea';
const artistaImagen28='Demo Musea';

/* ===== AÑOS ===== */
const anioImagen1='2024';
const anioImagen2='2023';
const anioImagen3='2022';
const anioImagen4='2024';
const anioImagen5='2026';
const anioImagen6='2026';
const anioImagen7='2026';
const anioImagen8='2026';
const anioImagen9='2026';
const anioImagen10='2026';
const anioImagen11='2026';
const anioImagen12='2026';
const anioImagen13='2026';
const anioImagen14='2026';
const anioImagen15='2026';
const anioImagen16='2026';
const anioImagen17='2026';
const anioImagen18='2026';
const anioImagen19='2026';
const anioImagen20='2026';
const anioImagen21='2026';
const anioImagen22='2026';
const anioImagen23='2026';
const anioImagen24='2026';
const anioImagen25='2026';
const anioImagen26='2026';
const anioImagen27='2026';
const anioImagen28='2026';

/* ===== DESCRIPCIONES DE LAS OBRAS ===== */
const descripcionImagen1='Una obra que captura la atemporalidad del instante.';
const descripcionImagen2='Geometrías y transparencias que dialogan con la luz.';
const descripcionImagen3='Homenaje al mar y sus infinitos matices.';
const descripcionImagen4='Naturaleza y misterio se entrelazan.';
const descripcionImagen5='Obra de demostración para probar el montaje completo.';
const descripcionImagen6='Obra de demostración para probar el montaje completo.';
const descripcionImagen7='Obra de demostración para probar el montaje completo.';
const descripcionImagen8='Obra de demostración para probar el montaje completo.';
const descripcionImagen9='Obra de demostración para probar el montaje completo.';
const descripcionImagen10='Obra de demostración para probar el montaje completo.';
const descripcionImagen11='Obra de demostración para probar el montaje completo.';
const descripcionImagen12='Obra de demostración para probar el montaje completo.';
const descripcionImagen13='Obra de demostración para probar el montaje completo.';
const descripcionImagen14='Obra de demostración para probar el montaje completo.';
const descripcionImagen15='Obra de demostración para probar el montaje completo.';
const descripcionImagen16='Obra de demostración para probar el montaje completo.';
const descripcionImagen17='Obra de demostración para probar el montaje completo.';
const descripcionImagen18='Obra de demostración para probar el montaje completo.';
const descripcionImagen19='Obra de demostración para probar el montaje completo.';
const descripcionImagen20='Obra de demostración para probar el montaje completo.';
const descripcionImagen21='Obra de demostración para probar el montaje completo.';
const descripcionImagen22='Obra de demostración para probar el montaje completo.';
const descripcionImagen23='Obra de demostración para probar el montaje completo.';
const descripcionImagen24='Obra de demostración para probar el montaje completo.';
const descripcionImagen25='Obra de demostración para probar el montaje completo.';
const descripcionImagen26='Obra de demostración para probar el montaje completo.';
const descripcionImagen27='Obra de demostración para probar el montaje completo.';
const descripcionImagen28='Obra de demostración para probar el montaje completo.';

// Catálogo único de lugares reales de montaje. x/z/ry se usan en 3D; mx/my se usan en el plano 2D.
const MOUNT_SLOTS=[
{id:'N1',n:1,room:'Sala Norte',label:'Pared norte · izquierda',x:-13.4,y:2.18,z:-10.78,ry:0,mx:12,my:5},
{id:'N2',n:2,room:'Sala Norte',label:'Pared norte · centro',x:-9.4,y:2.18,z:-10.78,ry:0,mx:23,my:5},
{id:'N3',n:3,room:'Sala Norte',label:'Pared oeste · norte',x:-16.28,y:2.18,z:-7.0,ry:Math.PI/2,mx:4,my:21},
{id:'N4',n:4,room:'Sala Norte',label:'Pared oeste · media',x:-16.28,y:2.18,z:-3.8,ry:Math.PI/2,mx:4,my:34},
{id:'N5',n:5,room:'Sala Norte',label:'Tabique superior izquierdo',x:-11.5,y:2.18,z:-6.74,ry:Math.PI,mx:17,my:22},
{id:'E1',n:6,room:'Sala Este',label:'Pared central derecha · izquierda',x:5.9,y:2.18,z:-2.42,ry:0,mx:67,my:40},
{id:'E2',n:7,room:'Sala Este',label:'Pared central derecha · derecha',x:9.4,y:2.18,z:-2.42,ry:0,mx:77,my:40},
{id:'E3',n:8,room:'Sala Este',label:'Pared este · norte',x:16.28,y:2.18,z:-6.6,ry:-Math.PI/2,mx:96,my:23},
{id:'E4',n:9,room:'Sala Este',label:'Pared este · media',x:16.28,y:2.18,z:-2.8,ry:-Math.PI/2,mx:96,my:38},
{id:'E5',n:10,room:'Sala Este',label:'Pared norte · derecha',x:11.9,y:2.18,z:-10.78,ry:0,mx:84,my:5},
{id:'S1',n:11,room:'Sala Sur',label:'Pared este · media sur',x:16.28,y:2.18,z:3.0,ry:-Math.PI/2,mx:96,my:62},
{id:'S2',n:12,room:'Sala Sur',label:'Pared este · sur',x:16.28,y:2.18,z:7.2,ry:-Math.PI/2,mx:96,my:80},
{id:'S3',n:13,room:'Sala Sur',label:'Pared sur · derecha',x:10.6,y:2.18,z:10.78,ry:Math.PI,mx:80,my:93},
{id:'S4',n:14,room:'Sala Sur',label:'Pared sur · centro derecha',x:6.3,y:2.18,z:10.78,ry:Math.PI,mx:68,my:93},
{id:'S5',n:15,room:'Sala Sur',label:'Panel vertical derecho',x:8.10,y:1.75,z:3.7,ry:Math.PI/2,mx:72,my:65},
{id:'O1',n:16,room:'Sala Oeste',label:'Pared oeste · media sur',x:-16.28,y:2.18,z:2.2,ry:Math.PI/2,mx:4,my:59},
{id:'O2',n:17,room:'Sala Oeste',label:'Pared oeste · sur',x:-16.28,y:2.18,z:6.4,ry:Math.PI/2,mx:4,my:77},
{id:'O3',n:18,room:'Sala Oeste',label:'Pared sur · izquierda',x:-11.8,y:2.18,z:10.78,ry:Math.PI,mx:16,my:93},
{id:'O4',n:19,room:'Sala Oeste',label:'Pared sur · centro izquierda',x:-7.5,y:2.18,z:10.78,ry:Math.PI,mx:29,my:93},
{id:'O5',n:20,room:'Sala Oeste',label:'Tabique en L · interior',x:-7.7,y:2.18,z:1.52,ry:Math.PI,mx:28,my:56},
{id:'C1',n:21,room:'Sala Norte',label:'Pared central · frente izquierdo',x:-5.8,y:1.78,z:-3.42,ry:0,mx:35,my:34},
{id:'C2',n:22,room:'Sala Norte',label:'Pared central · frente centro',x:-2.8,y:1.78,z:-3.42,ry:0,mx:43,my:34},
{id:'C3',n:23,room:'Sala Norte',label:'Pared central · frente derecho',x:0.2,y:1.78,z:-3.42,ry:0,mx:51,my:34},
{id:'C4',n:24,room:'Sala Oeste',label:'Pared central · reverso izquierdo',x:-5.6,y:1.78,z:-3.78,ry:Math.PI,mx:35,my:42},
{id:'C5',n:25,room:'Sala Oeste',label:'Pared central · reverso derecho',x:-2.2,y:1.78,z:-3.78,ry:Math.PI,mx:44,my:42},
{id:'C6',n:26,room:'Sala Sur',label:'Panel central · frente',x:0.0,y:1.75,z:3.60,ry:0,mx:50,my:60},
{id:'C7',n:27,room:'Sala Sur',label:'Panel central · reverso',x:0.0,y:1.75,z:3.20,ry:Math.PI,mx:50,my:70},
{id:'C8',n:28,room:'Sala Sur',label:'Panel derecho · reverso',x:8.55,y:1.75,z:3.7,ry:-Math.PI/2,mx:78,my:65}
];
// Museo ampliado: más espacio libre de circulación manteniendo la misma lógica de planta.
const SPACE_SCALE=1.45;
MOUNT_SLOTS.forEach(s=>{s.x*=SPACE_SCALE;s.z*=SPACE_SCALE});

const defaults=[
{id:1,title:tituloImagen1,artist:artistaImagen1,year:anioImagen1,category:'moderno',room:'Sala Norte',slotId:'N1',description:descripcionImagen1,image:imagen(1)},
{id:2,title:tituloImagen2,artist:artistaImagen2,year:anioImagen2,category:'abstracto',room:'Sala Este',slotId:'E1',description:descripcionImagen2,image:imagen(2)},
{id:3,title:tituloImagen3,artist:artistaImagen3,year:anioImagen3,category:'clasico',room:'Sala Sur',slotId:'S1',description:descripcionImagen3,image:imagen(3)},
{id:4,title:tituloImagen4,artist:artistaImagen4,year:anioImagen4,category:'moderno',room:'Sala Oeste',slotId:'O1',description:descripcionImagen4,image:imagen(4)},
{id:5,title:tituloImagen5,artist:artistaImagen5,year:anioImagen5,category:'abstracto',room:'Sala Norte',slotId:'N2',description:descripcionImagen5,image:imagen(5)},
{id:6,title:tituloImagen6,artist:artistaImagen6,year:anioImagen6,category:'moderno',room:'Sala Norte',slotId:'N3',description:descripcionImagen6,image:imagen(6)},
{id:7,title:tituloImagen7,artist:artistaImagen7,year:anioImagen7,category:'abstracto',room:'Sala Norte',slotId:'N4',description:descripcionImagen7,image:imagen(7)},
{id:8,title:tituloImagen8,artist:artistaImagen8,year:anioImagen8,category:'moderno',room:'Sala Norte',slotId:'N5',description:descripcionImagen8,image:imagen(8)},
{id:9,title:tituloImagen9,artist:artistaImagen9,year:anioImagen9,category:'abstracto',room:'Sala Este',slotId:'E2',description:descripcionImagen9,image:imagen(9)},
{id:10,title:tituloImagen10,artist:artistaImagen10,year:anioImagen10,category:'moderno',room:'Sala Este',slotId:'E3',description:descripcionImagen10,image:imagen(10)},
{id:11,title:tituloImagen11,artist:artistaImagen11,year:anioImagen11,category:'clasico',room:'Sala Este',slotId:'E4',description:descripcionImagen11,image:imagen(11)},
{id:12,title:tituloImagen12,artist:artistaImagen12,year:anioImagen12,category:'abstracto',room:'Sala Este',slotId:'E5',description:descripcionImagen12,image:imagen(12)},
{id:13,title:tituloImagen13,artist:artistaImagen13,year:anioImagen13,category:'moderno',room:'Sala Sur',slotId:'S2',description:descripcionImagen13,image:imagen(13)},
{id:14,title:tituloImagen14,artist:artistaImagen14,year:anioImagen14,category:'clasico',room:'Sala Sur',slotId:'S3',description:descripcionImagen14,image:imagen(14)},
{id:15,title:tituloImagen15,artist:artistaImagen15,year:anioImagen15,category:'abstracto',room:'Sala Sur',slotId:'S4',description:descripcionImagen15,image:imagen(15)},
{id:16,title:tituloImagen16,artist:artistaImagen16,year:anioImagen16,category:'moderno',room:'Sala Sur',slotId:'S5',description:descripcionImagen16,image:imagen(16)},
{id:17,title:tituloImagen17,artist:artistaImagen17,year:anioImagen17,category:'abstracto',room:'Sala Oeste',slotId:'O2',description:descripcionImagen17,image:imagen(17)},
{id:18,title:tituloImagen18,artist:artistaImagen18,year:anioImagen18,category:'moderno',room:'Sala Oeste',slotId:'O3',description:descripcionImagen18,image:imagen(18)},
{id:19,title:tituloImagen19,artist:artistaImagen19,year:anioImagen19,category:'clasico',room:'Sala Oeste',slotId:'O4',description:descripcionImagen19,image:imagen(19)},
{id:20,title:tituloImagen20,artist:artistaImagen20,year:anioImagen20,category:'abstracto',room:'Sala Oeste',slotId:'O5',description:descripcionImagen20,image:imagen(20)},
{id:21,title:tituloImagen21,artist:artistaImagen21,year:anioImagen21,category:'moderno',room:'Sala Norte',slotId:'C1',description:descripcionImagen21,image:imagen(21)},
{id:22,title:tituloImagen22,artist:artistaImagen22,year:anioImagen22,category:'abstracto',room:'Sala Norte',slotId:'C2',description:descripcionImagen22,image:imagen(22)},
{id:23,title:tituloImagen23,artist:artistaImagen23,year:anioImagen23,category:'clasico',room:'Sala Norte',slotId:'C3',description:descripcionImagen23,image:imagen(23)},
{id:24,title:tituloImagen24,artist:artistaImagen24,year:anioImagen24,category:'moderno',room:'Sala Oeste',slotId:'C4',description:descripcionImagen24,image:imagen(24)},
{id:25,title:tituloImagen25,artist:artistaImagen25,year:anioImagen25,category:'abstracto',room:'Sala Oeste',slotId:'C5',description:descripcionImagen25,image:imagen(25)},
{id:26,title:tituloImagen26,artist:artistaImagen26,year:anioImagen26,category:'clasico',room:'Sala Sur',slotId:'C6',description:descripcionImagen26,image:imagen(26)},
{id:27,title:tituloImagen27,artist:artistaImagen27,year:anioImagen27,category:'moderno',room:'Sala Sur',slotId:'C7',description:descripcionImagen27,image:imagen(27)},
{id:28,title:tituloImagen28,artist:artistaImagen28,year:anioImagen28,category:'abstracto',room:'Sala Sur',slotId:'C8',description:descripcionImagen28,image:imagen(28)}
];
let uploaded=[];try{uploaded=JSON.parse(localStorage.getItem(STORAGE_KEY)||localStorage.getItem('musea_uploaded_v3')||'[]')}catch(e){}
// Migra obras de versiones anteriores: si no tenían punto de montaje, se asigna el primer lugar libre de su sala.
{const used=new Set(defaults.map(p=>p.slotId));uploaded.forEach(p=>{if(!p.slotId){const free=MOUNT_SLOTS.find(s=>s.room===p.room&&!used.has(s.id));if(free)p.slotId=free.id}if(p.slotId)used.add(p.slotId)});try{localStorage.setItem(STORAGE_KEY,JSON.stringify(uploaded))}catch(e){}}
let paintings=[...defaults,...uploaded];let nextId=Math.max(...paintings.map(x=>x.id),4)+1;
const $=id=>document.getElementById(id),grid=$('grid'),detail=$('detail'),detailImg=$('detailImg'),detailTitle=$('detailTitle'),detailMeta=$('detailMeta'),detailDesc=$('detailDesc');
function displayRoom(room){return String(room||'').replace('Sala Norte','Galería Norte').replace('Sala Este','Galería Este').replace('Sala Sur','Galería Sur').replace('Sala Oeste','Galería Oeste')}
function esc(s){return String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function slotById(id){return MOUNT_SLOTS.find(s=>s.id===id)}
function occupiedSlotIds(exceptPaintingId=null){return new Set(paintings.filter(p=>p.id!==exceptPaintingId&&p.slotId).map(p=>p.slotId))}
function render(filter='all'){const arr=filter==='all'?paintings:paintings.filter(p=>p.category===filter);grid.innerHTML=arr.map(p=>{const sl=slotById(p.slotId);return `<article class="card"><img src="${p.image}" alt="${esc(p.title)}"><h3>${esc(p.title)}</h3><div class="meta">${esc(p.artist)} · ${esc(p.year)}</div><div class="room-tag"><i class="fa-solid fa-location-dot"></i> ${esc(displayRoom(p.room))}${sl?` · Punto ${sl.n}`:''}</div><div class="card-actions"><button data-detail="${p.id}">Ver detalles</button></div></article>`}).join('');grid.querySelectorAll('[data-detail]').forEach(b=>b.onclick=()=>showDetail(Number(b.dataset.detail)))}
render();
function showDetail(id){const p=paintings.find(x=>x.id===id);if(!p)return;const sl=slotById(p.slotId);detailImg.src=p.image;detailTitle.textContent=p.title;detailMeta.textContent=`${p.artist} · ${p.year} · ${displayRoom(p.room)}${sl?` · Punto ${sl.n}`:''}`;detailDesc.textContent=p.description||'Sin descripción';detail.classList.add('open')}
$('closeDetail').onclick=()=>detail.classList.remove('open');detail.onclick=e=>{if(e.target===detail)detail.classList.remove('open')};
const uploadModal=$('uploadModal'),mountModal=$('mountModal'),slotSelect=$('slotSelect');let previewData='';
function fillSlotSelect(preselect=''){
 const used=occupiedSlotIds();slotSelect.innerHTML='';
 for(const room of ['Sala Norte','Sala Este','Sala Sur','Sala Oeste']){
  const group=document.createElement('optgroup');group.label=room;
  MOUNT_SLOTS.filter(s=>s.room===room).forEach(sl=>{const o=document.createElement('option');o.value=sl.id;o.textContent=`Punto ${sl.n} — ${sl.label}${used.has(sl.id)?' (ocupado)':''}`;o.disabled=used.has(sl.id);group.appendChild(o)});slotSelect.appendChild(group)
 }
 const firstFree=MOUNT_SLOTS.find(s=>!used.has(s.id));if(preselect&&!used.has(preselect))slotSelect.value=preselect;else if(firstFree)slotSelect.value=firstFree.id;updateRoomFromSlot();
}
function updateRoomFromSlot(){const sl=slotById(slotSelect.value);$('room').value=sl?.room||'';$('slotSelectNote').textContent=sl?`Punto ${sl.n}: ${sl.label}. La obra quedará montada automáticamente en esta pared.`:'No quedan ubicaciones libres.'}
slotSelect.onchange=updateRoomFromSlot;
function openUploadForSlot(slotId=''){fillSlotSelect(slotId);mountModal.classList.remove('open');uploadModal.classList.add('open')}
$('cancelUpload').onclick=()=>uploadModal.classList.remove('open');
$('imageFile').onchange=()=>{const f=$('imageFile').files[0];if(!f){previewData='';$('preview').textContent='Vista previa de la imagen';return}if(f.size>5*1024*1024){alert('Usá una imagen menor a 5 MB para poder guardarla en el navegador.');$('imageFile').value='';return}const r=new FileReader();r.onload=e=>{previewData=e.target.result;$('preview').innerHTML=`<img src="${previewData}" alt="Vista previa">`};r.readAsDataURL(f)};
$('saveUpload').onclick=()=>{const sl=slotById(slotSelect.value);if(!sl){alert('Elegí una ubicación libre en el mapa o en la lista.');return}if(occupiedSlotIds().has(sl.id)){alert('Ese lugar ya está ocupado. Elegí otro punto verde.');fillSlotSelect();return}if(!$('title').value.trim()||!$('artist').value.trim()||!previewData){alert('Completá Título, Artista e Imagen.');return}const p={id:nextId++,title:$('title').value.trim(),artist:$('artist').value.trim(),year:$('year').value.trim()||'2026',category:$('category').value,room:sl.room,slotId:sl.id,description:$('desc').value.trim()||'Sin descripción',image:previewData};paintings.push(p);uploaded.push(p);try{localStorage.setItem(STORAGE_KEY,JSON.stringify(uploaded))}catch(e){alert('La obra se añadió, pero el navegador no pudo conservarla de forma permanente por falta de espacio.')}render();renderMountMap();window.rebuildPaintings?.();uploadModal.classList.remove('open');$('title').value='';$('artist').value='';$('desc').value='';$('imageFile').value='';previewData='';$('preview').textContent='Vista previa de la imagen'};
function renderMountMap(){const used=occupiedSlotIds(),layer=$('slotLayer'),list=$('slotList');layer.innerHTML='';list.innerHTML='';MOUNT_SLOTS.forEach(sl=>{const p=paintings.find(x=>x.slotId===sl.id),free=!used.has(sl.id);const pin=document.createElement('button');pin.type='button';pin.className=`slot-pin ${free?'free':'used'}`;pin.style.left=sl.mx+'%';pin.style.top=sl.my+'%';pin.textContent=sl.n;pin.title=`Punto ${sl.n} · ${sl.room} · ${free?'Libre':'Ocupado'}`;pin.onclick=()=>selectMapSlot(sl,p);layer.appendChild(pin);const row=document.createElement('button');row.type='button';row.className='slot-row';row.innerHTML=`<span><strong>Punto ${sl.n} · ${esc(displayRoom(sl.room))}</strong><small>${esc(sl.label)}</small></span><span class="status ${free?'free':'used'}">${free?'LIBRE':'OCUPADO'}</span>`;row.onclick=()=>selectMapSlot(sl,p);list.appendChild(row)});}
function selectMapSlot(sl,p){document.querySelectorAll('.slot-pin').forEach(x=>x.classList.toggle('selected',x.textContent==String(sl.n)));$('slotSummary').innerHTML=p?`<b>Punto ${sl.n} · ${esc(displayRoom(sl.room))}</b>${esc(sl.label)}<br>Obra: <strong>${esc(p.title)}</strong>.`:`<b>Punto ${sl.n} · ${esc(displayRoom(sl.room))}</b>${esc(sl.label)}<br><strong>Disponible para una futura obra.</strong>`;}
function openMountMap(){renderMountMap();mountModal.classList.add('open')}
$('openMountMap').onclick=openMountMap;$('miniPlan').onclick=e=>{e.preventDefault();e.stopPropagation();openMountMap()};$('closeMountMap').onclick=()=>mountModal.classList.remove('open');mountModal.onclick=e=>{if(e.target===mountModal)mountModal.classList.remove('open')};
const view2d=$('view2d'),view3d=$('view3d'),back2d=$('back2d');
function show2d(){view2d.classList.add('active');view3d.classList.remove('active');back2d.classList.remove('show');if(window.museumControls?.isLocked)window.museumControls.unlock()}
function startTour(){view2d.classList.remove('active');view3d.classList.add('active');back2d.classList.add('show');setTimeout(()=>{window.museumResize?.();if(window.museumResetMobile)window.museumResetMobile()},80)}
back2d.onclick=show2d;$('startTour2d').onclick=startTour;

(function(){
const container=$('museum3d'),roomLabel=$('roomLabel'),artHint=$('artHint'),isTouch=matchMedia('(pointer:coarse)').matches||navigator.maxTouchPoints>0;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x18130f);scene.fog=new THREE.Fog(0x18130f,38,78);
const camera=new THREE.PerspectiveCamera(isTouch?54:52,1,.18,150);camera.rotation.order='YXZ';camera.position.set(0,1.65,14.7);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,isTouch?1.35:1.8));renderer.shadowMap.enabled=false;renderer.outputEncoding=THREE.sRGBEncoding;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.93;container.appendChild(renderer.domElement);
const controls=new THREE.PointerLockControls(camera,renderer.domElement);controls.minPolarAngle=Math.PI*.25;controls.maxPolarAngle=Math.PI*.75;window.museumControls=controls;scene.add(controls.getObject());
$('enter3d').onclick=()=>{if(!isTouch)controls.lock()};renderer.domElement.addEventListener('click',()=>{if(!isTouch&&!controls.isLocked)controls.lock()});
window.museumResetMobile=()=>{if(isTouch){camera.position.set(0,1.65,14.7);camera.rotation.set(0,0,0)}};
function resetPlayer(){camera.position.set(0,1.65,14.7);camera.rotation.set(0,0,0);joyX=0;joyY=0;if(knob)knob.style.transform='translate(0,0)'}$('reset3d').onclick=resetPlayer;$('resetTouch').onclick=resetPlayer;
scene.add(new THREE.HemisphereLight(0xfff8ed,0x76675d,.78));scene.add(new THREE.AmbientLight(0xfff4e8,.22));const sun=new THREE.DirectionalLight(0xfff2e3,.14);sun.position.set(8,14,10);sun.castShadow=false;scene.add(sun);
const floorMat=new THREE.MeshStandardMaterial({color:0x8b7364,roughness:.96});
const floor=new THREE.Mesh(new THREE.PlaneGeometry(40.8*SPACE_SCALE,28.8*SPACE_SCALE),floorMat);floor.rotation.x=-Math.PI/2;floor.receiveShadow=false;scene.add(floor);
// Una alfombra de acceso corta: no divide el museo ni crea un pasillo artificial.
const runnerMat=new THREE.MeshStandardMaterial({color:0x4a3026,roughness:1});
const runner=new THREE.Mesh(new THREE.PlaneGeometry(5.6,7.4),runnerMat);runner.rotation.x=-Math.PI/2;runner.position.set(0,.008,14.0);scene.add(runner);
const wallMat=new THREE.MeshStandardMaterial({color:0xeee7de,roughness:.94});
const accentWallMat=new THREE.MeshStandardMaterial({color:0xe5ddd2,roughness:.94});
const plinthMat=new THREE.MeshStandardMaterial({color:0x9a806d,roughness:.8});
const ceilingMat=new THREE.MeshStandardMaterial({color:0xf4efe8,roughness:1});
const obstacles=[];const wallDefs=[];
function addWall(x,z,w,d,h=4.25,material=wallMat){
  x*=SPACE_SCALE; z*=SPACE_SCALE; w*=SPACE_SCALE; d*=SPACE_SCALE;
  const wall=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);wall.position.set(x,h/2,z);wall.castShadow=false;wall.receiveShadow=false;scene.add(wall);
  wallDefs.push({x,z,w,d,h});obstacles.push({minX:x-w/2,maxX:x+w/2,minZ:z-d/2,maxZ:z+d/2,clearance:.68,type:'wall'});
  const horizontal=w>=d;const pl=new THREE.Mesh(new THREE.BoxGeometry(w+.02,.16,d+.02),plinthMat);pl.position.set(x,.08,z);scene.add(pl);return wall;
}
// PLANTA ABIERTA inspirada en el esquema aportado por el usuario.
// Perímetro con una entrada generosa en el frente.
addWall(-16.5,0,.30,22);addWall(16.5,0,.30,22);addWall(0,-11,33,.30);
addWall(-10.2,11,12.6,.30);addWall(10.2,11,12.6,.30);
// Núcleo superior izquierdo: pequeño conjunto de paredes de exposición, sin cerrar un cuarto completo.
addWall(-11.4,-6.9,6.2,.28);           // horizontal superior
addWall(-8.35,-4.4,.28,5.2);           // vertical interior
addWall(-12.7,-2.3,3.4,.28);           // horizontal corta
// Gran pared central, como en el esquema, dejando circulación por ambos lados.
addWall(-2.8,-3.6,8.6,.30,4.25,accentWallMat);
// Pared de exhibición derecha, corta y aislada.
addWall(8.0,-2.6,8.2,.30,4.25,accentWallMat);
// Forma en L inferior izquierda.
addWall(-10.0,3.8,.30,5.2);addWall(-7.7,1.35,4.9,.30);
// Dos paneles independientes tipo museo, útiles para cuadros y fáciles de rodear.
addWall(0.0,3.4,2.7,.34,3.5,accentWallMat);
addWall(8.3,3.7,.34,3.1,3.5,accentWallMat);
// Techo continuo; la planta sigue sintiéndose abierta por la poca cantidad de tabiques.
const ceil=new THREE.Mesh(new THREE.PlaneGeometry(39.6*SPACE_SCALE,26.4*SPACE_SCALE),ceilingMat);ceil.rotation.x=Math.PI/2;ceil.position.y=4.25;scene.add(ceil);
// Bancos ubicados en espacios muertos, nunca sobre el eje de entrada ni frente a una abertura.
function bench(x,z,rot=0){x*=SPACE_SCALE;z*=SPACE_SCALE;const g=new THREE.Group();const seat=new THREE.Mesh(new THREE.BoxGeometry(2.3,.18,.64),new THREE.MeshStandardMaterial({color:0x5a3d2c,roughness:.8}));seat.position.y=.5;g.add(seat);[-.82,.82].forEach(xx=>{const leg=new THREE.Mesh(new THREE.BoxGeometry(.12,.5,.46),plinthMat);leg.position.set(xx,.25,0);g.add(leg)});g.position.set(x,0,z);g.rotation.y=rot;scene.add(g);const hw=rot? .55:1.35,hz=rot?1.35:.55;obstacles.push({minX:x-hw,maxX:x+hw,minZ:z-hz,maxZ:z+hz,clearance:.08,type:'furniture'})}
bench(12.2,6.8,Math.PI/2);bench(-3.0,7.0,0);
// Iluminación general + puntos suaves sobre zonas de exhibición.
for(const [x,z] of [[-11,-7],[-3,-4],[8,-3],[-9,3],[0,3],[8,4],[0,8]]){const l=new THREE.PointLight(0xffead0,.22,10,2.2);l.castShadow=false;l.position.set(x*SPACE_SCALE,3.65,z*SPACE_SCALE);scene.add(l)}
// Lugares de montaje: todos coinciden con una pared existente. Se evita cualquier cuadro “flotando”.
const textureLoader=new THREE.TextureLoader();let artObjects=[];const clickable=[];const artObstacles=[];
function disposeObject(o){o.traverse?.(n=>{n.geometry?.dispose?.();if(n.material){if(n.material.map)n.material.map.dispose?.();n.material.dispose?.()}})}
function clearArt(){artObjects.forEach(o=>{scene.remove(o);if(o.userData.spot)scene.remove(o.userData.spot);if(o.userData.target)scene.remove(o.userData.target);disposeObject(o)});artObjects=[];clickable.length=0;artObstacles.length=0}
function mountedPose(slot){
  const normal=new THREE.Vector3(Math.sin(slot.ry),0,Math.cos(slot.ry));
  let best=null,bestDist=Infinity;
  for(const w of wallDefs){
    const horizontal=w.w>=w.d;
    // La cara buscada debe ser paralela al cuadro y el punto debe caer dentro del largo de la pared.
    if(Math.abs(normal.z)>.8 && horizontal){
      if(slot.x<w.x-w.w/2-.5||slot.x>w.x+w.w/2+.5)continue;
      const surfaceZ=w.z+Math.sign(normal.z)*w.d/2;
      const d=Math.abs(slot.z-surfaceZ);if(d<bestDist){bestDist=d;best={x:slot.x,z:surfaceZ};}
    }else if(Math.abs(normal.x)>.8 && !horizontal){
      if(slot.z<w.z-w.d/2-.5||slot.z>w.z+w.d/2+.5)continue;
      const surfaceX=w.x+Math.sign(normal.x)*w.w/2;
      const d=Math.abs(slot.x-surfaceX);if(d<bestDist){bestDist=d;best={x:surfaceX,z:slot.z};}
    }
  }
  // El reverso del marco queda prácticamente apoyado sobre la pared (2 mm de tolerancia visual).
  const mountOffset=.107;
  return best?{x:best.x+normal.x*mountOffset,z:best.z+normal.z*mountOffset}:{x:slot.x,z:slot.z};
}
function addArt(p,slot,index){const group=new THREE.Group();const pose=mountedPose(slot);group.position.set(pose.x,slot.y,pose.z);group.rotation.y=slot.ry;
const isCompactSlot=['S5','C1','C2','C3','C4','C5','C6','C7','C8'].includes(slot.id);
const maxArtWidth=isCompactSlot?1.18:1.52,maxArtHeight=isCompactSlot?1.40:1.78,framePadding=isCompactSlot?.18:.20,minBottom=.92,maxTop=isCompactSlot?2.62:3.20;
const frame=new THREE.Mesh(new THREE.BoxGeometry(maxArtWidth+framePadding,maxArtHeight+framePadding,.10),new THREE.MeshStandardMaterial({color:0x211712,roughness:.62}));frame.position.z=-.055;group.add(frame);
const mat=new THREE.MeshStandardMaterial({color:0xf5f5f5,roughness:.88,metalness:0});const art=new THREE.Mesh(new THREE.PlaneGeometry(maxArtWidth,maxArtHeight),mat);art.position.z=.012;art.userData.painting=p;group.add(art);
const labelWidth=isCompactSlot?.84:1.02,labelHeight=isCompactSlot?.20:.26,labelGap=isCompactSlot?.14:.18;
const labelBg=new THREE.Mesh(new THREE.PlaneGeometry(labelWidth,labelHeight),new THREE.MeshBasicMaterial({color:0xf4efe8}));group.add(labelBg);
const normal=new THREE.Vector3(Math.sin(slot.ry),0,Math.cos(slot.ry));
const artGuard={minX:0,maxX:0,minZ:0,maxZ:0,clearance:.05,type:'art'};
artObstacles.push(artGuard);
function updateArtGuard(width){
  const halfAlongWall=width/2+.35,depth=1.16,skin=.05;
  if(Math.abs(normal.z)>.8){
    artGuard.minX=group.position.x-halfAlongWall;artGuard.maxX=group.position.x+halfAlongWall;
    artGuard.minZ=Math.min(group.position.z-skin,group.position.z+normal.z*depth);
    artGuard.maxZ=Math.max(group.position.z+skin,group.position.z+normal.z*depth);
  }else{
    artGuard.minZ=group.position.z-halfAlongWall;artGuard.maxZ=group.position.z+halfAlongWall;
    artGuard.minX=Math.min(group.position.x-skin,group.position.x+normal.x*depth);
    artGuard.maxX=Math.max(group.position.x+skin,group.position.x+normal.x*depth);
  }
}
function resizeArtwork(ratio=maxArtWidth/maxArtHeight){
  let width=maxArtWidth,height=width/ratio;
  if(height>maxArtHeight){height=maxArtHeight;width=height*ratio}
  art.geometry.dispose();art.geometry=new THREE.PlaneGeometry(width,height);
  frame.geometry.dispose();frame.geometry=new THREE.BoxGeometry(width+framePadding,height+framePadding,.10);
  labelBg.position.set(0,-(height+framePadding)/2-labelGap,.014);
  const framedHeight=height+framePadding;
  group.position.y=Math.min(maxTop-framedHeight/2,Math.max(slot.y,minBottom+framedHeight/2));
  updateArtGuard(width);
  if(group.userData.target)group.userData.target.position.set(group.position.x,group.position.y+.08,group.position.z);
}
resizeArtwork();
const tex=textureLoader.load(p.image,t=>{t.encoding=THREE.sRGBEncoding;const img=t.image||{};resizeArtwork((img.naturalWidth||img.width||700)/(img.naturalHeight||img.height||900));mat.map=t;mat.needsUpdate=true},undefined,()=>{mat.color.set(0xd9cab8);mat.needsUpdate=true});mat.map=tex;
// Luz cálida de prueba por obra: suave, sin sombras duras ni sobreexposición.
const target=new THREE.Object3D();target.position.set(group.position.x,group.position.y+.08,group.position.z);scene.add(target);
const spot=new THREE.SpotLight(0xffedcf,.34,5.4,Math.PI/5,.92,1.8);spot.castShadow=false;spot.position.set(group.position.x+normal.x*.45,3.28,group.position.z+normal.z*.45);spot.target=target;scene.add(spot);group.userData.spot=spot;group.userData.target=target;
scene.add(group);artObjects.push(group);clickable.push(art)}
function rebuild(){clearArt();paintings.forEach(p=>{const slot=slotById(p.slotId);if(slot)addArt(p,slot,0)});}
window.rebuildPaintings=rebuild;rebuild();
const keys={};addEventListener('keydown',e=>keys[e.code]=true);addEventListener('keyup',e=>keys[e.code]=false);
const clock=new THREE.Clock(),playerRadius=.38;let blockedUntil=0;
function collides(pos){
  if(pos.x<-(16.05*SPACE_SCALE)||pos.x>(16.05*SPACE_SCALE)||pos.z<-(10.55*SPACE_SCALE)||pos.z>(10.55*SPACE_SCALE))return true;
  return obstacles.concat(artObstacles).some(o=>{const c=o.clearance||0;return pos.x+playerRadius+c>o.minX&&pos.x-playerRadius-c<o.maxX&&pos.z+playerRadius+c>o.minZ&&pos.z-playerRadius-c<o.maxZ});
}
function showDistanceGuard(){blockedUntil=performance.now()+850;const n=$('distanceNote');if(n)n.classList.add('show')}
function updateDistanceGuard(){const n=$('distanceNote');if(n&&performance.now()>blockedUntil)n.classList.remove('show')}
function currentRoom(p){const x=p.x/SPACE_SCALE,z=p.z/SPACE_SCALE;if(z>7.7&&Math.abs(x)<4.6)return 'Hall de acceso';if(z<0&&x<-6.5)return 'Galería Norte';if(z<0&&x>2.0)return 'Galería Este';if(z>=0&&x>3.8)return 'Galería Sur';if(z>=0&&x<-4.8)return 'Galería Oeste';return 'Galería Central'}
const ray=new THREE.Raycaster();function nearestPainting(){ray.setFromCamera(new THREE.Vector2(0,0),camera);const hit=ray.intersectObjects(clickable,false)[0];return hit&&hit.distance<4.6?hit:null}function inspect(){const hit=nearestPainting();if(hit){if(!isTouch&&controls.isLocked)controls.unlock();setTimeout(()=>showDetail(hit.object.userData.painting.id),60)}}addEventListener('mousedown',e=>{if(e.button===0&&!isTouch&&controls.isLocked)inspect()});$('inspectTouch').onclick=inspect;
// Controles táctiles
let joyX=0,joyY=0;const joystick=$('joystick'),knob=$('joyKnob'),lookPad=$('lookPad');let joyId=null,lookId=null,lastLookX=0,lastLookY=0;
function setJoyFromEvent(e){const r=joystick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=r.width*.32;let dx=e.clientX-cx,dy=e.clientY-cy;const len=Math.hypot(dx,dy)||1,scale=Math.min(1,max/len);dx*=scale;dy*=scale;knob.style.transform=`translate(${dx}px,${dy}px)`;joyX=dx/max;joyY=dy/max}
joystick.addEventListener('pointerdown',e=>{e.preventDefault();joyId=e.pointerId;try{joystick.setPointerCapture(e.pointerId)}catch(_){}setJoyFromEvent(e)},{passive:false});joystick.addEventListener('pointermove',e=>{if(e.pointerId===joyId){e.preventDefault();setJoyFromEvent(e)}},{passive:false});function endJoy(e){if(e.pointerId!==joyId)return;e.preventDefault();joyId=null;joyX=joyY=0;knob.style.transform='translate(0,0)'}joystick.addEventListener('pointerup',endJoy,{passive:false});joystick.addEventListener('pointercancel',endJoy,{passive:false});
lookPad.addEventListener('pointerdown',e=>{lookId=e.pointerId;lastLookX=e.clientX;lastLookY=e.clientY;lookPad.setPointerCapture(e.pointerId);$('mobileLookHint')?.classList.add('hide')});lookPad.addEventListener('pointermove',e=>{if(e.pointerId!==lookId)return;const dx=e.clientX-lastLookX,dy=e.clientY-lastLookY;lastLookX=e.clientX;lastLookY=e.clientY;camera.rotation.y-=dx*.0027;camera.rotation.x-=dy*.00235;camera.rotation.x=Math.max(-.82,Math.min(.82,camera.rotation.x))});function endLook(e){if(e.pointerId===lookId)lookId=null}lookPad.addEventListener('pointerup',endLook);lookPad.addEventListener('pointercancel',endLook);
function moveTouch(dt){
  if(Math.abs(joyX)<.06&&Math.abs(joyY)<.06)return;
  // En móvil movemos la cámara directamente. Esto evita conflictos de
  // PointerLockControls en navegadores Android/Samsung/Chrome.
  const f=new THREE.Vector3();
  camera.getWorldDirection(f); f.y=0;
  if(f.lengthSq()<0.0001) f.set(0,0,-1); else f.normalize();
  const right=new THREE.Vector3(-f.z,0,f.x);
  const dir=new THREE.Vector3()
    .addScaledVector(f,-joyY)
    .addScaledVector(right,joyX);
  const strength=Math.min(1,Math.hypot(joyX,joyY));
  if(dir.lengthSq()===0)return;
  dir.normalize();
  const step=6.2*strength*dt;
  const ox=camera.position.x, oz=camera.position.z;
  // Intentamos X y Z por separado para poder deslizar junto a las paredes.
  camera.position.x += dir.x*step;
  if(collides(camera.position)){camera.position.x=ox;showDistanceGuard()}
  camera.position.z += dir.z*step;
  if(collides(camera.position)){camera.position.z=oz;showDistanceGuard()}
}
function updateMiniMap(pos){const dot=$('miniYou');if(!dot)return;const nx=Math.max(-1,Math.min(1,pos.x/(16.5*SPACE_SCALE)));const nz=Math.max(-1,Math.min(1,pos.z/(11*SPACE_SCALE)));dot.setAttribute('cx',(50+nx*47).toFixed(2));dot.setAttribute('cy',(34+nz*31).toFixed(2));}
function animate(){
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.04);
  const pos=camera.position;
  if(isTouch){
    moveTouch(dt);
  }else if(controls.isLocked){
    const old=pos.clone(),speed=4.8*dt;
    if(keys.KeyW)controls.moveForward(speed);
    if(keys.KeyS)controls.moveForward(-speed);
    if(keys.KeyA)controls.moveRight(-speed);
    if(keys.KeyD)controls.moveRight(speed);
    if(collides(pos)){pos.copy(old);showDistanceGuard()}
  }
  updateDistanceGuard();
  pos.y=1.65;
  roomLabel.textContent=currentRoom(pos);
  updateMiniMap(pos);
  const hit=nearestPainting();
  if(hit){
    if(isTouch){$('inspectTouch').classList.add('available')}
    else{artHint.textContent='Clic para ver la obra';artHint.classList.add('show')}
  }else{
    artHint.classList.remove('show');
    $('inspectTouch').classList.remove('available')
  }
  renderer.render(scene,camera)
}animate();
function resize(){const w=container.clientWidth,h=container.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}window.museumResize=resize;addEventListener('resize',resize);addEventListener('orientationchange',()=>setTimeout(resize,120));resize();
})();
