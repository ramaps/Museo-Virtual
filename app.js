/* ===== LUGAR PARA IMÁGENES =====
   Reemplazá solamente la URL entre comillas para cambiar cada obra.
   imagen1 corresponde al Punto 1, imagen2 al Punto 2, etc.
*/
const imagen1 = "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=900&h=1100&fit=crop";
const imagen2 = "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=900&h=1100&fit=crop";
const imagen3 = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&h=1100&fit=crop";
const imagen4 = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&h=1100&fit=crop";
const imagen5 = "https://picsum.photos/seed/musea05/900/1100";
const imagen6 = "https://picsum.photos/seed/musea06/900/1100";
const imagen7 = "https://picsum.photos/seed/musea07/900/1100";
const imagen8 = "https://picsum.photos/seed/musea08/900/1100";
const imagen9 = "https://picsum.photos/seed/musea09/900/1100";
const imagen10 = "https://picsum.photos/seed/musea10/900/1100";
const imagen11 = "https://picsum.photos/seed/musea11/900/1100";
const imagen12 = "https://picsum.photos/seed/musea12/900/1100";
const imagen13 = "https://picsum.photos/seed/musea13/900/1100";
const imagen14 = "https://picsum.photos/seed/musea14/900/1100";
const imagen15 = "https://picsum.photos/seed/musea15/900/1100";
const imagen16 = "https://picsum.photos/seed/musea16/900/1100";
const imagen17 = "https://picsum.photos/seed/musea17/900/1100";
const imagen18 = "https://picsum.photos/seed/musea18/900/1100";
const imagen19 = "https://picsum.photos/seed/musea19/900/1100";
const imagen20 = "https://picsum.photos/seed/musea20/900/1100";
const imagen21 = "https://picsum.photos/seed/musea21/900/1100";
const imagen22 = "https://picsum.photos/seed/musea22/900/1100";
const imagen23 = "https://picsum.photos/seed/musea23/900/1100";
const imagen24 = "https://picsum.photos/seed/musea24/900/1100";
const imagen25 = "https://picsum.photos/seed/musea25/900/1100";
const imagen26 = "https://picsum.photos/seed/musea26/900/1100";
const imagen27 = "https://picsum.photos/seed/musea27/900/1100";
const imagen28 = "https://picsum.photos/seed/musea28/900/1100";

/* ===== DESCRIPCIONES DE IMÁGENES =====
   Escribí acá la descripción que aparecerá al abrir cada obra.
*/
const descripcionImagen1 = "Una obra que captura la atemporalidad del instante.";
const descripcionImagen2 = "Geometrías y transparencias que dialogan con la luz.";
const descripcionImagen3 = "Homenaje al mar y sus infinitos matices.";
const descripcionImagen4 = "Naturaleza y misterio se entrelazan.";
const descripcionImagen5 = "Descripción de la imagen 5.";
const descripcionImagen6 = "Descripción de la imagen 6.";
const descripcionImagen7 = "Descripción de la imagen 7.";
const descripcionImagen8 = "Descripción de la imagen 8.";
const descripcionImagen9 = "Descripción de la imagen 9.";
const descripcionImagen10 = "Descripción de la imagen 10.";
const descripcionImagen11 = "Descripción de la imagen 11.";
const descripcionImagen12 = "Descripción de la imagen 12.";
const descripcionImagen13 = "Descripción de la imagen 13.";
const descripcionImagen14 = "Descripción de la imagen 14.";
const descripcionImagen15 = "Descripción de la imagen 15.";
const descripcionImagen16 = "Descripción de la imagen 16.";
const descripcionImagen17 = "Descripción de la imagen 17.";
const descripcionImagen18 = "Descripción de la imagen 18.";
const descripcionImagen19 = "Descripción de la imagen 19.";
const descripcionImagen20 = "Descripción de la imagen 20.";
const descripcionImagen21 = "Descripción de la imagen 21.";
const descripcionImagen22 = "Descripción de la imagen 22.";
const descripcionImagen23 = "Descripción de la imagen 23.";
const descripcionImagen24 = "Descripción de la imagen 24.";
const descripcionImagen25 = "Descripción de la imagen 25.";
const descripcionImagen26 = "Descripción de la imagen 26.";
const descripcionImagen27 = "Descripción de la imagen 27.";
const descripcionImagen28 = "Descripción de la imagen 28.";

/* ===== TÍTULOS / ARTISTAS / AÑOS =====
   Opcional: editá estos datos si querés cambiar la ficha de cada obra.
*/
const datosObras = [
  ["El Sueño Eterno", "Clara Montes", "2024", "moderno"],
  ["Horizonte de Cristal", "Mateo Rivas", "2023", "abstracto"],
  ["Rapsodia en Azul", "Sofía Herrero", "2022", "clasico"],
  ["Jardín de Sombras", "Luis Carvajal", "2024", "moderno"],
  ["Pulso Carmesí", "Demo Musea", "2026", "abstracto"],
  ["Luz Mineral", "Demo Musea", "2026", "moderno"],
  ["Trama Dorada", "Demo Musea", "2026", "abstracto"],
  ["Niebla Rosa", "Demo Musea", "2026", "moderno"],
  ["Vector Índigo", "Demo Musea", "2026", "abstracto"],
  ["Campo Solar", "Demo Musea", "2026", "moderno"],
  ["Bosque Esmeralda", "Demo Musea", "2026", "clasico"],
  ["Cobre y Ceniza", "Demo Musea", "2026", "abstracto"],
  ["Marea Coral", "Demo Musea", "2026", "moderno"],
  ["Silencio Azul", "Demo Musea", "2026", "clasico"],
  ["Órbita", "Demo Musea", "2026", "abstracto"],
  ["Tierra Clara", "Demo Musea", "2026", "moderno"],
  ["Umbral Verde", "Demo Musea", "2026", "abstracto"],
  ["Contrapunto", "Demo Musea", "2026", "moderno"],
  ["Río Nocturno", "Demo Musea", "2026", "clasico"],
  ["Materia Viva", "Demo Musea", "2026", "abstracto"],
  ["Muro Central I", "Demo Musea", "2026", "moderno"],
  ["Muro Central II", "Demo Musea", "2026", "abstracto"],
  ["Muro Central III", "Demo Musea", "2026", "clasico"],
  ["Reverso Central I", "Demo Musea", "2026", "moderno"],
  ["Reverso Central II", "Demo Musea", "2026", "abstracto"],
  ["Reverso Central III", "Demo Musea", "2026", "clasico"],
  ["Panel Central A", "Demo Musea", "2026", "moderno"],
  ["Panel Central B", "Demo Musea", "2026", "abstracto"]
];

const IMAGENES = [imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,imagen11,imagen12,imagen13,imagen14,imagen15,imagen16,imagen17,imagen18,imagen19,imagen20,imagen21,imagen22,imagen23,imagen24,imagen25,imagen26,imagen27,imagen28];
const DESCRIPCIONES = [descripcionImagen1,descripcionImagen2,descripcionImagen3,descripcionImagen4,descripcionImagen5,descripcionImagen6,descripcionImagen7,descripcionImagen8,descripcionImagen9,descripcionImagen10,descripcionImagen11,descripcionImagen12,descripcionImagen13,descripcionImagen14,descripcionImagen15,descripcionImagen16,descripcionImagen17,descripcionImagen18,descripcionImagen19,descripcionImagen20,descripcionImagen21,descripcionImagen22,descripcionImagen23,descripcionImagen24,descripcionImagen25,descripcionImagen26,descripcionImagen27,descripcionImagen28];

const STORAGE_KEY='musea_uploaded_v4_slots';
// Catálogo único de lugares reales de montaje. x/z/ry se usan en 3D; mx/my se usan en el plano 2D.
const MOUNT_SLOTS=[
{id:'N1',n:1,room:'Sala Norte',label:'Pared norte · izquierda',x:-13.4,y:2.10,z:-10.78,ry:0,mx:12,my:4},
{id:'N2',n:2,room:'Sala Norte',label:'Pared norte · centro',x:-9.4,y:2.10,z:-10.78,ry:0,mx:24,my:4},
{id:'N3',n:3,room:'Sala Norte',label:'Pared oeste · norte',x:-15.78,y:2.10,z:-7.0,ry:Math.PI/2,mx:4,my:14},
{id:'N4',n:4,room:'Sala Norte',label:'Pared oeste · media',x:-15.78,y:2.10,z:-3.8,ry:Math.PI/2,mx:4,my:24},
{id:'N5',n:5,room:'Sala Norte',label:'Tabique superior izquierdo',x:-11.5,y:2.10,z:-6.74,ry:Math.PI,mx:18,my:16},
{id:'E1',n:6,room:'Sala Este',label:'Pared central derecha · izquierda',x:5.9,y:2.10,z:-2.42,ry:0,mx:67,my:28},
{id:'E2',n:7,room:'Sala Este',label:'Pared central derecha · derecha',x:9.4,y:2.10,z:-2.42,ry:0,mx:78,my:28},
{id:'E3',n:8,room:'Sala Este',label:'Pared este · norte',x:15.78,y:2.10,z:-6.6,ry:-Math.PI/2,mx:96,my:16},
{id:'E4',n:9,room:'Sala Este',label:'Pared este · media',x:15.78,y:2.10,z:-2.8,ry:-Math.PI/2,mx:96,my:27},
{id:'E5',n:10,room:'Sala Este',label:'Pared norte · derecha',x:11.9,y:2.10,z:-10.78,ry:0,mx:84,my:4},
{id:'S1',n:11,room:'Sala Sur',label:'Pared este · media sur',x:15.78,y:2.10,z:3.0,ry:-Math.PI/2,mx:96,my:40},
{id:'S2',n:12,room:'Sala Sur',label:'Pared este · sur',x:15.78,y:2.10,z:7.2,ry:-Math.PI/2,mx:96,my:52},
{id:'S3',n:13,room:'Sala Sur',label:'Pared sur · derecha',x:10.6,y:2.10,z:10.78,ry:Math.PI,mx:80,my:64},
{id:'S4',n:14,room:'Sala Sur',label:'Pared sur · centro derecha',x:6.3,y:2.10,z:10.78,ry:Math.PI,mx:68,my:64},
{id:'S5',n:15,room:'Sala Sur',label:'Panel vertical derecho',x:8.10,y:1.95,z:3.7,ry:Math.PI/2,mx:76,my:45},
{id:'O1',n:16,room:'Sala Oeste',label:'Pared oeste · media sur',x:-15.78,y:2.10,z:2.2,ry:Math.PI/2,mx:4,my:38},
{id:'O2',n:17,room:'Sala Oeste',label:'Pared oeste · sur',x:-15.78,y:2.10,z:6.4,ry:Math.PI/2,mx:4,my:50},
{id:'O3',n:18,room:'Sala Oeste',label:'Pared sur · izquierda',x:-11.8,y:2.10,z:10.78,ry:Math.PI,mx:17,my:64},
{id:'O4',n:19,room:'Sala Oeste',label:'Pared sur · centro izquierda',x:-7.5,y:2.10,z:10.78,ry:Math.PI,mx:29,my:64},
{id:'O5',n:20,room:'Sala Oeste',label:'Tabique en L · interior',x:-7.7,y:2.10,z:1.52,ry:Math.PI,mx:29,my:38},
{id:'C1',n:21,room:'Sala Central',label:'Pared central · frente izquierda',x:-5.8,y:2.10,z:-3.38,ry:0,mx:36,my:25},
{id:'C2',n:22,room:'Sala Central',label:'Pared central · frente centro',x:-2.8,y:2.10,z:-3.38,ry:0,mx:46,my:25},
{id:'C3',n:23,room:'Sala Central',label:'Pared central · frente derecha',x:0.2,y:2.10,z:-3.38,ry:0,mx:56,my:25},
{id:'C4',n:24,room:'Sala Central',label:'Pared central · reverso izquierda',x:-5.8,y:2.10,z:-3.82,ry:Math.PI,mx:36,my:31},
{id:'C5',n:25,room:'Sala Central',label:'Pared central · reverso centro',x:-2.8,y:2.10,z:-3.82,ry:Math.PI,mx:46,my:31},
{id:'C6',n:26,room:'Sala Central',label:'Pared central · reverso derecha',x:0.2,y:2.10,z:-3.82,ry:Math.PI,mx:56,my:31},
{id:'C7',n:27,room:'Sala Central',label:'Panel central · cara norte',x:0.0,y:1.95,z:3.58,ry:0,mx:49,my:43},
{id:'C8',n:28,room:'Sala Central',label:'Panel central · cara sur',x:0.0,y:1.95,z:3.22,ry:Math.PI,mx:52,my:50}
];
// Museo ampliado: más espacio libre de circulación manteniendo la misma lógica de planta.
const SPACE_SCALE=1.45;
MOUNT_SLOTS.forEach(s=>{s.x*=SPACE_SCALE;s.z*=SPACE_SCALE});
const defaults=[
{id:1,title:datosObras[0][0],artist:datosObras[0][1],year:datosObras[0][2],category:datosObras[0][3],room:'Sala Norte',slotId:'N1',description:DESCRIPCIONES[0],image:IMAGENES[0]},
{id:2,title:datosObras[1][0],artist:datosObras[1][1],year:datosObras[1][2],category:datosObras[1][3],room:'Sala Este',slotId:'E1',description:DESCRIPCIONES[1],image:IMAGENES[1]},
{id:3,title:datosObras[2][0],artist:datosObras[2][1],year:datosObras[2][2],category:datosObras[2][3],room:'Sala Sur',slotId:'S1',description:DESCRIPCIONES[2],image:IMAGENES[2]},
{id:4,title:datosObras[3][0],artist:datosObras[3][1],year:datosObras[3][2],category:datosObras[3][3],room:'Sala Oeste',slotId:'O1',description:DESCRIPCIONES[3],image:IMAGENES[3]},
{id:5,title:datosObras[4][0],artist:datosObras[4][1],year:datosObras[4][2],category:datosObras[4][3],room:'Sala Norte',slotId:'N2',description:DESCRIPCIONES[4],image:IMAGENES[4]},
{id:6,title:datosObras[5][0],artist:datosObras[5][1],year:datosObras[5][2],category:datosObras[5][3],room:'Sala Norte',slotId:'N3',description:DESCRIPCIONES[5],image:IMAGENES[5]},
{id:7,title:datosObras[6][0],artist:datosObras[6][1],year:datosObras[6][2],category:datosObras[6][3],room:'Sala Norte',slotId:'N4',description:DESCRIPCIONES[6],image:IMAGENES[6]},
{id:8,title:datosObras[7][0],artist:datosObras[7][1],year:datosObras[7][2],category:datosObras[7][3],room:'Sala Norte',slotId:'N5',description:DESCRIPCIONES[7],image:IMAGENES[7]},
{id:9,title:datosObras[8][0],artist:datosObras[8][1],year:datosObras[8][2],category:datosObras[8][3],room:'Sala Este',slotId:'E2',description:DESCRIPCIONES[8],image:IMAGENES[8]},
{id:10,title:datosObras[9][0],artist:datosObras[9][1],year:datosObras[9][2],category:datosObras[9][3],room:'Sala Este',slotId:'E3',description:DESCRIPCIONES[9],image:IMAGENES[9]},
{id:11,title:datosObras[10][0],artist:datosObras[10][1],year:datosObras[10][2],category:datosObras[10][3],room:'Sala Este',slotId:'E4',description:DESCRIPCIONES[10],image:IMAGENES[10]},
{id:12,title:datosObras[11][0],artist:datosObras[11][1],year:datosObras[11][2],category:datosObras[11][3],room:'Sala Este',slotId:'E5',description:DESCRIPCIONES[11],image:IMAGENES[11]},
{id:13,title:datosObras[12][0],artist:datosObras[12][1],year:datosObras[12][2],category:datosObras[12][3],room:'Sala Sur',slotId:'S2',description:DESCRIPCIONES[12],image:IMAGENES[12]},
{id:14,title:datosObras[13][0],artist:datosObras[13][1],year:datosObras[13][2],category:datosObras[13][3],room:'Sala Sur',slotId:'S3',description:DESCRIPCIONES[13],image:IMAGENES[13]},
{id:15,title:datosObras[14][0],artist:datosObras[14][1],year:datosObras[14][2],category:datosObras[14][3],room:'Sala Sur',slotId:'S4',description:DESCRIPCIONES[14],image:IMAGENES[14]},
{id:16,title:datosObras[15][0],artist:datosObras[15][1],year:datosObras[15][2],category:datosObras[15][3],room:'Sala Sur',slotId:'S5',description:DESCRIPCIONES[15],image:IMAGENES[15]},
{id:17,title:datosObras[16][0],artist:datosObras[16][1],year:datosObras[16][2],category:datosObras[16][3],room:'Sala Oeste',slotId:'O2',description:DESCRIPCIONES[16],image:IMAGENES[16]},
{id:18,title:datosObras[17][0],artist:datosObras[17][1],year:datosObras[17][2],category:datosObras[17][3],room:'Sala Oeste',slotId:'O3',description:DESCRIPCIONES[17],image:IMAGENES[17]},
{id:19,title:datosObras[18][0],artist:datosObras[18][1],year:datosObras[18][2],category:datosObras[18][3],room:'Sala Oeste',slotId:'O4',description:DESCRIPCIONES[18],image:IMAGENES[18]},
{id:20,title:datosObras[19][0],artist:datosObras[19][1],year:datosObras[19][2],category:datosObras[19][3],room:'Sala Oeste',slotId:'O5',description:DESCRIPCIONES[19],image:IMAGENES[19]},
{id:21,title:datosObras[20][0],artist:datosObras[20][1],year:datosObras[20][2],category:datosObras[20][3],room:'Sala Central',slotId:'C1',description:DESCRIPCIONES[20],image:IMAGENES[20]},
{id:22,title:datosObras[21][0],artist:datosObras[21][1],year:datosObras[21][2],category:datosObras[21][3],room:'Sala Central',slotId:'C2',description:DESCRIPCIONES[21],image:IMAGENES[21]},
{id:23,title:datosObras[22][0],artist:datosObras[22][1],year:datosObras[22][2],category:datosObras[22][3],room:'Sala Central',slotId:'C3',description:DESCRIPCIONES[22],image:IMAGENES[22]},
{id:24,title:datosObras[23][0],artist:datosObras[23][1],year:datosObras[23][2],category:datosObras[23][3],room:'Sala Central',slotId:'C4',description:DESCRIPCIONES[23],image:IMAGENES[23]},
{id:25,title:datosObras[24][0],artist:datosObras[24][1],year:datosObras[24][2],category:datosObras[24][3],room:'Sala Central',slotId:'C5',description:DESCRIPCIONES[24],image:IMAGENES[24]},
{id:26,title:datosObras[25][0],artist:datosObras[25][1],year:datosObras[25][2],category:datosObras[25][3],room:'Sala Central',slotId:'C6',description:DESCRIPCIONES[25],image:IMAGENES[25]},
{id:27,title:datosObras[26][0],artist:datosObras[26][1],year:datosObras[26][2],category:datosObras[26][3],room:'Sala Central',slotId:'C7',description:DESCRIPCIONES[26],image:IMAGENES[26]},
{id:28,title:datosObras[27][0],artist:datosObras[27][1],year:datosObras[27][2],category:datosObras[27][3],room:'Sala Central',slotId:'C8',description:DESCRIPCIONES[27],image:IMAGENES[27]}
];
let uploaded=[];try{uploaded=JSON.parse(localStorage.getItem(STORAGE_KEY)||localStorage.getItem('musea_uploaded_v3')||'[]')}catch(e){}
// Migra obras de versiones anteriores: si no tenían punto de montaje, se asigna el primer lugar libre de su sala.
{const used=new Set(defaults.map(p=>p.slotId));uploaded.forEach(p=>{if(!p.slotId){const free=MOUNT_SLOTS.find(s=>s.room===p.room&&!used.has(s.id));if(free)p.slotId=free.id}if(p.slotId)used.add(p.slotId)});try{localStorage.setItem(STORAGE_KEY,JSON.stringify(uploaded))}catch(e){}}
let paintings=[...defaults,...uploaded];let nextId=Math.max(...paintings.map(x=>x.id),4)+1;
const $=id=>document.getElementById(id),grid=$('grid'),detail=$('detail'),detailImg=$('detailImg'),detailTitle=$('detailTitle'),detailMeta=$('detailMeta'),detailDesc=$('detailDesc');
function displayRoom(room){return String(room||'').replace('Sala Norte','Galería Norte').replace('Sala Este','Galería Este').replace('Sala Sur','Galería Sur').replace('Sala Oeste','Galería Oeste').replace('Sala Central','Galería Central')}
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
 for(const room of ['Sala Norte','Sala Este','Sala Sur','Sala Oeste','Sala Central']){
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
const camera=new THREE.PerspectiveCamera(isTouch?60:58,1,.16,150);camera.rotation.order='YXZ';camera.position.set(0,1.65,14.7);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,isTouch?1.35:1.8));renderer.shadowMap.enabled=false;renderer.outputEncoding=THREE.sRGBEncoding;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;container.appendChild(renderer.domElement);
// En móviles evitamos PointerLockControls por completo: algunos navegadores táctiles
// (Chrome/Samsung/Safari) pueden mantener la cámara dentro del objeto del control y
// provocar que el joystick o el giro táctil no muevan la vista correctamente.
let controls=null;
if(isTouch){
  scene.add(camera);
  window.museumControls=null;
}else{
  controls=new THREE.PointerLockControls(camera,renderer.domElement);
  window.museumControls=controls;
  scene.add(controls.getObject());
}
$('enter3d').onclick=()=>{if(!isTouch&&controls)controls.lock()};
renderer.domElement.addEventListener('click',()=>{if(!isTouch&&controls&&!controls.isLocked)controls.lock()});
window.museumResetMobile=()=>{if(isTouch){camera.position.set(0,1.65,14.7);camera.rotation.set(0,0,0)}};
function resetPlayer(){camera.position.set(0,1.65,14.7);camera.rotation.set(0,0,0);joyX=0;joyY=0;if(knob)knob.style.transform='translate(0,0)'}$('reset3d').onclick=resetPlayer;$('resetTouch').onclick=resetPlayer;
scene.add(new THREE.HemisphereLight(0xfff8ed,0x76675d,1.02));scene.add(new THREE.AmbientLight(0xfff4e8,.38));const sun=new THREE.DirectionalLight(0xfff2e3,.20);sun.position.set(8,14,10);sun.castShadow=false;scene.add(sun);
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
  wallDefs.push({x,z,w,d,h});obstacles.push({minX:x-w/2,maxX:x+w/2,minZ:z-d/2,maxZ:z+d/2,clearance:.60,type:'wall'});
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
for(const [x,z] of [[-11,-7],[-3,-4],[8,-3],[-9,3],[0,3],[8,4],[0,8]]){const l=new THREE.PointLight(0xffead0,.34,11,2);l.castShadow=false;l.position.set(x*SPACE_SCALE,3.65,z*SPACE_SCALE);scene.add(l)}
// Lugares de montaje: todos coinciden con una pared existente. Se evita cualquier cuadro “flotando”.
const textureLoader=new THREE.TextureLoader();let artObjects=[];const clickable=[];
function disposeObject(o){o.traverse?.(n=>{n.geometry?.dispose?.();if(n.material){if(n.material.map)n.material.map.dispose?.();n.material.dispose?.()}})}
function clearArt(){artObjects.forEach(o=>{scene.remove(o);if(o.userData.spot)scene.remove(o.userData.spot);if(o.userData.target)scene.remove(o.userData.target);disposeObject(o)});artObjects=[];clickable.length=0}
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
function addArt(p,slot,index){
  const group=new THREE.Group();
  const pose=mountedPose(slot);
  group.position.set(pose.x,slot.y,pose.z);
  group.rotation.y=slot.ry;

  const frameMat=new THREE.MeshStandardMaterial({color:0x211712,roughness:.62});
  const frame=new THREE.Mesh(new THREE.BoxGeometry(2.62,3.18,.10),frameMat);
  frame.position.z=-.055;
  group.add(frame);

  const mat=new THREE.MeshStandardMaterial({color:0xf5f5f5,roughness:.88,metalness:0});
  const art=new THREE.Mesh(new THREE.PlaneGeometry(2.40,3.00),mat);
  art.position.z=.012;
  art.userData.painting=p;
  group.add(art);

  const labelBg=new THREE.Mesh(new THREE.PlaneGeometry(1.25,.32),new THREE.MeshBasicMaterial({color:0xf4efe8}));
  labelBg.position.set(0,-1.77,.014);
  group.add(labelBg);

  textureLoader.load(p.image,tex=>{
    tex.encoding=THREE.sRGBEncoding;
    const img=tex.image;
    const ratio=(img&&img.width&&img.height)?img.width/img.height:0.8;
    const maxW=2.55,maxH=3.05;
    let width=maxW,height=width/ratio;
    if(height>maxH){height=maxH;width=height*ratio;}
    art.geometry.dispose();
    art.geometry=new THREE.PlaneGeometry(width,height);
    frame.geometry.dispose();
    frame.geometry=new THREE.BoxGeometry(width+.22,height+.22,.10);
    labelBg.position.y=-(height/2+.30);
    mat.map=tex;
    mat.color.setHex(0xffffff);
    mat.needsUpdate=true;
  },undefined,()=>{
    mat.color.setHex(0xd9d2c8);
    mat.needsUpdate=true;
  });

  const spot=new THREE.SpotLight(0xfff0d9,.48,6.5,Math.PI/6,.78,1.6);
  spot.castShadow=false;
  spot.position.set(group.position.x,3.72,group.position.z);
  const target=new THREE.Object3D();
  target.position.copy(group.position);
  scene.add(target);
  spot.target=target;
  scene.add(spot);
  group.userData.spot=spot;
  group.userData.target=target;
  scene.add(group);
  artObjects.push(group);
  clickable.push(art);
}
function rebuild(){clearArt();paintings.forEach(p=>{const slot=slotById(p.slotId);if(slot)addArt(p,slot,0)});}
window.rebuildPaintings=rebuild;rebuild();
const keys={};addEventListener('keydown',e=>keys[e.code]=true);addEventListener('keyup',e=>keys[e.code]=false);
const clock=new THREE.Clock(),playerRadius=.34;let blockedUntil=0;
function collides(pos){
  if(pos.x<-(16.05*SPACE_SCALE)||pos.x>(16.05*SPACE_SCALE)||pos.z<-(10.55*SPACE_SCALE)||pos.z>(10.55*SPACE_SCALE))return true;
  return obstacles.some(o=>{const c=o.clearance||0;return pos.x+playerRadius+c>o.minX&&pos.x-playerRadius-c<o.maxX&&pos.z+playerRadius+c>o.minZ&&pos.z-playerRadius-c<o.maxZ});
}
function showDistanceGuard(){blockedUntil=performance.now()+850;const n=$('distanceNote');if(n)n.classList.add('show')}
function updateDistanceGuard(){const n=$('distanceNote');if(n&&performance.now()>blockedUntil)n.classList.remove('show')}
function currentRoom(p){const x=p.x/SPACE_SCALE,z=p.z/SPACE_SCALE;if(z>7.7&&Math.abs(x)<4.6)return 'Hall de acceso';if(z<0&&x<-6.5)return 'Galería Norte';if(z<0&&x>2.0)return 'Galería Este';if(z>=0&&x>3.8)return 'Galería Sur';if(z>=0&&x<-4.8)return 'Galería Oeste';return 'Galería Central'}
const ray=new THREE.Raycaster();function nearestPainting(){ray.setFromCamera(new THREE.Vector2(0,0),camera);const hit=ray.intersectObjects(clickable,false)[0];return hit&&hit.distance<4.2?hit:null}function inspect(){const hit=nearestPainting();if(hit){if(!isTouch&&controls&&controls.isLocked)controls.unlock();setTimeout(()=>showDetail(hit.object.userData.painting.id),60)}}addEventListener('mousedown',e=>{if(e.button===0&&!isTouch&&controls&&controls.isLocked)inspect()});$('inspectTouch').onclick=inspect;
// Controles táctiles
let joyX=0,joyY=0;const joystick=$('joystick'),knob=$('joyKnob'),lookPad=$('lookPad');let joyId=null,lookId=null,lastLookX=0,lastLookY=0;
function setJoyFromEvent(e){const r=joystick.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,max=r.width*.32;let dx=e.clientX-cx,dy=e.clientY-cy;const len=Math.hypot(dx,dy)||1,scale=Math.min(1,max/len);dx*=scale;dy*=scale;knob.style.transform=`translate(${dx}px,${dy}px)`;joyX=dx/max;joyY=dy/max}
function resetJoy(){joyId=null;joyX=0;joyY=0;knob.style.transform='translate(0,0)'}
function applyLook(x,y){
  const dx=x-lastLookX,dy=y-lastLookY;lastLookX=x;lastLookY=y;
  camera.rotation.y-=dx*.0030;
  camera.rotation.x-=dy*.0026;
  camera.rotation.x=Math.max(-1.05,Math.min(1.05,camera.rotation.x));
}
if(window.PointerEvent){
  joystick.addEventListener('pointerdown',e=>{e.preventDefault();joyId=e.pointerId;try{joystick.setPointerCapture(e.pointerId)}catch(_){}setJoyFromEvent(e)},{passive:false});
  joystick.addEventListener('pointermove',e=>{if(e.pointerId===joyId){e.preventDefault();setJoyFromEvent(e)}},{passive:false});
  const endJoy=e=>{if(e.pointerId!==joyId)return;e.preventDefault();resetJoy()};
  joystick.addEventListener('pointerup',endJoy,{passive:false});
  joystick.addEventListener('pointercancel',endJoy,{passive:false});
  lookPad.addEventListener('pointerdown',e=>{e.preventDefault();lookId=e.pointerId;lastLookX=e.clientX;lastLookY=e.clientY;try{lookPad.setPointerCapture(e.pointerId)}catch(_){}$('mobileLookHint')?.classList.add('hide')},{passive:false});
  lookPad.addEventListener('pointermove',e=>{if(e.pointerId!==lookId)return;e.preventDefault();applyLook(e.clientX,e.clientY)},{passive:false});
  const endLook=e=>{if(e.pointerId===lookId)lookId=null};
  lookPad.addEventListener('pointerup',endLook,{passive:false});
  lookPad.addEventListener('pointercancel',endLook,{passive:false});
}else{
  joystick.addEventListener('touchstart',e=>{e.preventDefault();const t=e.changedTouches[0];joyId=t.identifier;setJoyFromEvent(t)},{passive:false});
  joystick.addEventListener('touchmove',e=>{const t=[...e.changedTouches].find(t=>t.identifier===joyId);if(!t)return;e.preventDefault();setJoyFromEvent(t)},{passive:false});
  const endJoyTouch=e=>{if([...e.changedTouches].some(t=>t.identifier===joyId)){e.preventDefault();resetJoy()}};
  joystick.addEventListener('touchend',endJoyTouch,{passive:false});
  joystick.addEventListener('touchcancel',endJoyTouch,{passive:false});
  lookPad.addEventListener('touchstart',e=>{e.preventDefault();const t=e.changedTouches[0];lookId=t.identifier;lastLookX=t.clientX;lastLookY=t.clientY;$('mobileLookHint')?.classList.add('hide')},{passive:false});
  lookPad.addEventListener('touchmove',e=>{const t=[...e.changedTouches].find(t=>t.identifier===lookId);if(!t)return;e.preventDefault();applyLook(t.clientX,t.clientY)},{passive:false});
  const endLookTouch=e=>{if([...e.changedTouches].some(t=>t.identifier===lookId))lookId=null};
  lookPad.addEventListener('touchend',endLookTouch,{passive:false});
  lookPad.addEventListener('touchcancel',endLookTouch,{passive:false});
}
if(isTouch){
  ['touchstart','touchmove'].forEach(type=>container.addEventListener(type,e=>e.preventDefault(),{passive:false}));
}
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
  }else if(controls&&controls.isLocked){
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
