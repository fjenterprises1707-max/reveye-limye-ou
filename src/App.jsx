import { useState } from "react";

const SERVICES = [
  {
    id: 1, icon: "🔮",
    title: { kr: "Konsiltasyon Espirityèl", fr: "Consultation Spirituelle", en: "Spiritual Consultation", es: "Consulta Espiritual" },
    price: "$77.77", priceNum: 77.77,
    tag: { kr: "Evalyasyon pèsonèl", fr: "Évaluation personnelle", en: "Personal evaluation", es: "Evaluación personal" },
    desc: { kr: "Ou pale avèm, m' koute ou epi nou jwenn ansanm sa ki pi bon pou ou.", fr: "Vous me parlez, j'écoute et nous trouvons ensemble ce qui est le mieux pour vous.", en: "You speak, I listen and together we find what's best for you.", es: "Me hablas, te escucho y juntos encontramos lo mejor para ti." },
    duration: "60 min", color: "#C17D3C", badge: { kr: "Kòmanse la", fr: "Commencer ici", en: "Start here", es: "Empezar aquí" },
  },
  {
    id: 2, icon: "🌊",
    title: { kr: "Lave Matris", fr: "Lavage de Matrice", en: "Womb Cleansing", es: "Limpieza de Matriz" },
    price: "$177.77", priceNum: 177.77,
    tag: { kr: "Pwodui enkli + akonpayman", fr: "Produits inclus + accompagnement", en: "Products included + guidance", es: "Productos incluidos + acompañamiento" },
    desc: { kr: "Pwodui yo enkli. M' ap akonpaye ou nan tout pwosesis la.", fr: "Produits inclus. Je vous accompagne tout au long du processus.", en: "Products included. I guide you through the entire process.", es: "Productos incluidos. Te acompaño durante todo el proceso." },
    duration: "Pwosesis konplè", color: "#4ECDC4", badge: { kr: "Pwodui enkli", fr: "Produits inclus", en: "Products included", es: "Productos incluidos" },
  },
  {
    id: 3, icon: "🛁",
    title: { kr: "Beny Espirityèl", fr: "Bain Spirituel", en: "Spiritual Bath", es: "Baño Espiritual" },
    price: "$50 – $150", priceNum: 50,
    tag: { kr: "Selon kalite beny", fr: "Selon le type de bain", en: "According to bath type", es: "Según el tipo de baño" },
    desc: { kr: "Beny adapte selon sa ou bezwen — netwayaj, pwoteksyon, atire abondans, oswa gerizon kè.", fr: "Bain adapté selon votre besoin.", en: "Bath tailored to your need — cleansing, protection, abundance or healing.", es: "Baño adaptado a tu necesidad." },
    duration: "Selon beny", color: "#A78BFA", badge: { kr: "Basic – Premium", fr: "Basic – Premium", en: "Basic – Premium", es: "Basic – Premium" },
  },
];

const BRANDS = [
  {
    id: "ancestral", name: "Ancestral Light",
    tagline: { kr: "Purify • Protect • Elevate", fr: "Purifier • Protéger • Élever", en: "Purify • Protect • Elevate", es: "Purificar • Proteger • Elevar" },
    sub: { kr: "Prepared with Intention & Light", fr: "Préparé avec Intention & Lumière", en: "Prepared with Intention & Light", es: "Preparado con Intención & Luz" },
    color: "#C17D3C", gradient: "linear-gradient(135deg, #1a0a00, #3d1f00)", icon: "🕯️",
    packages: [
      { num: 1, name: "Standard Package", sub: "Spiritual House Cleaning Kit", official: "$77.77", referral: "$55.55", color: "#C17D3C" },
      { num: 2, name: "Premium Package", sub: "House Cleaning + Spiritual Bath", official: "$144.44", referral: "$105.55", color: "#D4AF37" },
      { num: 3, name: "Extra Premium Package", sub: "House Cleaning + Spiritual Bath + Meditation + Guidance", official: "$333.33", referral: "$250.77", color: "#F7B731" },
    ],
    note: { kr: "Free Shipping • Haiti & DR disponib pa telefòn", fr: "Livraison gratuite • Haïti & RD disponible par téléphone", en: "Free Shipping • Haiti & DR available by phone", es: "Envío gratis • Haití & RD disponible por teléfono" },
  },
  {
    id: "granny", name: "Granny Tea",
    tagline: { kr: "Nature • Tradition • Wellness", fr: "Nature • Tradition • Bien-être", en: "Nature • Tradition • Wellness", es: "Naturaleza • Tradición • Bienestar" },
    sub: { kr: "Natural Haitian Herbs", fr: "Herbes Naturelles Haïtiennes", en: "Natural Haitian Herbs", es: "Hierbas Naturales Haitianas" },
    color: "#5C7A3E", gradient: "linear-gradient(135deg, #1a2a0a, #2d4a1a)", icon: "🌿",
    packages: [],
    note: { kr: "Pwochen lanse — Rete alèt!", fr: "Prochain lancement — Restez à l'écoute!", en: "Coming soon — Stay tuned!", es: "Próximamente — ¡Mantente al tanto!" },
  },
];

const SHOP_ITEMS = [
  { id: 1, icon: "🏠", name: { kr: "Standard Package", fr: "Standard Package", en: "Standard Package", es: "Standard Package" }, brand: "Ancestral Light", official: "$77.77", referral: "$55.55", priceNum: 77.77, desc: { kr: "Kit netwayaj kay espirityèl", fr: "Kit nettoyage maison spirituel", en: "Spiritual house cleaning kit", es: "Kit limpieza espiritual del hogar" }, badge: "Ancestral" },
  { id: 2, icon: "✨", name: { kr: "Premium Package", fr: "Premium Package", en: "Premium Package", es: "Premium Package" }, brand: "Ancestral Light", official: "$144.44", referral: "$105.55", priceNum: 144.44, desc: { kr: "Kay + Beny espirityèl", fr: "Maison + Bain spirituel", en: "House + Spiritual bath", es: "Casa + Baño espiritual" }, badge: "Ancestral" },
  { id: 3, icon: "👑", name: { kr: "Extra Premium Package", fr: "Extra Premium Package", en: "Extra Premium Package", es: "Extra Premium Package" }, brand: "Ancestral Light", official: "$333.33", referral: "$250.77", priceNum: 333.33, desc: { kr: "Kay + Beny + Meditasyon + Gidans", fr: "Maison + Bain + Méditation + Guidance", en: "House + Bath + Meditation + Guidance", es: "Casa + Baño + Meditación + Guía" }, badge: "Ancestral" },
  { id: 4, icon: "🌿", name: { kr: "Granny Tea", fr: "Granny Tea", en: "Granny Tea", es: "Granny Tea" }, brand: "Granny Tea", official: "—", referral: "—", priceNum: 0, desc: { kr: "Pwochen lanse — Zèb natirèl ayisyen", fr: "Prochainement — Herbes naturelles haïtiennes", en: "Coming soon — Natural Haitian herbs", es: "Próximamente — Hierbas naturales haitianas" }, badge: "Granny Tea", soon: true },
];

const CHALLENGES = {
  c7: {
    color: "#4ECDC4", gradient: "linear-gradient(135deg, #4ECDC4, #44B9A8)", icon: "🌱",
    title: { kr: "Reveye — 7 Jou", fr: "Éveil — 7 Jours", en: "Awakening — 7 Days", es: "Despertar — 7 Días" },
    sub: { kr: "Yon semèn pou ouvri kè ou", fr: "Une semaine pour ouvrir votre cœur", en: "One week to open your heart", es: "Una semana para abrir tu corazón" },
    desc: { kr: "7 jou pratik espirityèl chak maten. Meditasyon, afirmasyon, epi son gerizon.", fr: "7 jours de pratique spirituelle chaque matin.", en: "7 days of morning spiritual practice.", es: "7 días de práctica espiritual matutina." },
    includes: {
      kr: ["7 meditasyon gide (10-20 min)", "Afirmasyon chak jou", "Playlist mizik espesyal", "Jounal pou reflechi"],
      fr: ["7 méditations guidées", "Affirmations quotidiennes", "Playlist musicale", "Journal de réflexion"],
      en: ["7 guided meditations", "Daily affirmations", "Special music playlist", "Reflection journal"],
      es: ["7 meditaciones guiadas", "Afirmaciones diarias", "Playlist musical especial", "Diario de reflexión"],
    },
    days: ["Ouvri Kè a","Rekonèt Limyè a","Netwayaj Enèji","Fè Konfyans","Koneksyon Pwofon","Gratis & Rekonesans","Reveye Konplè"],
    playlist: ["Om Shanti Pwofon","Gerizon 432 Hz","Son Rivyè","Mantra Maten","Kalm Enteryè","Afirmasyon Limyè","Selebrasyon Nanm"],
    total: 7,
  },
  c21: {
    color: "#F7B731", gradient: "linear-gradient(135deg, #F7B731, #F09819)", icon: "🔥",
    title: { kr: "Transfòmasyon — 21 Jou", fr: "Transformation — 21 Jours", en: "Transformation — 21 Days", es: "Transformación — 21 Días" },
    sub: { kr: "21 jou pou chanje lavi ou", fr: "21 jours pour changer votre vie", en: "21 days to transform your life", es: "21 días para transformar tu vida" },
    desc: { kr: "21 jou transfòmasyon pwofon. Aprann lage sa ki fè ou soufri epi viv nan limyè ou.", fr: "21 jours de transformation profonde.", en: "21 days of deep transformation.", es: "21 días de transformación profunda." },
    includes: {
      kr: ["21 meditasyon pwofon", "Kominote a", "Playlist 21 tracks", "Sèsyon LIVE chak semèn", "Sètifika"],
      fr: ["21 méditations profondes", "La communauté", "Playlist 21 pistes", "Sessions LIVE hebdo", "Certificat"],
      en: ["21 deep meditations", "Community access", "21-track playlist", "Weekly LIVE sessions", "Certificate"],
      es: ["21 meditaciones profundas", "Acceso comunidad", "Playlist 21 pistas", "Sesiones LIVE semanales", "Certificado"],
    },
    days: ["Kòmansman","Soufl Sakre","Netwayaj","Rekonesans","Fè Konfyans","Lage Pè a","Ouvri Kè","Koneksyon","Reveye","Klète","Afirmasyon","Pwofondè","Pardon","Liberasyon","Amou Pwòp","Fòs Enteryè","Trankilite","Vizyon","Gerizon","Entegrasyon","Limyè"],
    playlist: ["Intro Sakre","Mantra Ouvèti","Soufl Pwofon","Frekans 528 Hz","Gerizon Kè","Son Forè","Chakra Rasin","Ekilibr","Renouvèlman","Mantra Solèy","Paix Interyè","Lach Priz","Konfyans","Limyè Dòr","Elvasyòn","Son Okyean","Afirmasyon","Transfòmasyon","Nanm Lib","Frekans Amou","Selebrasyon"],
    total: 21,
  },
};

const TL = {
  kr: { appName:"Reveye Limyè Ou", tagline:"Reveye limyè ki anndan ou", company:"FJ Enterprises LLC", nav:{home:"Akèy",services:"Sevis",brands:"Brand",challenges:"Challenges",shop:"Boutik"}, home:{greeting:"Bònjou, Bèl Nanm ✨",sub:"Vwayaj espirityèl ou kòmanse isit",myBrands:"Mak Nou Yo",quickNav:"Aksè Rapid",activeProg:"Pwogresyon Aktif"}, services:{title:"Sevis Espirityèl",sub:"Chwazi sesyon ki fèt pou ou",selectDate:"Chwazi Dat",selectTime:"Chwazi Lè",payNow:"Peye Kounye a",payLater:"Rezève, Peye Apre",confirm:"Konfime Rezèvasyon",confirmed:"✓ Rezèvasyon Konfime!",confirmedSub:"Ou pral resevwa yon imèl konfirmasyon",bookAnother:"Rezève yon lòt",orContact:"Oswa kontakte dirèkteman",contactDesc:"Voye mesaj — m ap reponn nan 24h",send:"Voye Mesaj",namePh:"Non ou",emailPh:"Imèl ou",msgPh:"Mesaj ou...",msgSent:"✓ Mesaj Voye!"}, brands:{title:"Mak Nou Yo",sub:"Sous FJ Enterprises LLC",referralPrice:"Pri TikTok/Referans",officialPrice:"Pri Ofisyèl",comingSoon:"Pwochen Lanse",freeShip:"Livrezon Gratis"}, challenges:{title:"Challenges Espirityèl",sub:"Chwazi vwayaj ou",days:"jou",join:"Kòmanse Gratis",cont:"Kontinye",done:"✓ Fini",day:"Jou",playlist:"Playlist",listen:"Koute",includes:"Sa ki ladan l:"}, shop:{title:"Boutik",sub:"Pwodui FJ Enterprises LLC",add:"Ajoute",added:"✓",cart:"Panye",checkout:"Peye",empty:"Panye vid",total:"Total",official:"Pri Ofisyèl",referral:"Pri TikTok/Ref",comingSoon:"Pwochen"}, music:{title:"Mizik & Son",sub:"Playlist challenge ou",c7:"Playlist 7 Jou",c21:"Playlist 21 Jou",playing:"Ap jwe..."} },
  fr: { appName:"Reveye Limyè Ou", tagline:"Éveillez la lumière en vous", company:"FJ Enterprises LLC", nav:{home:"Accueil",services:"Services",brands:"Marques",challenges:"Défis",shop:"Boutique"}, home:{greeting:"Bonjour, Belle Âme ✨",sub:"Votre voyage spirituel commence ici",myBrands:"Nos Marques",quickNav:"Accès Rapide",activeProg:"Progression Active"}, services:{title:"Services Spirituels",sub:"Choisissez la session faite pour vous",selectDate:"Choisir Date",selectTime:"Choisir Heure",payNow:"Payer Maintenant",payLater:"Réserver, Payer Après",confirm:"Confirmer",confirmed:"✓ Réservation Confirmée!",confirmedSub:"Vous recevrez un email de confirmation",bookAnother:"Réserver une autre",orContact:"Ou contactez directement",contactDesc:"Envoyez un message — réponse en 24h",send:"Envoyer",namePh:"Votre nom",emailPh:"Votre email",msgPh:"Votre message...",msgSent:"✓ Message Envoyé!"}, brands:{title:"Nos Marques",sub:"Sous FJ Enterprises LLC",referralPrice:"Prix TikTok/Référence",officialPrice:"Prix Officiel",comingSoon:"Prochainement",freeShip:"Livraison Gratuite"}, challenges:{title:"Défis Spirituels",sub:"Choisissez votre voyage",days:"jours",join:"Commencer Gratuitement",cont:"Continuer",done:"✓ Terminé",day:"Jour",playlist:"Playlist",listen:"Écouter",includes:"Ce qui est inclus:"}, shop:{title:"Boutique",sub:"Produits FJ Enterprises LLC",add:"Ajouter",added:"✓",cart:"Panier",checkout:"Payer",empty:"Panier vide",total:"Total",official:"Prix Officiel",referral:"Prix TikTok/Réf",comingSoon:"Prochainement"}, music:{title:"Musique & Sons",sub:"Playlist de votre défi",c7:"Playlist 7 Jours",c21:"Playlist 21 Jours",playing:"En cours..."} },
  en: { appName:"Reveye Limyè Ou", tagline:"Awaken the light within you", company:"FJ Enterprises LLC", nav:{home:"Home",services:"Services",brands:"Brands",challenges:"Challenges",shop:"Shop"}, home:{greeting:"Hello, Beautiful Soul ✨",sub:"Your spiritual journey starts here",myBrands:"Our Brands",quickNav:"Quick Access",activeProg:"Active Progress"}, services:{title:"Spiritual Services",sub:"Choose the session made for you",selectDate:"Select Date",selectTime:"Select Time",payNow:"Pay Now",payLater:"Book, Pay Later",confirm:"Confirm Booking",confirmed:"✓ Booking Confirmed!",confirmedSub:"You'll receive a confirmation email",bookAnother:"Book another",orContact:"Or contact directly",contactDesc:"Send a message — I reply within 24h",send:"Send Message",namePh:"Your name",emailPh:"Your email",msgPh:"Your message...",msgSent:"✓ Message Sent!"}, brands:{title:"Our Brands",sub:"Under FJ Enterprises LLC",referralPrice:"TikTok/Referral Price",officialPrice:"Official Price",comingSoon:"Coming Soon",freeShip:"Free Shipping"}, challenges:{title:"Spiritual Challenges",sub:"Choose your journey",days:"days",join:"Start for Free",cont:"Continue",done:"✓ Done",day:"Day",playlist:"Playlist",listen:"Listen",includes:"What's included:"}, shop:{title:"Shop",sub:"FJ Enterprises LLC Products",add:"Add to Cart",added:"✓",cart:"Cart",checkout:"Checkout",empty:"Cart is empty",total:"Total",official:"Official Price",referral:"TikTok/Ref Price",comingSoon:"Coming Soon"}, music:{title:"Music & Sounds",sub:"Your challenge playlist",c7:"7-Day Playlist",c21:"21-Day Playlist",playing:"Playing..."} },
  es: { appName:"Reveye Limyè Ou", tagline:"Despierta la luz dentro de ti", company:"FJ Enterprises LLC", nav:{home:"Inicio",services:"Servicios",brands:"Marcas",challenges:"Retos",shop:"Tienda"}, home:{greeting:"Hola, Alma Hermosa ✨",sub:"Tu viaje espiritual comienza aquí",myBrands:"Nuestras Marcas",quickNav:"Acceso Rápido",activeProg:"Progreso Activo"}, services:{title:"Servicios Espirituales",sub:"Elige la sesión hecha para ti",selectDate:"Elegir Fecha",selectTime:"Elegir Hora",payNow:"Pagar Ahora",payLater:"Reservar, Pagar Después",confirm:"Confirmar",confirmed:"✓ ¡Reserva Confirmada!",confirmedSub:"Recibirás un correo de confirmación",bookAnother:"Reservar otra",orContact:"O contactar directamente",contactDesc:"Envía un mensaje — respondo en 24h",send:"Enviar Mensaje",namePh:"Tu nombre",emailPh:"Tu correo",msgPh:"Tu mensaje...",msgSent:"✓ ¡Mensaje Enviado!"}, brands:{title:"Nuestras Marcas",sub:"Bajo FJ Enterprises LLC",referralPrice:"Precio TikTok/Referido",officialPrice:"Precio Oficial",comingSoon:"Próximamente",freeShip:"Envío Gratis"}, challenges:{title:"Retos Espirituales",sub:"Elige tu viaje",days:"días",join:"Comenzar Gratis",cont:"Continuar",done:"✓ Listo",day:"Día",playlist:"Playlist",listen:"Escuchar",includes:"Qué incluye:"}, shop:{title:"Tienda",sub:"Productos FJ Enterprises LLC",add:"Agregar",added:"✓",cart:"Carrito",checkout:"Pagar",empty:"Carrito vacío",total:"Total",official:"Precio Oficial",referral:"Precio TikTok/Ref",comingSoon:"Próximamente"}, music:{title:"Música & Sonidos",sub:"Tu playlist de reto",c7:"Playlist 7 Días",c21:"Playlist 21 Días",playing:"Reproduciendo..."} },
};

const C = { bg:"#0d0800", card:"#1a1000", cardLight:"#221500", primary:"#C17D3C", gold:"#D4AF37", goldLight:"#F7B731", cream:"#F5E6C8", text:"#F5E6C8", muted:"#9A7B5A", border:"#3a2500", teal:"#4ECDC4", violet:"#A78BFA", success:"#4CAF50", white:"#fff" };

export default function App() {
  const [lang, setLang] = useState("kr");
  const [page, setPage] = useState("home");
  const [joined, setJoined] = useState({});
  const [progress] = useState({ c7: 3, c21: 0 });
  const [playingId, setPlayingId] = useState(null);
  const [playlistTab, setPlaylistTab] = useState("c7");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selSvc, setSelSvc] = useState(null);
  const [selDate, setSelDate] = useState("");
  const [selTime, setSelTime] = useState("");
  const [payMode, setPayMode] = useState(null);
  const [booked, setBooked] = useState(false);
  const [contactMode, setContactMode] = useState(false);
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cMsg, setCMsg] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [expandedChallenge, setExpandedChallenge] = useState(null);

  const t = TL[lang];
  const cartCount = cart.reduce((s,i)=>s+i.qty,0);
  const cartTotal = cart.reduce((s,i)=>s+(i.priceNum||0)*i.qty,0);
  const addCart = (item) => setCart(c => { const ex=c.find(x=>x.id===item.id); return ex?c.map(x=>x.id===item.id?{...x,qty:x.qty+1}:x):[...c,{...item,qty:1}]; });
  const today = new Date();
  const dates = Array.from({length:7},(_,i)=>{ const d=new Date(today); d.setDate(today.getDate()+i+1); return d.toLocaleDateString("fr-FR",{weekday:"short",day:"numeric",month:"short"}); });
  const TIMES = ["9:00 AM","10:30 AM","12:00 PM","2:00 PM","3:30 PM","5:00 PM","7:00 PM"];

  const s = {
    app: { minHeight:"100vh", background:C.bg, fontFamily:"'Cinzel','Playfair Display',Georgia,serif", color:C.text },
    header: { background:"rgba(13,8,0,0.97)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:200 },
    logoRow: { display:"flex", alignItems:"center", gap:10 },
    logoMark: { width:34, height:34, borderRadius:"50%", overflow:"hidden", background:"transparent", display:"flex", alignItems:"center", justifyContent:"center" },
    logoName: { fontSize:15, fontWeight:700, color:C.gold, letterSpacing:1 },
    logoSub: { fontSize:9, color:C.muted, letterSpacing:2, textTransform:"uppercase" },
    langRow: { display:"flex", gap:2, background:"rgba(255,255,255,0.05)", borderRadius:20, padding:3 },
    langBtn: (a) => ({ padding:"3px 8px", borderRadius:14, border:"none", cursor:"pointer", fontSize:9, fontWeight:a?700:400, background:a?C.primary:"transparent", color:a?C.white:C.muted, transition:"all .2s", letterSpacing:0.5 }),
    page: { padding:"16px 14px 88px", maxWidth:480, margin:"0 auto" },
    nav: { position:"fixed", bottom:0, left:0, right:0, background:"rgba(13,8,0,0.98)", backdropFilter:"blur(20px)", borderTop:`1px solid ${C.border}`, display:"flex", justifyContent:"space-around", padding:"8px 0 14px", zIndex:200 },
    navBtn: (a) => ({ display:"flex", flexDirection:"column", alignItems:"center", gap:3, background:"none", border:"none", cursor:"pointer", color:a?C.gold:C.muted, transform:a?"scale(1.1)":"scale(1)", transition:"all .2s" }),
    navIcon: { fontSize:18 },
    navLabel: (a) => ({ fontSize:9, fontWeight:a?700:400, letterSpacing:0.5 }),
    card: { background:C.card, borderRadius:16, padding:18, marginBottom:12, border:`1px solid ${C.border}`, boxShadow:`0 4px 24px rgba(0,0,0,0.4)` },
    goldCard: { background:`linear-gradient(135deg, ${C.card}, ${C.cardLight})`, borderRadius:16, padding:18, marginBottom:12, border:`1px solid ${C.gold}44` },
    h1: { fontSize:22, fontWeight:700, color:C.gold, marginBottom:4, letterSpacing:0.5 },
    sub: { fontSize:12, color:C.muted, marginBottom:18 },
    btn: (bg,fg="#fff") => ({ background:bg, color:fg, border:"none", borderRadius:10, padding:"11px 18px", cursor:"pointer", fontSize:12, fontWeight:700, letterSpacing:0.5, transition:"all .2s", display:"inline-flex", alignItems:"center", justifyContent:"center", gap:6, fontFamily:"inherit" }),
    btnOutline: (col) => ({ background:"transparent", color:col, border:`1.5px solid ${col}`, borderRadius:10, padding:"9px 16px", cursor:"pointer", fontSize:12, fontWeight:700, transition:"all .2s", fontFamily:"inherit" }),
    goldDivider: { height:1, background:`linear-gradient(90deg, transparent, ${C.gold}55, transparent)`, margin:"14px 0" },
    badge: (col) => ({ background:col+"22", color:col, borderRadius:20, padding:"2px 10px", fontSize:10, fontWeight:700, display:"inline-block", letterSpacing:0.3 }),
    input: { width:"100%", padding:"10px 14px", borderRadius:10, border:`1px solid ${C.border}`, background:"rgba(255,255,255,0.05)", fontSize:12, color:C.text, outline:"none", fontFamily:"inherit", boxSizing:"border-box", marginBottom:8 },
    priceBox: (col) => ({ background:col+"11", border:`1px solid ${col}33`, borderRadius:10, padding:"10px 14px", textAlign:"center" }),
  };

  const navItems = [
    {key:"home",icon:"🏠"},{key:"services",icon:"🔮"},{key:"brands",icon:"✨"},{key:"challenges",icon:"🌟"},{key:"shop",icon:"🛍️"},
  ];

  const HomePage = () => (
    <div>
      <div style={{textAlign:"center",padding:"28px 0 22px"}}>
        <img
  src="/file_00000000aedc71fb993e08263163f040.png"
  style={{
    width:"100px",
    height:"100px",
    objectFit:"contain",
    marginBottom:"10px"
  }}
/>
        <h1 style={{fontSize:24,fontWeight:700,color:C.gold,marginBottom:6,letterSpacing:1}}>{t.home.greeting}</h1>
        <p style={{color:C.muted,fontSize:14}}>{t.home.sub}</p>
        <div style={{marginTop:6,fontSize:10,color:C.primary,letterSpacing:2,textTransform:"uppercase"}}>{t.company}</div>
      </div>
      {(joined.c7||joined.c21)&&(
        <div style={{...s.goldCard,background:`linear-gradient(135deg, #1a0800, #3d1f00)`,border:`1px solid ${C.gold}66`,marginBottom:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <div style={{fontSize:10,color:C.muted,letterSpacing:1,textTransform:"uppercase",marginBottom:4}}>{t.home.activeProg}</div>
              <div style={{fontSize:16,fontWeight:700,color:C.gold}}>{joined.c7?CHALLENGES.c7.title[lang]:CHALLENGES.c21.title[lang]}</div>
              <div style={{fontSize:11,color:C.muted,marginTop:2}}>{t.challenges.day} {joined.c7?progress.c7:progress.c21} / {joined.c7?7:21}</div>
            </div>
            <div style={{fontSize:32}}>{joined.c7?"🌱":"🔥"}</div>
          </div>
          <div style={{marginTop:10,height:4,borderRadius:2,background:"rgba(255,255,255,0.1)"}}>
            <div style={{height:"100%",width:(joined.c7?progress.c7/7:progress.c21/21)*100+"%",borderRadius:2,background:`linear-gradient(90deg, ${C.primary}, ${C.gold})`,transition:"width .5s"}}/>
          </div>
        </div>
      )}
      <div style={{fontSize:10,color:C.muted,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>{t.home.quickNav}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
        {[
          {icon:"🔮",label:t.nav.services,page:"services",col:C.primary},
          {icon:"✨",label:t.nav.brands,page:"brands",col:C.gold},
          {icon:"🌟",label:t.nav.challenges,page:"challenges",col:C.teal},
          {icon:"🛍️",label:t.nav.shop,page:"shop",col:C.violet},
        ].map((item,i)=>(
          <div key={i} onClick={()=>setPage(item.page)} style={{...s.card,textAlign:"center",cursor:"pointer",padding:16,marginBottom:0,border:`1px solid ${item.col}33`,background:`linear-gradient(135deg, ${C.card}, ${item.col}08)`}}>
            <div style={{fontSize:28,marginBottom:8}}>{item.icon}</div>
            <div style={{fontSize:12,fontWeight:700,color:item.col}}>{item.label}</div>
          </div>
        ))}
      </div>
      <div style={{fontSize:10,color:C.muted,letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>{t.home.myBrands}</div>
      {BRANDS.map(br=>(
        <div key={br.id} onClick={()=>setPage("brands")} style={{...s.card,cursor:"pointer",border:`1px solid ${br.color}44`,background:`linear-gradient(135deg, ${C.card}, ${br.color}08)`,display:"flex",gap:14,alignItems:"center",marginBottom:10}}>
          <div style={{width:44,height:44,borderRadius:12,background:br.gradient,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{br.icon}</div>
          <div>
            <div style={{fontWeight:700,fontSize:15,color:br.color}}>{br.name}</div>
            <div style={{fontSize:11,color:C.muted,marginTop:2}}>{br.tagline[lang]}</div>
            <div style={{fontSize:10,color:C.muted,marginTop:1,fontStyle:"italic"}}>{br.sub[lang]}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const ServicesPage = () => {
    if (booked) return (
      <div style={{textAlign:"center",padding:"50px 0"}}>
        <div style={{fontSize:60,marginBottom:16}}>🎉</div>
        <h2 style={{fontSize:20,fontWeight:700,color:C.gold,marginBottom:8}}>{t.services.confirmed}</h2>
        <p style={{color:C.muted,fontSize:13,marginBottom:24}}>{t.services.confirmedSub}</p>
        <button onClick={()=>{setBooked(false);setSelSvc(null);setSelDate("");setSelTime("");setPayMode(null);}} style={s.btn(`linear-gradient(135deg,${C.primary},${C.gold})`)}>{t.services.bookAnother}</button>
      </div>
    );
    if (msgSent) return (
      <div style={{textAlign:"center",padding:"50px 0"}}>
        <div style={{fontSize:60,marginBottom:16}}>✉️</div>
        <h2 style={{fontSize:20,fontWeight:700,color:C.gold,marginBottom:8}}>{t.services.msgSent}</h2>
        <button onClick={()=>{setMsgSent(false);setContactMode(false);}} style={{...s.btnOutline(C.primary),marginTop:16}}>← Back</button>
      </div>
    );
    return (
      <div>
        <h1 style={s.h1}>{t.services.title}</h1>
        <p style={s.sub}>{t.services.sub}</p>
        {SERVICES.map(svc=>{
          const sel=selSvc?.id===svc.id;
          return (
            <div key={svc.id} onClick={()=>setSelSvc(sel?null:svc)} style={{...s.goldCard,cursor:"pointer",border:sel?`2px solid ${svc.color}`:`1px solid ${svc.color}33`,transition:"all .2s"}}>
              <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
                <div style={{width:50,height:50,borderRadius:14,background:svc.color+"18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{svc.icon}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                    <div style={{fontWeight:700,fontSize:16,color:C.gold}}>{svc.title[lang]}</div>
                    <div style={{fontWeight:800,color:svc.color,fontSize:16}}>{svc.price}</div>
                  </div>
                  <span style={s.badge(svc.color)}>{svc.badge[lang]}</span>
                  <div style={{fontSize:12,color:C.muted,marginTop:8,lineHeight:1.6}}>{svc.desc[lang]}</div>
                  <div style={{marginTop:6,fontSize:11,color:svc.color}}>⏱ {svc.duration}</div>
                </div>
              </div>
              {sel&&(
                <div onClick={e=>e.stopPropagation()} style={{marginTop:16,borderTop:`1px solid ${C.border}`,paddingTop:16}}>
                  <div style={{fontWeight:700,fontSize:12,color:C.text,marginBottom:8}}>📅 {t.services.selectDate}</div>
                  <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:8,marginBottom:14}}>
                    {dates.map(d=>(
                      <button key={d} onClick={()=>setSelDate(d)} style={{padding:"6px 11px",borderRadius:18,border:`1.5px solid ${selDate===d?svc.color:C.border}`,background:selDate===d?svc.color:"transparent",color:selDate===d?C.white:C.text,cursor:"pointer",fontSize:10,whiteSpace:"nowrap",flexShrink:0,fontFamily:"inherit"}}>{d}</button>
                    ))}
                  </div>
                  <div style={{fontWeight:700,fontSize:12,color:C.text,marginBottom:8}}>🕐 {t.services.selectTime}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:7,marginBottom:16}}>
                    {TIMES.map(time=>(
                      <button key={time} onClick={()=>setSelTime(time)} style={{padding:"6px 12px",borderRadius:18,border:`1.5px solid ${selTime===time?svc.color:C.border}`,background:selTime===time?svc.color:"transparent",color:selTime===time?C.white:C.text,cursor:"pointer",fontSize:11,fontFamily:"inherit"}}>{time}</button>
                    ))}
                  </div>
                  {selDate&&selTime&&(
                    <>
                      <div style={{fontWeight:700,fontSize:12,color:C.text,marginBottom:8}}>💳 Peman</div>
                      <div style={{display:"flex",gap:8,marginBottom:14}}>
                        <button onClick={()=>setPayMode("now")} style={{flex:1,padding:"10px 0",borderRadius:10,border:payMode==="now"?"none":`1.5px solid ${svc.color}`,background:payMode==="now"?svc.color:"transparent",color:payMode==="now"?C.white:svc.color,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>{t.services.payNow}</button>
                        <button onClick={()=>setPayMode("later")} style={{flex:1,padding:"10px 0",borderRadius:10,border:payMode==="later"?"none":`1.5px solid ${C.muted}`,background:payMode==="later"?C.muted:"transparent",color:payMode==="later"?C.white:C.muted,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>{t.services.payLater}</button>
                      </div>
                      {payMode&&<button onClick={()=>setBooked(true)} style={{...s.btn(`linear-gradient(135deg,${svc.color},${C.gold})`),width:"100%",padding:"13px 0",fontSize:14}}>✓ {t.services.confirm} — {svc.price}</button>}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
        <div style={{...s.card,background:"rgba(255,255,255,0.03)",textAlign:"center"}}>
          <div style={{fontWeight:700,fontSize:14,color:C.gold,marginBottom:4}}>{t.services.orContact}</div>
          <div style={{fontSize:12,color:C.muted,marginBottom:14}}>{t.services.contactDesc}</div>
          {!contactMode?(
            <button onClick={()=>setContactMode(true)} style={s.btnOutline(C.primary)}>{t.services.send}</button>
          ):(
            <div style={{textAlign:"left"}}>
              <input value={cName} onChange={e=>setCName(e.target.value)} placeholder={t.services.namePh} style={s.input}/>
              <input value={cEmail} onChange={e=>setCEmail(e.target.value)} placeholder={t.services.emailPh} style={s.input}/>
              <textarea value={cMsg} onChange={e=>setCMsg(e.target.value)} placeholder={t.services.msgPh} rows={3} style={{...s.input,resize:"none"}}/>
              <button onClick={()=>setMsgSent(true)} style={{...s.btn(`linear-gradient(135deg,${C.primary},${C.gold})`),width:"100%",marginTop:4}}>{t.services.send}</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const BrandsPage = () => (
    <div>
      <h1 style={s.h1}>{t.brands.title}</h1>
      <p style={s.sub}>{t.brands.sub}</p>
      {BRANDS.map(br=>(
        <div key={br.id} style={{...s.goldCard,border:`1px solid ${br.color}44`,marginBottom:16}}>
          <div style={{display:"flex",gap:14,alignItems:"center",marginBottom:14}}>
            <div style={{width:56,height:56,borderRadius:16,background:br.gradient,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,flexShrink:0,boxShadow:`0 0 20px ${br.color}44`}}>{br.icon}</div>
            <div>
              <div style={{fontSize:20,fontWeight:700,color:br.color,letterSpacing:1}}>{br.name}</div>
              <div style={{fontSize:11,color:C.muted,marginTop:2}}>{br.tagline[lang]}</div>
              <div style={{fontSize:10,color:C.muted,fontStyle:"italic",marginTop:1}}>{br.sub[lang]}</div>
            </div>
          </div>
          <div style={s.goldDivider}/>
          {br.packages.length>0?(
            <>
              {br.packages.map(pkg=>(
                <div key={pkg.num} style={{background:"rgba(255,255,255,0.03)",border:`1px solid ${pkg.color}33`,borderRadius:12,padding:"14px 16px",marginBottom:10}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <div style={{width:24,height:24,borderRadius:"50%",background:`linear-gradient(135deg,${pkg.color},${pkg.color}AA)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#000",flexShrink:0}}>{pkg.num}</div>
                    <div style={{fontWeight:700,fontSize:14,color:pkg.color}}>{pkg.name}</div>
                  </div>
                  <div style={{fontSize:11,color:C.muted,marginBottom:10,marginLeft:32}}>{pkg.sub}</div>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                    <div style={s.priceBox(C.muted)}>
                      <div style={{fontSize:9,color:C.muted,letterSpacing:1,marginBottom:3,textTransform:"uppercase"}}>{t.brands.officialPrice}</div>
                      <div style={{fontSize:18,fontWeight:800,color:pkg.color}}>{pkg.official}</div>
                    </div>
                    <div style={s.priceBox(C.teal)}>
                      <div style={{fontSize:9,color:C.muted,letterSpacing:1,marginBottom:3,textTransform:"uppercase"}}>{t.brands.referralPrice}</div>
                      <div style={{fontSize:18,fontWeight:800,color:C.teal}}>{pkg.referral}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{marginTop:10,padding:"10px 14px",background:"rgba(212,175,55,0.08)",borderRadius:10,display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:16}}>🚚</span>
                <span style={{fontSize:11,color:C.gold}}>{t.brands.freeShip} • {br.note[lang]}</span>
              </div>
            </>
          ):(
            <div style={{textAlign:"center",padding:"20px 0"}}>
              <div style={{fontSize:40,marginBottom:10}}>🌿</div>
              <div style={{fontWeight:700,fontSize:15,color:br.color,marginBottom:6}}>{t.brands.comingSoon}</div>
              <div style={{fontSize:12,color:C.muted}}>{br.note[lang]}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const ChallengesPage = () => (
    <div>
      <h1 style={s.h1}>{t.challenges.title}</h1>
      <p style={s.sub}>{t.challenges.sub}</p>
      {Object.entries(CHALLENGES).map(([key,ch])=>{
        const isJoined=joined[key];
        const prog=progress[key];
        const pct=(prog/ch.total)*100;
        const isExp=expandedChallenge===key;
        return (
          <div key={key} style={{...s.goldCard,border:isJoined?`2px solid ${ch.color}`:`1px solid ${ch.color}33`}}>
            <div style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:12}}>
              <div style={{width:52,height:52,borderRadius:14,background:ch.gradient,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{ch.icon}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontWeight:700,fontSize:17,color:C.gold}}>{ch.title[lang]}</div>
                    <div style={{fontSize:12,color:C.muted,marginTop:2}}>{ch.sub[lang]}</div>
                  </div>
                  <span style={s.badge(ch.color)}>{ch.total} {t.challenges.days}</span>
                </div>
              </div>
            </div>
            <p style={{fontSize:12,color:C.muted,lineHeight:1.6,marginBottom:12}}>{ch.desc[lang]}</p>
            <div style={{marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:700,color:C.text,marginBottom:8,letterSpacing:0.5}}>{t.challenges.includes}</div>
              {ch.includes[lang].map((inc,i)=>(
                <div key={i} style={{display:"flex",gap:8,alignItems:"center",marginBottom:5}}>
                  <span style={{color:ch.color,fontSize:12}}>✦</span>
                  <span style={{fontSize:12,color:C.muted}}>{inc}</span>
                </div>
              ))}
            </div>
            {isJoined&&(
              <div style={{marginBottom:14}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                  <span style={{fontSize:11,color:C.muted,letterSpacing:0.5}}>PWOGRESYON</span>
                  <span style={{fontSize:11,fontWeight:700,color:ch.color}}>{prog}/{ch.total}</span>
                </div>
                <div style={{height:5,borderRadius:3,background:"rgba(255,255,255,0.1)"}}>
                  <div style={{height:"100%",width:pct+"%",borderRadius:3,background:ch.gradient,transition:"width .5s"}}/>
                </div>
              </div>
            )}
            <div onClick={()=>{setPage("challenges_music");setPlaylistTab(key);}} style={{background:ch.color+"10",border:`1px solid ${ch.color}22`,borderRadius:10,padding:"10px 14px",marginBottom:14,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontSize:11,fontWeight:700,color:ch.color}}>🎵 {t.challenges.playlist}</div>
                <div style={{fontSize:10,color:C.muted,marginTop:2}}>{ch.playlist.length} tracks</div>
              </div>
              <span style={s.badge(ch.color)}>{t.challenges.listen} →</span>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setJoined(j=>({...j,[key]:!j[key]}))} style={{...s.btn(ch.gradient),flex:1,padding:"12px 0"}}>{isJoined?t.challenges.cont:t.challenges.join}</button>
              <button onClick={()=>setExpandedChallenge(isExp?null:key)} style={{...s.btnOutline(ch.color),padding:"12px 14px"}}>{isExp?"▲":"▼"}</button>
            </div>
            {isExp&&(
              <div style={{marginTop:14,borderTop:`1px solid ${C.border}`,paddingTop:14}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {ch.days.map((title,i)=>{
                    const d=i+1; const done=d<=prog;
                    return (
                      <div key={d} style={{background:done?ch.color+"18":"rgba(255,255,255,0.03)",border:`1px solid ${done?ch.color+"44":C.border}`,borderRadius:10,padding:"10px 12px"}}>
                        <div style={{fontSize:9,fontWeight:700,color:ch.color,letterSpacing:1}}>{t.challenges.day} {d} {done?"✓":""}</div>
                        <div style={{fontSize:12,fontWeight:700,color:done?C.gold:C.muted,marginTop:3}}>{title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  const MusicPage = () => {
    const ch=CHALLENGES[playlistTab];
    const trackColors=[C.teal,C.gold,C.primary,C.violet,"#F87171",C.teal,C.gold,C.primary,C.violet,"#F87171",C.teal,C.gold,C.primary,C.violet,"#F87171",C.teal,C.gold,C.primary,C.violet,"#F87171",C.teal];
    return (
      <div>
        <h1 style={s.h1}>{t.music.title}</h1>
        <p style={s.sub}>{t.music.sub}</p>
        <div style={{display:"flex",gap:10,marginBottom:18}}>
          {["c7","c21"].map(key=>(
            <button key={key} onClick={()=>setPlaylistTab(key)} style={{flex:1,padding:"10px 0",borderRadius:10,border:playlistTab===key?"none":`1.5px solid ${CHALLENGES[key].color}`,background:playlistTab===key?CHALLENGES[key].gradient:"transparent",color:playlistTab===key?C.white:CHALLENGES[key].color,fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .2s",fontFamily:"inherit"}}>
              {CHALLENGES[key].icon} {key==="c7"?t.music.c7:t.music.c21}
            </button>
          ))}
        </div>
        <div style={{...s.goldCard,borderLeft:`3px solid ${ch.color}`,marginBottom:16}}>
          <div style={{fontWeight:700,fontSize:14,color:C.gold}}>{playlistTab==="c7"?t.music.c7:t.music.c21}</div>
          <div style={{fontSize:11,color:C.muted,marginTop:2}}>{ch.playlist.length} tracks • {ch.title[lang]}</div>
        </div>
        {ch.playlist.map((track,i)=>{
          const tid=playlistTab+i; const isP=playingId===tid; const col=trackColors[i];
          return (
            <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:12,padding:14,marginBottom:8}}>
              <div style={{width:40,height:40,borderRadius:10,background:col+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,flexShrink:0,fontWeight:700,color:col}}>{i+1}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:600,fontSize:13,color:C.text}}>{track}</div>
                <div style={{fontSize:10,color:C.muted,marginTop:2}}>{t.challenges.day} {i+1}{isP&&<span style={{color:col}}> • {t.music.playing}</span>}</div>
                {isP&&<div style={{display:"flex",gap:2,marginTop:5,alignItems:"flex-end"}}>{[8,14,10,18,12,16,9].map((h,b)=><div key={b} style={{width:3,height:h,borderRadius:2,background:col,animationName:`bounce${b%3}`,animationDuration:"0.7s",animationIterationCount:"infinite",animationDelay:b*0.1+"s"}}/>)}</div>}
              </div>
              <button onClick={()=>setPlayingId(isP?null:tid)} style={{width:36,height:36,borderRadius:"50%",background:isP?col:col+"22",border:"none",cursor:"pointer",fontSize:14,color:isP?C.white:col,flexShrink:0,transition:"all .2s"}}>{isP?"⏸":"▶"}</button>
            </div>
          );
        })}
      </div>
    );
  };

  const ShopPage = () => (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
        <h1 style={{...s.h1,marginBottom:0}}>{t.shop.title}</h1>
        <button onClick={()=>setCartOpen(!cartOpen)} style={{...s.btn(`linear-gradient(135deg,${C.primary},${C.gold})`),padding:"9px 14px"}}>
          🛒 {cartCount>0&&<span style={{background:C.white,color:C.primary,borderRadius:"50%",width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:900}}>{cartCount}</span>}
        </button>
      </div>
      <p style={s.sub}>{t.shop.sub}</p>
      {cartOpen&&(
        <div style={{...s.goldCard,marginBottom:14}}>
          <div style={{fontWeight:700,fontSize:14,color:C.gold,marginBottom:12}}>🛒 {t.shop.cart}</div>
          {cart.length===0?<div style={{color:C.muted,fontSize:12,textAlign:"center",padding:"10px 0"}}>{t.shop.empty}</div>:(
            <>
              {cart.map(item=>(
                <div key={item.id} style={{display:"flex",justifyContent:"space-between",marginBottom:8,fontSize:12}}>
                  <span>{item.icon} {item.name[lang]}</span>
                  <span style={{color:C.gold,fontWeight:700}}>{item.official} ×{item.qty}</span>
                </div>
              ))}
              <div style={s.goldDivider}/>
              <div style={{display:"flex",justifyContent:"space-between",fontWeight:800,marginBottom:12}}>
                <span>{t.shop.total}</span>
                <span style={{color:C.gold}}>${cartTotal.toFixed(2)}</span>
              </div>
              <button style={{...s.btn(`linear-gradient(135deg,${C.primary},${C.gold})`),width:"100%",padding:13}}>{t.shop.checkout}</button>
            </>
          )}
        </div>
      )}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
        {SHOP_ITEMS.map(item=>{
          const inCart=cart.find(c=>c.id===item.id);
          return (
            <div key={item.id} style={{...s.goldCard,padding:14,display:"flex",flexDirection:"column",position:"relative",marginBottom:0}}>
              <span style={{...s.badge(item.badge==="Ancestral"?C.primary:C.success),position:"absolute",top:10,right:10,fontSize:8}}>{item.badge}</span>
              {item.soon&&<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.6)",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:C.gold,fontWeight:700,zIndex:1}}>{t.shop.comingSoon}</div>}
              <div style={{fontSize:32,textAlign:"center",marginBottom:8}}>{item.icon}</div>
              <div style={{fontWeight:700,fontSize:13,color:C.gold,marginBottom:4}}>{item.name[lang]}</div>
              <div style={{fontSize:10,color:C.muted,lineHeight:1.4,flex:1,marginBottom:10}}>{item.desc[lang]}</div>
              {!item.soon&&(
                <>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,marginBottom:10}}>
                    <div style={{textAlign:"center",background:"rgba(255,255,255,0.03)",borderRadius:6,padding:"4px 0"}}>
                      <div style={{fontSize:8,color:C.muted,marginBottom:1}}>OFFICIAL</div>
                      <div style={{fontSize:13,fontWeight:800,color:C.primary}}>{item.official}</div>
                    </div>
                    <div style={{textAlign:"center",background:"rgba(78,205,196,0.08)",borderRadius:6,padding:"4px 0"}}>
                      <div style={{fontSize:8,color:C.muted,marginBottom:1}}>TIKTOK</div>
                      <div style={{fontSize:13,fontWeight:800,color:C.teal}}>{item.referral}</div>
                    </div>
                  </div>
                  <button onClick={()=>addCart(item)} style={{...s.btn(inCart?C.success:`linear-gradient(135deg,${C.primary},${C.gold})`),width:"100%",padding:"8px 0",fontSize:11}}>
                    {inCart?`${t.shop.added} ${inCart.qty}`:t.shop.add}
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const pages = {
    home:<HomePage/>, services:<ServicesPage/>, brands:<BrandsPage/>,
    challenges:<ChallengesPage/>, challenges_music:<MusicPage/>, shop:<ShopPage/>,
  };

  return (
    <div style={s.app}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{display:none;}
        button:active{opacity:0.85;}
        @keyframes bounce0{0%,100%{transform:scaleY(0.4)}50%{transform:scaleY(1)}}
        @keyframes bounce1{0%,100%{transform:scaleY(0.6)}50%{transform:scaleY(1.3)}}
        @keyframes bounce2{0%,100%{transform:scaleY(0.3)}50%{transform:scaleY(0.9)}}
      `}</style>
      <div style={s.header}>
        <div style={s.logoRow}>
          <div style={s.logoMark}>
            <img
              src="/file_00000000aedc71fb993e08263163f040.png"
              style={{width:"100%",height:"100%",objectFit:"contain"}}
            />
          </div>
          <div>
            <div style={s.logoName}>{t.appName}</div>
            <div style={s.logoSub}>{t.company}</div>
          </div>
        </div>
        <div style={s.langRow}>
          {["kr","fr","en","es"].map(l=>(
            <button key={l} style={s.langBtn(lang===l)} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <div style={s.page}>{pages[page]||pages.home}</div>
      <div style={s.nav}>
        {navItems.map(item=>(
          <button key={item.key} style={s.navBtn(page===item.key||(page==="challenges_music"&&item.key==="challenges"))} onClick={()=>setPage(item.key)}>
            <span style={s.navIcon}>{item.icon}</span>
            <span style={s.navLabel(page===item.key)}>{t.nav[item.key]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
