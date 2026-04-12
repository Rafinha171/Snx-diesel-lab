<!DOCTYPE html>  
  
<html lang="pt-BR">  
<head>  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<title>SNX Diesel Lab – Consultoria em Injeção Eletrônica Diesel</title>  
<link rel="preconnect" href="https://fonts.googleapis.com">  
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">  
<style>  
  :root {  
    --red: #CC2200;  
    --red-bright: #E53010;  
    --dark: #252525;  
    --darker: #1A1A1A;  
    --darkest: #111111;  
    --off-white: #F0EDE8;  
    --mid: #3A3A3A;  
    --border: rgba(204,34,0,0.3);  
  }  
  
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }  
  
html { scroll-behavior: smooth; }  
  
body {  
background: var(–dark);  
color: var(–off-white);  
font-family: ‘Barlow’, sans-serif;  
font-weight: 300;  
overflow-x: hidden;  
}  
  
/* ── NOISE OVERLAY ── */  
body::before {  
content: ‘’;  
position: fixed;  
inset: 0;  
background-image: url(“data:image/svg+xml,%3Csvg viewBox=‘0 0 200 200’ xmlns=‘http://www.w3.org/2000/svg’%3E%3Cfilter id=‘n’%3E%3CfeTurbulence type=‘fractalNoise’ baseFrequency=‘0.9’ numOctaves=‘4’ stitchTiles=‘stitch’/%3E%3C/filter%3E%3Crect width=‘100%25’ height=‘100%25’ filter=‘url(%23n)’ opacity=‘1’/%3E%3C/svg%3E”);  
opacity: 0.035;  
pointer-events: none;  
z-index: 9999;  
}  
  
/* ── NAV ── */  
nav {  
position: fixed;  
top: 0; left: 0; right: 0;  
z-index: 100;  
display: flex;  
align-items: center;  
justify-content: space-between;  
padding: 0 4rem;  
height: 72px;  
background: rgba(26,26,26,0.92);  
backdrop-filter: blur(12px);  
border-bottom: 1px solid var(–border);  
}  
  
.nav-logo {  
display: flex;  
align-items: center;  
gap: 14px;  
text-decoration: none;  
}  
  
/* SVG injector icon */  
.logo-icon {  
width: 38px;  
height: 48px;  
flex-shrink: 0;  
}  
  
.nav-logo-text {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 1.5rem;  
color: var(–off-white);  
letter-spacing: 0.04em;  
line-height: 1;  
}  
.nav-logo-text span { color: var(–red); }  
  
.nav-links {  
display: flex;  
gap: 2.5rem;  
list-style: none;  
}  
  
.nav-links a {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-size: 0.95rem;  
font-weight: 600;  
letter-spacing: 0.1em;  
text-transform: uppercase;  
color: rgba(240,237,232,0.6);  
text-decoration: none;  
transition: color 0.2s;  
}  
.nav-links a:hover { color: var(–red-bright); }  
  
/* ── HERO ── */  
.hero {  
min-height: 100vh;  
display: grid;  
grid-template-columns: 1fr 1fr;  
align-items: center;  
padding: 72px 0 0;  
position: relative;  
overflow: hidden;  
}  
  
.hero-bg-grid {  
position: absolute;  
inset: 0;  
background-image:  
linear-gradient(rgba(204,34,0,0.06) 1px, transparent 1px),  
linear-gradient(90deg, rgba(204,34,0,0.06) 1px, transparent 1px);  
background-size: 60px 60px;  
mask-image: radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 80%);  
}  
  
.hero-accent {  
position: absolute;  
right: -100px;  
top: 50%;  
transform: translateY(-50%);  
width: 600px;  
height: 600px;  
background: radial-gradient(circle, rgba(204,34,0,0.12) 0%, transparent 70%);  
pointer-events: none;  
}  
  
.hero-content {  
padding: 0 4rem 0 4rem;  
position: relative;  
z-index: 2;  
animation: fadeUp 0.8s ease both;  
}  
  
.hero-badge {  
display: inline-flex;  
align-items: center;  
gap: 8px;  
border: 1px solid var(–red);  
padding: 5px 14px;  
font-family: ‘Barlow Condensed’, sans-serif;  
font-size: 0.75rem;  
font-weight: 600;  
letter-spacing: 0.2em;  
text-transform: uppercase;  
color: var(–red);  
margin-bottom: 1.8rem;  
}  
.hero-badge::before {  
content: ‘’;  
width: 6px; height: 6px;  
background: var(–red);  
border-radius: 50%;  
animation: pulse 1.5s infinite;  
}  
  
@keyframes pulse {  
0%,100% { opacity:1; transform: scale(1); }  
50% { opacity:0.4; transform: scale(1.4); }  
}  
  
.hero h1 {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: clamp(3rem, 6vw, 5.5rem);  
line-height: 1.12;  
text-transform: uppercase;  
letter-spacing: -0.01em;  
margin-bottom: 1.5rem;  
}  
  
.hero h1 .line-accent {  
color: var(–red);  
display: block;  
-webkit-text-stroke: 1px var(–red);  
}  
  
.hero p {  
font-size: 1.05rem;  
line-height: 1.7;  
color: rgba(240,237,232,0.7);  
max-width: 440px;  
margin-bottom: 2.5rem;  
}  
  
.btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }  
  
.btn {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 700;  
font-size: 0.95rem;  
letter-spacing: 0.1em;  
text-transform: uppercase;  
padding: 14px 32px;  
border: none;  
cursor: pointer;  
text-decoration: none;  
display: inline-flex;  
align-items: center;  
gap: 8px;  
transition: all 0.2s;  
}  
  
.btn-primary {  
background: var(–red);  
color: var(–off-white);  
clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);  
}  
.btn-primary:hover { background: var(–red-bright); transform: translateY(-2px); }  
  
.btn-outline {  
background: transparent;  
color: var(–off-white);  
border: 1px solid rgba(240,237,232,0.3);  
clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);  
}  
.btn-outline:hover { border-color: var(–off-white); transform: translateY(-2px); }  
  
/* Hero visual side */  
.hero-visual {  
display: flex;  
justify-content: center;  
align-items: center;  
position: relative;  
z-index: 2;  
animation: fadeUp 1s 0.2s ease both;  
}  
  
.hero-injector-wrap {  
position: relative;  
width: 320px;  
height: 420px;  
}  
  
.hero-injector-wrap svg {  
width: 100%;  
height: 100%;  
filter: drop-shadow(0 0 40px rgba(204,34,0,0.35));  
animation: floatAnim 4s ease-in-out infinite;  
}  
  
@keyframes floatAnim {  
0%,100% { transform: translateY(0); }  
50% { transform: translateY(-14px); }  
}  
  
.ring {  
position: absolute;  
border-radius: 50%;  
border: 1px solid rgba(204,34,0,0.2);  
top: 50%; left: 50%;  
transform: translate(-50%,-50%);  
animation: expandRing 3s ease-out infinite;  
}  
.ring:nth-child(1) { width: 340px; height: 340px; animation-delay: 0s; }  
.ring:nth-child(2) { width: 420px; height: 420px; animation-delay: 1s; }  
.ring:nth-child(3) { width: 500px; height: 500px; animation-delay: 2s; }  
  
@keyframes expandRing {  
0% { opacity: 0.6; }  
100% { opacity: 0; transform: translate(-50%,-50%) scale(1.05); }  
}  
  
/* ── STATS BAR ── */  
.stats {  
background: var(–darkest);  
border-top: 1px solid var(–border);  
border-bottom: 1px solid var(–border);  
display: grid;  
grid-template-columns: repeat(4, 1fr);  
}  
  
.stat-item {  
padding: 2.5rem 2rem;  
border-right: 1px solid var(–border);  
text-align: center;  
position: relative;  
}  
.stat-item:last-child { border-right: none; }  
  
.stat-num {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 3rem;  
color: var(–red);  
line-height: 1;  
display: block;  
}  
  
.stat-label {  
font-size: 0.8rem;  
letter-spacing: 0.12em;  
text-transform: uppercase;  
color: rgba(240,237,232,0.5);  
margin-top: 6px;  
display: block;  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 600;  
}  
  
/* ── SERVICES ── */  
section { padding: 7rem 4rem; }  
  
.section-label {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-size: 0.75rem;  
font-weight: 600;  
letter-spacing: 0.25em;  
text-transform: uppercase;  
color: var(–red);  
margin-bottom: 1rem;  
display: flex;  
align-items: center;  
gap: 12px;  
}  
.section-label::after {  
content: ‘’;  
height: 1px;  
width: 40px;  
background: var(–red);  
display: block;  
}  
  
.section-title {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: clamp(2.2rem, 4vw, 3.5rem);  
text-transform: uppercase;  
line-height: 1;  
margin-bottom: 1rem;  
}  
  
.section-sub {  
color: rgba(240,237,232,0.55);  
font-size: 1rem;  
line-height: 1.7;  
max-width: 480px;  
margin-bottom: 4rem;  
}  
  
.services-grid {  
display: grid;  
grid-template-columns: repeat(3, 1fr);  
gap: 1px;  
background: var(–border);  
border: 1px solid var(–border);  
}  
  
.service-card {  
background: var(–darker);  
padding: 2.5rem 2rem;  
position: relative;  
overflow: hidden;  
transition: background 0.3s;  
}  
  
.service-card:hover { background: var(–mid); }  
  
.service-card::before {  
content: ‘’;  
position: absolute;  
top: 0; left: 0;  
width: 3px;  
height: 0;  
background: var(–red);  
transition: height 0.3s ease;  
}  
.service-card:hover::before { height: 100%; }  
  
.service-icon {  
width: 48px;  
height: 48px;  
margin-bottom: 1.5rem;  
color: var(–red);  
}  
  
.service-num {  
position: absolute;  
top: 1.5rem; right: 1.5rem;  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 3rem;  
color: rgba(204,34,0,0.08);  
line-height: 1;  
}  
  
.service-card h3 {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 700;  
font-size: 1.25rem;  
letter-spacing: 0.05em;  
text-transform: uppercase;  
margin-bottom: 0.75rem;  
}  
  
.service-card p {  
font-size: 0.9rem;  
line-height: 1.65;  
color: rgba(240,237,232,0.6);  
}  
  
/* ── WHY US ── */  
.why {  
background: var(–darkest);  
display: grid;  
grid-template-columns: 1fr 1fr;  
gap: 6rem;  
align-items: center;  
}  
  
.why-list { list-style: none; display: flex; flex-direction: column; gap: 1.5rem; }  
  
.why-item {  
display: flex;  
gap: 1.2rem;  
align-items: flex-start;  
padding: 1.5rem;  
border: 1px solid transparent;  
transition: border-color 0.3s, background 0.3s;  
}  
.why-item:hover {  
border-color: var(–border);  
background: rgba(204,34,0,0.04);  
}  
  
.why-item-icon {  
width: 40px;  
height: 40px;  
background: var(–red);  
clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%);  
display: flex;  
align-items: center;  
justify-content: center;  
flex-shrink: 0;  
color: white;  
}  
  
.why-item-icon svg { width: 20px; height: 20px; }  
  
.why-item-text h4 {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 700;  
font-size: 1.05rem;  
letter-spacing: 0.06em;  
text-transform: uppercase;  
margin-bottom: 4px;  
}  
  
.why-item-text p {  
font-size: 0.88rem;  
color: rgba(240,237,232,0.55);  
line-height: 1.6;  
}  
  
.why-visual {  
position: relative;  
height: 420px;  
display: flex;  
align-items: center;  
justify-content: center;  
}  
  
.why-diagram {  
position: relative;  
width: 280px;  
height: 280px;  
}  
  
.why-diagram-circle {  
position: absolute;  
inset: 0;  
border-radius: 50%;  
border: 1px solid var(–border);  
animation: spinSlow 20s linear infinite;  
}  
  
.why-diagram-circle::before {  
content: ‘’;  
position: absolute;  
top: -4px; left: 50%;  
transform: translateX(-50%);  
width: 8px; height: 8px;  
background: var(–red);  
border-radius: 50%;  
}  
  
@keyframes spinSlow { to { transform: rotate(360deg); } }  
  
.why-diagram-inner {  
position: absolute;  
inset: 30px;  
border-radius: 50%;  
border: 1px dashed rgba(204,34,0,0.2);  
animation: spinSlow 12s linear infinite reverse;  
}  
  
.why-diagram-center {  
position: absolute;  
inset: 0;  
display: flex;  
flex-direction: column;  
align-items: center;  
justify-content: center;  
text-align: center;  
}  
  
.why-diagram-center svg {  
width: 60px;  
height: 60px;  
color: var(–red);  
margin-bottom: 10px;  
}  
  
.why-diagram-center span {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 0.85rem;  
letter-spacing: 0.15em;  
text-transform: uppercase;  
color: rgba(240,237,232,0.7);  
}  
  
/* ── PROCESS ── */  
.process { max-width: 1000px; margin: 0 auto; }  
  
.process-steps {  
display: grid;  
grid-template-columns: repeat(4, 1fr);  
gap: 0;  
position: relative;  
margin-top: 4rem;  
}  
  
.process-steps::before {  
content: ‘’;  
position: absolute;  
top: 28px; left: 10%; right: 10%;  
height: 1px;  
background: var(–border);  
}  
  
.process-step {  
text-align: center;  
padding: 0 1rem;  
position: relative;  
}  
  
.step-num {  
width: 56px; height: 56px;  
background: var(–darkest);  
border: 1px solid var(–red);  
display: flex;  
align-items: center;  
justify-content: center;  
margin: 0 auto 1.5rem;  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 1.4rem;  
color: var(–red);  
clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%);  
position: relative;  
z-index: 1;  
}  
  
.process-step h4 {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 700;  
font-size: 1rem;  
letter-spacing: 0.08em;  
text-transform: uppercase;  
margin-bottom: 0.5rem;  
}  
  
.process-step p {  
font-size: 0.85rem;  
color: rgba(240,237,232,0.5);  
line-height: 1.6;  
}  
  
/* ── CTA ── */  
.cta-section {  
background: var(–red);  
text-align: center;  
position: relative;  
overflow: hidden;  
padding: 6rem 4rem;  
}  
  
.cta-section::before {  
content: ‘SNX DIESEL LAB’;  
position: absolute;  
top: 50%; left: 50%;  
transform: translate(-50%,-50%);  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 18rem;  
color: rgba(0,0,0,0.08);  
white-space: nowrap;  
pointer-events: none;  
letter-spacing: -0.02em;  
}  
  
.cta-section h2 {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: clamp(2.5rem, 5vw, 4.5rem);  
text-transform: uppercase;  
line-height: 0.95;  
color: white;  
margin-bottom: 1.2rem;  
position: relative;  
z-index: 1;  
}  
  
.cta-section p {  
font-size: 1.05rem;  
color: rgba(255,255,255,0.8);  
margin-bottom: 2.5rem;  
max-width: 500px;  
margin-left: auto;  
margin-right: auto;  
position: relative;  
z-index: 1;  
}  
  
.btn-white {  
background: white;  
color: var(–red);  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 700;  
font-size: 1rem;  
letter-spacing: 0.1em;  
text-transform: uppercase;  
padding: 16px 36px;  
border: none;  
cursor: pointer;  
text-decoration: none;  
display: inline-flex;  
align-items: center;  
gap: 10px;  
clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);  
transition: transform 0.2s, box-shadow 0.2s;  
position: relative;  
z-index: 1;  
}  
.btn-white:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }  
  
/* ── FOOTER ── */  
footer {  
background: var(–darkest);  
padding: 3rem 4rem;  
border-top: 1px solid var(–border);  
display: flex;  
align-items: center;  
justify-content: space-between;  
}  
  
.footer-logo {  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 900;  
font-size: 1.3rem;  
letter-spacing: 0.06em;  
color: var(–off-white);  
}  
.footer-logo span { color: var(–red); }  
  
footer p {  
font-size: 0.8rem;  
color: rgba(240,237,232,0.35);  
letter-spacing: 0.05em;  
}  
  
/* ── WHATSAPP FLOAT ── */  
.whatsapp-float {  
position: fixed;  
bottom: 2rem;  
right: 2rem;  
z-index: 200;  
display: flex;  
align-items: center;  
gap: 12px;  
text-decoration: none;  
animation: fadeUp 1s 1s ease both;  
}  
  
.whatsapp-label {  
background: var(–darkest);  
color: var(–off-white);  
font-family: ‘Barlow Condensed’, sans-serif;  
font-weight: 600;  
font-size: 0.85rem;  
letter-spacing: 0.08em;  
text-transform: uppercase;  
padding: 8px 16px;  
border: 1px solid rgba(37,211,102,0.3);  
white-space: nowrap;  
opacity: 0;  
transform: translateX(10px);  
transition: all 0.3s;  
pointer-events: none;  
}  
  
.whatsapp-float:hover .whatsapp-label {  
opacity: 1;  
transform: translateX(0);  
}  
  
.whatsapp-btn {  
width: 60px; height: 60px;  
background: #25D366;  
border-radius: 50%;  
display: flex;  
align-items: center;  
justify-content: center;  
box-shadow: 0 4px 20px rgba(37,211,102,0.4);  
transition: transform 0.2s, box-shadow 0.2s;  
flex-shrink: 0;  
}  
.whatsapp-btn:hover { transform: scale(1.1); box-shadow: 0 6px 30px rgba(37,211,102,0.6); }  
.whatsapp-btn svg { width: 30px; height: 30px; fill: white; }  
  
/* Ping animation */  
.whatsapp-btn::before {  
content: ‘’;  
position: absolute;  
width: 60px; height: 60px;  
border-radius: 50%;  
border: 2px solid #25D366;  
animation: waPing 2s ease-out infinite;  
}  
@keyframes waPing {  
0% { transform: scale(1); opacity: 0.8; }  
100% { transform: scale(1.6); opacity: 0; }  
}  
  
@keyframes fadeUp {  
from { opacity: 0; transform: translateY(20px); }  
to { opacity: 1; transform: translateY(0); }  
}  
  
/* ── RESPONSIVE ── */  
@media (max-width: 900px) {  
nav { padding: 0 1.5rem; }  
.nav-links { display: none; }  
.hero { grid-template-columns: 1fr; padding-top: 100px; text-align: center; }  
.hero-content { padding: 2rem 1.5rem; }  
.hero p { margin-left: auto; margin-right: auto; }  
.btn-group { justify-content: center; }  
.hero-visual { margin-bottom: 3rem; order: -1; }  
.hero-injector-wrap { width: 200px; height: 260px; }  
.stats { grid-template-columns: repeat(2, 1fr); }  
section { padding: 5rem 1.5rem; }  
.services-grid { grid-template-columns: 1fr; }  
.why { grid-template-columns: 1fr; gap: 3rem; }  
.why-visual { height: 260px; }  
.process-steps { grid-template-columns: repeat(2, 1fr); gap: 3rem; }  
.process-steps::before { display: none; }  
footer { flex-direction: column; gap: 1rem; text-align: center; }  
}  
</style>  
  
</head>  
<body>  
  
<!-- NAV -->  
  
<nav>  
  <a href="#" class="nav-logo">  
    <div class="nav-logo-text">SNX DIESEL<span>LAB</span></div>  
  </a>  
  <ul class="nav-links">  
    <li><a href="#servicos">Serviços</a></li>  
    <li><a href="#diferenciais">Diferenciais</a></li>  
    <li><a href="#processo">Processo</a></li>  
    <li><a href="#contato">Contato</a></li>  
  </ul>  
</nav>  
  
<!-- HERO -->  
  
<section class="hero">  
  <div class="hero-bg-grid"></div>  
  <div class="hero-accent"></div>  
  
  <div class="hero-content">  
    <div class="hero-badge">Especialista em Diesel</div>  
    <h1>  
      INJEÇÃO  
      <span class="line-accent">ELETRÔNICA</span>  
      DIESEL  
    </h1>  
    <p>Consultoria técnica de alta precisão para sistemas de injeção eletrônica diesel. Diagnóstico avançado, calibração e reparo para máxima performance do seu motor.</p>  
    <div class="btn-group">  
      <a href="https://wa.me/5567996342998" class="btn btn-primary">  
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A12 12 0 0 0 2.33 18.9L.5 24l5.25-1.38A12 12 0 1 0 20.52 3.48zm-8.53 18a10 10 0 0 1-5.1-1.39l-.37-.22-3.8 1 1-3.7-.24-.38A10 10 0 1 1 12 21.48z"/><path d="M16.88 14.6c-.26-.13-1.53-.75-1.76-.84s-.41-.13-.58.13-.67.84-.82 1-.3.2-.56.07a7 7 0 0 1-2.06-1.27 7.7 7.7 0 0 1-1.42-1.77c-.15-.26 0-.4.11-.53s.26-.3.39-.46a1.8 1.8 0 0 0 .26-.43.48.48 0 0 0 0-.46c-.07-.13-.58-1.4-.8-1.92s-.42-.44-.58-.45h-.49a.94.94 0 0 0-.68.32A2.87 2.87 0 0 0 8 10.5a5 5 0 0 0 1.05 2.65 11.45 11.45 0 0 0 4.38 3.87 14.67 14.67 0 0 0 1.46.54 3.52 3.52 0 0 0 1.61.1 2.64 2.64 0 0 0 1.73-1.22 2.14 2.14 0 0 0 .15-1.22c-.07-.11-.24-.18-.5-.3z"/></svg>  
        Falar no WhatsApp  
      </a>  
      <a href="#servicos" class="btn btn-outline">Ver Serviços</a>  
    </div>  
  </div>  
  
  <div class="hero-visual">  
    <div class="ring"></div>  
    <div class="ring"></div>  
    <div class="ring"></div>  
    <div class="hero-injector-wrap">  
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 364" style="width:100%;height:100%;filter:drop-shadow(0 0 40px rgba(204,34,0,0.35));animation:floatAnim 4s ease-in-out infinite;">  
 <g fill="#CC2200">  
  <path d="M158.08 351.35 c-1.29 -1.83 -2.59 -3.76 -2.84 -4.23 -0.41 -0.79 -0.47 -4.01 -0.47 -21.73 0 -18.98 0.03 -20.88 0.54 -21.26 0.66 -0.57 11.40 -0.82 12.38 -0.28 0.66 0.35 0.66 0.47 0.66 21.57 l0 21.23 -2.75 4.01 c-2.68 3.98 -2.78 4.04 -3.92 4.04 -1.14 0 -1.26 -0.13 -3.60 -3.35z"/>  
  <path d="M141.44 235.05 c-1.90 -1.17 -1.86 -0.54 -1.77 -23.91 l0.09 -21.38 1.04 -0.92 1.01 -0.92 8.46 0 c4.64 0 13.20 -0.09 19.05 -0.22 l10.61 -0.19 1.23 1.14 1.23 1.11 0 21.86 0 21.86 -1.17 1.07 -1.20 1.07 -18.86 0 c-17.21 -0.03 -18.95 -0.06 -19.74 -0.57z m38.63 -1.86 c0.38 -0.41 0.44 -4.20 0.44 -21.64 0 -20.56 -0.03 -21.16 -0.60 -21.60 -0.92 -0.66 -36.73 -0.66 -37.65 0 -0.57 0.44 -0.60 1.04 -0.60 21.67 0 20.62 0.03 21.23 0.60 21.67 0.54 0.38 3.63 0.44 19.01 0.44 16.71 0 18.41 -0.06 18.79 -0.54z"/>  
  <path d="M134.65 177.03 c-2.12 -0.92 -1.99 1.07 -1.99 -34.65 0 -30.13 0.03 -32.37 0.57 -33.42 1.14 -2.27 -0.22 -2.18 28.30 -2.21 l25.52 0 1.04 1.04 c0.88 0.88 1.07 1.33 1.23 3.06 0.09 1.14 0.16 16.01 0.13 33.07 -0.09 30.92 -0.09 31.02 -0.76 31.90 -0.35 0.47 -1.01 1.07 -1.42 1.26 -1.17 0.63 -51.20 0.57 -52.62 -0.06z m52.08 -1.96 c0.54 -0.47 0.57 -1.93 0.57 -32.97 0 -29.09 -0.06 -32.50 -0.51 -32.94 -0.44 -0.44 -3.19 -0.51 -25.55 -0.51 -24.19 0 -25.08 0.03 -25.77 0.60 l-0.76 0.60 -0.09 31.55 c-0.03 17.34 0 32 0.09 32.56 0.13 0.66 0.44 1.14 0.88 1.33 0.38 0.16 11.91 0.28 25.62 0.28 22.77 0.03 24.98 0 25.52 -0.51z"/>  
  <path d="M111.05 152.97 c-5.37 -5.37 -10.23 -10.20 -10.74 -10.80 l-0.98 -1.07 0 -13.83 0 -13.87 0.85 -0.82 0.82 -0.85 10.49 -0.16 c8.43 -0.13 10.61 -0.06 11.24 0.28 1.77 0.92 1.71 0.19 1.71 25.80 l0 23.66 -0.73 0.66 c-0.44 0.44 -1.14 0.69 -1.80 0.69 -0.95 0 -1.93 -0.85 -10.87 -9.70z m11.43 -15.44 c0.06 -19.55 0 -23.15 -0.38 -23.69 -0.44 -0.57 -0.95 -0.60 -9.57 -0.69 -4.99 -0.06 -9.41 0 -9.79 0.09 -1.71 0.41 -1.67 0.09 -1.67 14.06 l0 12.89 10.36 10.30 c5.69 5.65 10.49 10.23 10.64 10.17 0.22 -0.06 0.35 -8.12 0.41 -23.12z"/>  
  <path d="M131.42 95.89 c-1.58 -0.88 -1.58 -0.92 -1.61 -16.39 0 -15.95 0 -15.95 1.93 -16.61 0.73 -0.25 9.48 -0.35 29.56 -0.35 30.67 0 29.88 -0.03 30.73 1.55 0.19 0.41 0.32 5.84 0.32 15.35 l0 14.75 -1.07 1.07 -1.07 1.07 -28.99 0 c-23.50 -0.03 -29.18 -0.09 -29.78 -0.44z m58.46 -1.99 c0.54 -0.47 0.57 -1.36 0.57 -14.50 0 -12.29 -0.06 -14.02 -0.51 -14.47 -0.44 -0.44 -3.47 -0.51 -28.87 -0.51 -25.39 0 -28.43 0.06 -28.87 0.51 -0.44 0.44 -0.51 2.21 -0.51 14.66 0 13.17 0.03 14.21 0.57 14.50 0.35 0.22 10.17 0.32 28.77 0.35 25.87 0 28.30 -0.03 28.84 -0.54z"/>  
  <path d="M130.98 52.30 c-0.44 -0.41 -0.88 -1.23 -1.01 -1.80 -0.09 -0.60 -0.16 -6.22 -0.09 -12.51 l0.09 -11.47 0.88 -0.85 0.85 -0.88 29.37 -0.09 29.34 -0.06 1.04 0.92 1.04 0.92 0 12.54 0 12.54 -0.88 0.76 c-0.85 0.73 -1.04 0.76 -6.06 0.76 -5.02 0 -5.21 -0.03 -6.06 -0.76 l-0.88 -0.76 -0.09 -6.10 c-0.06 -4.30 -0.22 -6.19 -0.47 -6.35 -0.22 -0.13 -7.80 -0.25 -16.87 -0.25 -15.98 0 -16.52 0.03 -16.83 0.60 -0.19 0.38 -0.32 3 -0.32 6.35 0 7.68 0.38 7.26 -6.89 7.26 -5.18 0 -5.37 -0.03 -6.16 -0.76z m10.74 -1.39 c0.25 -0.16 0.41 -2.05 0.47 -6.29 0.09 -5.84 0.13 -6.10 0.82 -6.79 l0.73 -0.73 16.96 -0.09 c9.32 -0.03 17.28 0 17.66 0.09 0.38 0.09 1.01 0.47 1.36 0.85 0.57 0.63 0.63 1.11 0.63 6.13 0 3 0.13 5.81 0.32 6.25 l0.32 0.82 4.55 0 c2.53 0 4.64 -0.09 4.74 -0.25 0.06 -0.13 0.19 -5.53 0.22 -12 0.09 -10.08 0.03 -11.84 -0.35 -12.07 -0.28 -0.19 -12.07 -0.32 -28.93 -0.32 -26.12 0 -28.52 0.03 -28.90 0.54 -0.69 0.79 -0.63 23.37 0.03 23.78 0.57 0.35 8.84 0.41 9.38 0.06z"/>  
  <path d="M187.74 343.77 c-1.58 -0.76 -1.80 -1.52 -1.83 -6.41 l-0.03 -4.42 1.07 -1.11 1.11 -1.14 28.81 0 c28.65 0 28.77 0 29.63 -0.66 l0.82 -0.63 0 -33.80 c0 -33.35 0 -33.76 -0.63 -34.40 -0.60 -0.60 -1.04 -0.63 -7.17 -0.63 -6 0 -6.66 -0.06 -7.61 -0.63 -0.57 -0.35 -1.23 -1.11 -1.48 -1.64 -0.44 -1.01 -2.87 -9.29 -7.39 -25.20 -1.99 -7.07 -2.15 -7.42 -2.87 -7.42 -0.73 0 -0.85 0.28 -2.27 5.53 -2.34 8.46 -5.02 18.45 -8.94 32.94 -2.12 7.99 -3.79 13.52 -4.17 14.02 -0.32 0.47 -1.01 1.14 -1.48 1.48 -0.82 0.63 -1.33 0.66 -12.29 0.76 -9.98 0.06 -11.47 0.16 -11.97 0.60 -0.51 0.44 -0.57 1.07 -0.57 4.83 0 3.98 -0.06 4.42 -0.69 5.21 -1.33 1.71 -1.61 1.74 -16.30 1.74 -7.45 0 -13.99 -0.09 -14.50 -0.19 -0.54 -0.09 -1.36 -0.51 -1.86 -0.92 l-0.92 -0.73 -0.16 -4.77 c-0.09 -3.28 -0.28 -4.86 -0.57 -5.15 -0.32 -0.32 -3.41 -0.44 -13.74 -0.57 -12.22 -0.16 -13.39 -0.22 -14.18 -0.73 -1.29 -0.88 -1.64 -1.58 -4.33 -8.97 -1.39 -3.79 -2.75 -7.42 -3 -8.05 -0.95 -2.24 -0.22 -2.15 -17.02 -2.15 -15.07 0 -16.05 0.06 -16.71 1.07 -0.13 0.19 -0.25 15.44 -0.25 33.92 0 33.13 0 33.54 0.63 34.17 0.63 0.63 1.04 0.63 29.69 0.63 32.25 0 30.54 -0.13 31.46 2.05 0.63 1.55 0.60 8.37 -0.03 9.63 -1.04 2.02 1.67 1.90 -37.52 1.90 -32.72 0 -35.72 -0.03 -36.54 -0.54 -0.51 -0.28 -1.07 -0.88 -1.33 -1.29 -0.35 -0.66 -0.41 -24.60 -0.41 -138.47 l0 -137.71 1.04 -0.92 1.01 -0.92 26.40 0 26.37 0 0.76 0.79 c0.76 0.76 0.79 0.88 0.79 5.69 0 2.78 -0.13 5.21 -0.32 5.56 -0.85 1.55 -0.82 1.55 -21.60 1.55 -17.21 0 -19.46 0.06 -19.90 0.51 -0.44 0.44 -0.51 8.50 -0.51 84.02 0 83.10 0 83.51 0.63 84.14 0.63 0.63 1.04 0.63 19.49 0.63 18.16 0 18.92 0.03 19.90 0.63 1.33 0.79 1.61 1.39 4.36 8.97 3.25 8.97 3.95 10.58 4.67 11.09 0.57 0.38 2.31 0.47 10.20 0.47 8.46 0 9.57 -0.06 9.95 -0.54 0.35 -0.38 0.47 -2.62 0.60 -10.23 l0.16 -9.76 0.88 -0.85 0.85 -0.88 15 -0.09 c10.42 -0.06 15.22 0.03 15.67 0.25 0.35 0.19 0.92 0.82 1.23 1.36 0.60 0.95 0.63 1.67 0.63 10.36 0 8.65 0.03 9.38 0.57 9.85 0.51 0.47 1.55 0.54 7.86 0.54 6.47 0 7.36 -0.06 7.96 -0.57 0.79 -0.60 0.66 -0.22 5.40 -17.91 1.77 -6.60 4.86 -18.03 6.85 -25.43 1.99 -7.39 4.45 -16.55 5.46 -20.37 3.44 -13.01 3.70 -13.80 4.71 -14.78 1.14 -1.17 3.41 -1.52 4.61 -0.73 1.17 0.76 1.45 1.48 4.20 10.93 2.56 8.69 3.92 13.33 10.01 34.59 1.80 6.25 3.38 11.62 3.51 11.94 0.32 0.85 1.45 1.17 4.20 1.17 1.99 0 2.56 -0.13 2.97 -0.57 0.51 -0.54 0.54 -6.82 0.54 -84.17 0 -75.55 -0.06 -83.61 -0.51 -84.05 -0.44 -0.44 -2.59 -0.51 -18.95 -0.51 -20.12 0 -19.99 0 -20.66 -1.77 -0.19 -0.44 -0.32 -2.84 -0.32 -5.34 0 -4.42 0.03 -4.55 0.82 -5.50 l0.82 -0.98 25.43 0 25.43 0 0.88 0.88 c0.73 0.73 0.92 1.26 1.07 2.94 0.13 1.11 0.19 63.14 0.13 137.84 l-0.09 135.81 -0.73 1.01 c-0.44 0.63 -1.17 1.14 -1.90 1.36 -0.76 0.19 -12.95 0.32 -35.60 0.32 -30.32 0 -34.55 -0.06 -35.41 -0.51z m71.03 -1.99 c0.51 -0.38 0.54 -10.39 0.54 -137.55 0 -85.88 -0.13 -137.30 -0.32 -137.58 -0.25 -0.41 -3.28 -0.47 -24.86 -0.35 -15.98 0.06 -24.70 0.22 -24.95 0.41 -0.51 0.41 -0.57 7.74 -0.09 8.46 0.25 0.41 2.87 0.51 19.27 0.63 l19.01 0.16 0.92 1.04 0.92 1.01 0 84.05 c0 92.39 0.16 85.28 -1.90 86.35 -1.14 0.57 -6.51 0.66 -7.74 0.09 -0.44 -0.19 -1.07 -0.79 -1.39 -1.33 -0.35 -0.54 -1.74 -4.96 -3.16 -9.82 -12.35 -43.02 -13.46 -46.65 -14.24 -47.28 -0.92 -0.73 -1.14 -0.73 -1.99 0.16 -0.54 0.51 -1.33 3 -3.19 9.85 -1.36 5.05 -3.98 14.84 -5.87 21.79 -1.86 6.95 -5.21 19.39 -7.42 27.64 -2.21 8.24 -4.23 15.76 -4.49 16.68 -0.25 0.95 -0.88 2.15 -1.36 2.68 l-0.88 1.01 -8.18 0.09 c-7.17 0.09 -8.28 0.03 -9.16 -0.44 -0.54 -0.28 -1.11 -0.76 -1.26 -1.04 -0.13 -0.28 -0.32 -4.90 -0.41 -10.23 -0.16 -9.19 -0.19 -9.76 -0.76 -10.20 -0.51 -0.38 -3.03 -0.44 -14.62 -0.44 -13.58 0 -14.02 0.03 -14.62 0.63 -0.60 0.60 -0.63 1.04 -0.63 9.95 0 10.14 -0.09 10.71 -1.74 11.47 -0.57 0.28 -3.73 0.38 -10.83 0.38 -9.38 0 -10.08 -0.03 -11.02 -0.63 -1.29 -0.79 -1.77 -1.74 -4.30 -8.69 -3.38 -9.32 -4.04 -10.87 -4.74 -11.37 -0.57 -0.41 -3.28 -0.47 -19.27 -0.47 -20.69 0 -20.37 0.03 -21.23 -2.02 -0.41 -0.98 -0.47 -12.07 -0.47 -84.96 0 -81.02 0.03 -83.86 0.57 -84.55 1.23 -1.48 2.12 -1.55 22.01 -1.55 11.15 0 18.82 -0.13 19.11 -0.32 0.60 -0.38 0.88 -7.77 0.32 -8.81 l-0.35 -0.66 -25.52 0 c-23.37 0 -25.58 0.03 -25.96 0.54 -0.38 0.41 -0.44 21.57 -0.47 135.40 -0.03 74.19 0.03 135.94 0.16 137.20 0.13 1.52 0.35 2.40 0.66 2.59 0.76 0.47 70.53 0.41 71 -0.06 0.25 -0.25 0.38 -1.74 0.38 -4.58 0 -3.82 -0.06 -4.20 -0.60 -4.52 -0.41 -0.22 -10.17 -0.32 -29.41 -0.32 -24.13 0 -28.93 -0.06 -29.85 -0.44 -2.18 -0.92 -2.05 1.33 -2.05 -36.26 0 -26.28 0.09 -34.05 0.41 -34.65 0.19 -0.44 0.82 -1.01 1.33 -1.33 0.88 -0.51 2.31 -0.57 17.37 -0.57 12.44 0 16.55 0.09 16.93 0.38 0.95 0.73 1.52 1.99 4.36 9.85 2.08 5.72 3.13 8.09 3.70 8.62 l0.79 0.69 12.70 0.03 c8.97 0 13.01 0.13 13.80 0.38 1.77 0.60 2.21 1.86 2.21 6.47 0 2.15 0.16 4.17 0.32 4.52 0.32 0.57 0.82 0.60 15 0.60 14.18 0 14.69 -0.03 15 -0.60 0.16 -0.35 0.32 -2.53 0.32 -4.90 0 -3.98 0.06 -4.33 0.73 -5.09 0.44 -0.54 1.23 -0.95 2.12 -1.14 0.79 -0.13 6.13 -0.25 11.84 -0.28 11.40 0 11.50 -0.03 12.19 -1.86 0.19 -0.44 1.11 -3.66 2.02 -7.14 7.49 -27.95 12.92 -47.69 13.58 -49.30 0.35 -0.88 0.60 -1.11 1.17 -1.01 0.57 0.06 0.85 0.57 1.58 2.91 0.82 2.50 6.60 22.39 9.22 31.68 0.54 1.93 1.26 3.82 1.58 4.17 0.57 0.63 0.95 0.66 6.79 0.66 7.07 0 8.34 0.22 9.19 1.67 0.60 0.98 0.63 1.90 0.63 35.38 l0 34.40 -1.07 1.07 -1.07 1.07 -28.87 0 c-25.62 0 -28.93 0.06 -29.56 0.51 -0.66 0.44 -0.69 0.69 -0.69 4.71 0 3.70 0.06 4.26 0.57 4.55 0.35 0.22 11.91 0.32 35.15 0.25 28.81 -0.06 34.71 -0.13 35.12 -0.51z"/>  
 </g>  
</svg>  
    </div>  
  </div>  
</section>  
  
<!-- STATS -->  
  
<div class="stats">  
  <div class="stat-item">  
    <span class="stat-num">+2000</span>  
    <span class="stat-label">Motores Diagnosticados</span>  
  </div>  
  <div class="stat-item">  
    <span class="stat-num">+6</span>  
    <span class="stat-label">Anos de Experiência</span>  
  </div>  
  <div class="stat-item">  
    <span class="stat-num">98%</span>  
    <span class="stat-label">Índice de Satisfação</span>  
  </div>  
  <div class="stat-item">  
    <span class="stat-num">🇧🇷</span>  
    <span class="stat-label">Envio para Todo o País</span>  
  </div>  
</div>  
  
<!-- SERVICES -->  
  
<section id="servicos">  
  <div class="section-label">O que fazemos</div>  
  <h2 class="section-title">Nossos Serviços</h2>  
  <p class="section-sub">Soluções completas em sistemas de injeção eletrônica diesel para veículos leves, pesados e equipamentos agrícolas.</p>  
  
  <div class="services-grid">  
    <div class="service-card">  
      <div class="service-num">01</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>  
        <path d="M8 11h6M11 8v6"/>  
      </svg>  
      <h3>Diagnóstico Eletrônico</h3>  
      <p>Leitura avançada de falhas com equipamentos de última geração. Identificamos com precisão a causa raiz de qualquer problema na injeção diesel.</p>  
    </div>  
    <div class="service-card">  
      <div class="service-num">02</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>  
      </svg>  
      <h3>Calibração de Injetores</h3>  
      <p>Ajuste fino e calibração precisa de injetores Common Rail, bomba injetora e sistemas eletrônicos para restaurar a eficiência original do motor.</p>  
    </div>  
    <div class="service-card">  
      <div class="service-num">03</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>  
      </svg>  
      <h3>Laudo Técnico</h3>  
      <p>Elaboração de laudos técnicos detalhados para seguros, garantias e processos judiciais. Documentação completa com embasamento técnico e normativo.</p>  
    </div>  
    <div class="service-card">  
      <div class="service-num">04</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>  
      </svg>  
      <h3>Reparo Especializado</h3>  
      <p>Reparo de bombas injetoras rotativas e lineares, injetores piezoelétricos e solenoides. Peças originais e garantia de serviço.</p>  
    </div>  
    <div class="service-card">  
      <div class="service-num">05</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>  
      </svg>  
      <h3>Análise de Desempenho</h3>  
      <p>Mapeamento completo de pressão de injeção, temporização e eficiência de combustão. Otimize consumo e potência do seu motor diesel.</p>  
    </div>  
    <div class="service-card">  
      <div class="service-num">06</div>  
      <svg class="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">  
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>  
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>  
      </svg>  
      <h3>Consultoria Técnica</h3>  
      <p>Suporte técnico para mecânicos, frotas e gestores. Treinamento, orientação de manutenção preventiva e gestão de custos operacionais.</p>  
    </div>  
  </div>  
</section>  
  
<!-- WHY -->  
  
<section id="diferenciais" class="why">  
  <div>  
    <div class="section-label">Por que escolher</div>  
    <h2 class="section-title">Nossos Diferenciais</h2>  
    <p class="section-sub">Tecnologia de ponta aliada a expertise técnica para os melhores resultados.</p>  
  
```  
<ul class="why-list">  
  <li class="why-item">  
    <div class="why-item-icon">  
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>  
    </div>  
    <div class="why-item-text">  
      <h4>Equipamentos de Última Geração</h4>  
      <p>Bancadas de teste Bosch, Denso e Delphi homologadas para calibração de precisão micrométrica.</p>  
    </div>  
  </li>  
  <li class="why-item">  
    <div class="why-item-icon">  
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>  
    </div>  
    <div class="why-item-text">  
      <h4>Garantia nos Serviços</h4>  
      <p>Todos os reparos contam com garantia por escrito. Trabalhamos apenas com peças originais certificadas.</p>  
    </div>  
  </li>  
  <li class="why-item">  
    <div class="why-item-icon">  
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>  
    </div>  
    <div class="why-item-text">  
      <h4>Entrega Rápida</h4>  
      <p>Diagnóstico em até 24h e laudos técnicos expressos. Minimizamos o tempo de parada da sua frota.</p>  
    </div>  
  </li>  
  <li class="why-item">  
    <div class="why-item-icon">  
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>  
    </div>  
    <div class="why-item-text">  
      <h4>Atendimento Personalizado</h4>  
      <p>Canal direto com o técnico responsável pelo seu serviço. Transparência total em cada etapa do processo.</p>  
    </div>  
  </li>  
</ul>  
```  
  
  </div>  
  
  <div class="why-visual">  
    <div class="why-diagram">  
      <div class="why-diagram-circle"></div>  
      <div class="why-diagram-inner"></div>  
      <div class="why-diagram-center">  
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 364" style="width:120px;height:120px;">  
 <g fill="#CC2200">  
  <path d="M158.08 351.35 c-1.29 -1.83 -2.59 -3.76 -2.84 -4.23 -0.41 -0.79 -0.47 -4.01 -0.47 -21.73 0 -18.98 0.03 -20.88 0.54 -21.26 0.66 -0.57 11.40 -0.82 12.38 -0.28 0.66 0.35 0.66 0.47 0.66 21.57 l0 21.23 -2.75 4.01 c-2.68 3.98 -2.78 4.04 -3.92 4.04 -1.14 0 -1.26 -0.13 -3.60 -3.35z"/>  
  <path d="M141.44 235.05 c-1.90 -1.17 -1.86 -0.54 -1.77 -23.91 l0.09 -21.38 1.04 -0.92 1.01 -0.92 8.46 0 c4.64 0 13.20 -0.09 19.05 -0.22 l10.61 -0.19 1.23 1.14 1.23 1.11 0 21.86 0 21.86 -1.17 1.07 -1.20 1.07 -18.86 0 c-17.21 -0.03 -18.95 -0.06 -19.74 -0.57z m38.63 -1.86 c0.38 -0.41 0.44 -4.20 0.44 -21.64 0 -20.56 -0.03 -21.16 -0.60 -21.60 -0.92 -0.66 -36.73 -0.66 -37.65 0 -0.57 0.44 -0.60 1.04 -0.60 21.67 0 20.62 0.03 21.23 0.60 21.67 0.54 0.38 3.63 0.44 19.01 0.44 16.71 0 18.41 -0.06 18.79 -0.54z"/>  
  <path d="M134.65 177.03 c-2.12 -0.92 -1.99 1.07 -1.99 -34.65 0 -30.13 0.03 -32.37 0.57 -33.42 1.14 -2.27 -0.22 -2.18 28.30 -2.21 l25.52 0 1.04 1.04 c0.88 0.88 1.07 1.33 1.23 3.06 0.09 1.14 0.16 16.01 0.13 33.07 -0.09 30.92 -0.09 31.02 -0.76 31.90 -0.35 0.47 -1.01 1.07 -1.42 1.26 -1.17 0.63 -51.20 0.57 -52.62 -0.06z m52.08 -1.96 c0.54 -0.47 0.57 -1.93 0.57 -32.97 0 -29.09 -0.06 -32.50 -0.51 -32.94 -0.44 -0.44 -3.19 -0.51 -25.55 -0.51 -24.19 0 -25.08 0.03 -25.77 0.60 l-0.76 0.60 -0.09 31.55 c-0.03 17.34 0 32 0.09 32.56 0.13 0.66 0.44 1.14 0.88 1.33 0.38 0.16 11.91 0.28 25.62 0.28 22.77 0.03 24.98 0 25.52 -0.51z"/>  
  <path d="M111.05 152.97 c-5.37 -5.37 -10.23 -10.20 -10.74 -10.80 l-0.98 -1.07 0 -13.83 0 -13.87 0.85 -0.82 0.82 -0.85 10.49 -0.16 c8.43 -0.13 10.61 -0.06 11.24 0.28 1.77 0.92 1.71 0.19 1.71 25.80 l0 23.66 -0.73 0.66 c-0.44 0.44 -1.14 0.69 -1.80 0.69 -0.95 0 -1.93 -0.85 -10.87 -9.70z m11.43 -15.44 c0.06 -19.55 0 -23.15 -0.38 -23.69 -0.44 -0.57 -0.95 -0.60 -9.57 -0.69 -4.99 -0.06 -9.41 0 -9.79 0.09 -1.71 0.41 -1.67 0.09 -1.67 14.06 l0 12.89 10.36 10.30 c5.69 5.65 10.49 10.23 10.64 10.17 0.22 -0.06 0.35 -8.12 0.41 -23.12z"/>  
  <path d="M131.42 95.89 c-1.58 -0.88 -1.58 -0.92 -1.61 -16.39 0 -15.95 0 -15.95 1.93 -16.61 0.73 -0.25 9.48 -0.35 29.56 -0.35 30.67 0 29.88 -0.03 30.73 1.55 0.19 0.41 0.32 5.84 0.32 15.35 l0 14.75 -1.07 1.07 -1.07 1.07 -28.99 0 c-23.50 -0.03 -29.18 -0.09 -29.78 -0.44z m58.46 -1.99 c0.54 -0.47 0.57 -1.36 0.57 -14.50 0 -12.29 -0.06 -14.02 -0.51 -14.47 -0.44 -0.44 -3.47 -0.51 -28.87 -0.51 -25.39 0 -28.43 0.06 -28.87 0.51 -0.44 0.44 -0.51 2.21 -0.51 14.66 0 13.17 0.03 14.21 0.57 14.50 0.35 0.22 10.17 0.32 28.77 0.35 25.87 0 28.30 -0.03 28.84 -0.54z"/>  
  <path d="M130.98 52.30 c-0.44 -0.41 -0.88 -1.23 -1.01 -1.80 -0.09 -0.60 -0.16 -6.22 -0.09 -12.51 l0.09 -11.47 0.88 -0.85 0.85 -0.88 29.37 -0.09 29.34 -0.06 1.04 0.92 1.04 0.92 0 12.54 0 12.54 -0.88 0.76 c-0.85 0.73 -1.04 0.76 -6.06 0.76 -5.02 0 -5.21 -0.03 -6.06 -0.76 l-0.88 -0.76 -0.09 -6.10 c-0.06 -4.30 -0.22 -6.19 -0.47 -6.35 -0.22 -0.13 -7.80 -0.25 -16.87 -0.25 -15.98 0 -16.52 0.03 -16.83 0.60 -0.19 0.38 -0.32 3 -0.32 6.35 0 7.68 0.38 7.26 -6.89 7.26 -5.18 0 -5.37 -0.03 -6.16 -0.76z m10.74 -1.39 c0.25 -0.16 0.41 -2.05 0.47 -6.29 0.09 -5.84 0.13 -6.10 0.82 -6.79 l0.73 -0.73 16.96 -0.09 c9.32 -0.03 17.28 0 17.66 0.09 0.38 0.09 1.01 0.47 1.36 0.85 0.57 0.63 0.63 1.11 0.63 6.13 0 3 0.13 5.81 0.32 6.25 l0.32 0.82 4.55 0 c2.53 0 4.64 -0.09 4.74 -0.25 0.06 -0.13 0.19 -5.53 0.22 -12 0.09 -10.08 0.03 -11.84 -0.35 -12.07 -0.28 -0.19 -12.07 -0.32 -28.93 -0.32 -26.12 0 -28.52 0.03 -28.90 0.54 -0.69 0.79 -0.63 23.37 0.03 23.78 0.57 0.35 8.84 0.41 9.38 0.06z"/>  
  <path d="M187.74 343.77 c-1.58 -0.76 -1.80 -1.52 -1.83 -6.41 l-0.03 -4.42 1.07 -1.11 1.11 -1.14 28.81 0 c28.65 0 28.77 0 29.63 -0.66 l0.82 -0.63 0 -33.80 c0 -33.35 0 -33.76 -0.63 -34.40 -0.60 -0.60 -1.04 -0.63 -7.17 -0.63 -6 0 -6.66 -0.06 -7.61 -0.63 -0.57 -0.35 -1.23 -1.11 -1.48 -1.64 -0.44 -1.01 -2.87 -9.29 -7.39 -25.20 -1.99 -7.07 -2.15 -7.42 -2.87 -7.42 -0.73 0 -0.85 0.28 -2.27 5.53 -2.34 8.46 -5.02 18.45 -8.94 32.94 -2.12 7.99 -3.79 13.52 -4.17 14.02 -0.32 0.47 -1.01 1.14 -1.48 1.48 -0.82 0.63 -1.33 0.66 -12.29 0.76 -9.98 0.06 -11.47 0.16 -11.97 0.60 -0.51 0.44 -0.57 1.07 -0.57 4.83 0 3.98 -0.06 4.42 -0.69 5.21 -1.33 1.71 -1.61 1.74 -16.30 1.74 -7.45 0 -13.99 -0.09 -14.50 -0.19 -0.54 -0.09 -1.36 -0.51 -1.86 -0.92 l-0.92 -0.73 -0.16 -4.77 c-0.09 -3.28 -0.28 -4.86 -0.57 -5.15 -0.32 -0.32 -3.41 -0.44 -13.74 -0.57 -12.22 -0.16 -13.39 -0.22 -14.18 -0.73 -1.29 -0.88 -1.64 -1.58 -4.33 -8.97 -1.39 -3.79 -2.75 -7.42 -3 -8.05 -0.95 -2.24 -0.22 -2.15 -17.02 -2.15 -15.07 0 -16.05 0.06 -16.71 1.07 -0.13 0.19 -0.25 15.44 -0.25 33.92 0 33.13 0 33.54 0.63 34.17 0.63 0.63 1.04 0.63 29.69 0.63 32.25 0 30.54 -0.13 31.46 2.05 0.63 1.55 0.60 8.37 -0.03 9.63 -1.04 2.02 1.67 1.90 -37.52 1.90 -32.72 0 -35.72 -0.03 -36.54 -0.54 -0.51 -0.28 -1.07 -0.88 -1.33 -1.29 -0.35 -0.66 -0.41 -24.60 -0.41 -138.47 l0 -137.71 1.04 -0.92 1.01 -0.92 26.40 0 26.37 0 0.76 0.79 c0.76 0.76 0.79 0.88 0.79 5.69 0 2.78 -0.13 5.21 -0.32 5.56 -0.85 1.55 -0.82 1.55 -21.60 1.55 -17.21 0 -19.46 0.06 -19.90 0.51 -0.44 0.44 -0.51 8.50 -0.51 84.02 0 83.10 0 83.51 0.63 84.14 0.63 0.63 1.04 0.63 19.49 0.63 18.16 0 18.92 0.03 19.90 0.63 1.33 0.79 1.61 1.39 4.36 8.97 3.25 8.97 3.95 10.58 4.67 11.09 0.57 0.38 2.31 0.47 10.20 0.47 8.46 0 9.57 -0.06 9.95 -0.54 0.35 -0.38 0.47 -2.62 0.60 -10.23 l0.16 -9.76 0.88 -0.85 0.85 -0.88 15 -0.09 c10.42 -0.06 15.22 0.03 15.67 0.25 0.35 0.19 0.92 0.82 1.23 1.36 0.60 0.95 0.63 1.67 0.63 10.36 0 8.65 0.03 9.38 0.57 9.85 0.51 0.47 1.55 0.54 7.86 0.54 6.47 0 7.36 -0.06 7.96 -0.57 0.79 -0.60 0.66 -0.22 5.40 -17.91 1.77 -6.60 4.86 -18.03 6.85 -25.43 1.99 -7.39 4.45 -16.55 5.46 -20.37 3.44 -13.01 3.70 -13.80 4.71 -14.78 1.14 -1.17 3.41 -1.52 4.61 -0.73 1.17 0.76 1.45 1.48 4.20 10.93 2.56 8.69 3.92 13.33 10.01 34.59 1.80 6.25 3.38 11.62 3.51 11.94 0.32 0.85 1.45 1.17 4.20 1.17 1.99 0 2.56 -0.13 2.97 -0.57 0.51 -0.54 0.54 -6.82 0.54 -84.17 0 -75.55 -0.06 -83.61 -0.51 -84.05 -0.44 -0.44 -2.59 -0.51 -18.95 -0.51 -20.12 0 -19.99 0 -20.66 -1.77 -0.19 -0.44 -0.32 -2.84 -0.32 -5.34 0 -4.42 0.03 -4.55 0.82 -5.50 l0.82 -0.98 25.43 0 25.43 0 0.88 0.88 c0.73 0.73 0.92 1.26 1.07 2.94 0.13 1.11 0.19 63.14 0.13 137.84 l-0.09 135.81 -0.73 1.01 c-0.44 0.63 -1.17 1.14 -1.90 1.36 -0.76 0.19 -12.95 0.32 -35.60 0.32 -30.32 0 -34.55 -0.06 -35.41 -0.51z m71.03 -1.99 c0.51 -0.38 0.54 -10.39 0.54 -137.55 0 -85.88 -0.13 -137.30 -0.32 -137.58 -0.25 -0.41 -3.28 -0.47 -24.86 -0.35 -15.98 0.06 -24.70 0.22 -24.95 0.41 -0.51 0.41 -0.57 7.74 -0.09 8.46 0.25 0.41 2.87 0.51 19.27 0.63 l19.01 0.16 0.92 1.04 0.92 1.01 0 84.05 c0 92.39 0.16 85.28 -1.90 86.35 -1.14 0.57 -6.51 0.66 -7.74 0.09 -0.44 -0.19 -1.07 -0.79 -1.39 -1.33 -0.35 -0.54 -1.74 -4.96 -3.16 -9.82 -12.35 -43.02 -13.46 -46.65 -14.24 -47.28 -0.92 -0.73 -1.14 -0.73 -1.99 0.16 -0.54 0.51 -1.33 3 -3.19 9.85 -1.36 5.05 -3.98 14.84 -5.87 21.79 -1.86 6.95 -5.21 19.39 -7.42 27.64 -2.21 8.24 -4.23 15.76 -4.49 16.68 -0.25 0.95 -0.88 2.15 -1.36 2.68 l-0.88 1.01 -8.18 0.09 c-7.17 0.09 -8.28 0.03 -9.16 -0.44 -0.54 -0.28 -1.11 -0.76 -1.26 -1.04 -0.13 -0.28 -0.32 -4.90 -0.41 -10.23 -0.16 -9.19 -0.19 -9.76 -0.76 -10.20 -0.51 -0.38 -3.03 -0.44 -14.62 -0.44 -13.58 0 -14.02 0.03 -14.62 0.63 -0.60 0.60 -0.63 1.04 -0.63 9.95 0 10.14 -0.09 10.71 -1.74 11.47 -0.57 0.28 -3.73 0.38 -10.83 0.38 -9.38 0 -10.08 -0.03 -11.02 -0.63 -1.29 -0.79 -1.77 -1.74 -4.30 -8.69 -3.38 -9.32 -4.04 -10.87 -4.74 -11.37 -0.57 -0.41 -3.28 -0.47 -19.27 -0.47 -20.69 0 -20.37 0.03 -21.23 -2.02 -0.41 -0.98 -0.47 -12.07 -0.47 -84.96 0 -81.02 0.03 -83.86 0.57 -84.55 1.23 -1.48 2.12 -1.55 22.01 -1.55 11.15 0 18.82 -0.13 19.11 -0.32 0.60 -0.38 0.88 -7.77 0.32 -8.81 l-0.35 -0.66 -25.52 0 c-23.37 0 -25.58 0.03 -25.96 0.54 -0.38 0.41 -0.44 21.57 -0.47 135.40 -0.03 74.19 0.03 135.94 0.16 137.20 0.13 1.52 0.35 2.40 0.66 2.59 0.76 0.47 70.53 0.41 71 -0.06 0.25 -0.25 0.38 -1.74 0.38 -4.58 0 -3.82 -0.06 -4.20 -0.60 -4.52 -0.41 -0.22 -10.17 -0.32 -29.41 -0.32 -24.13 0 -28.93 -0.06 -29.85 -0.44 -2.18 -0.92 -2.05 1.33 -2.05 -36.26 0 -26.28 0.09 -34.05 0.41 -34.65 0.19 -0.44 0.82 -1.01 1.33 -1.33 0.88 -0.51 2.31 -0.57 17.37 -0.57 12.44 0 16.55 0.09 16.93 0.38 0.95 0.73 1.52 1.99 4.36 9.85 2.08 5.72 3.13 8.09 3.70 8.62 l0.79 0.69 12.70 0.03 c8.97 0 13.01 0.13 13.80 0.38 1.77 0.60 2.21 1.86 2.21 6.47 0 2.15 0.16 4.17 0.32 4.52 0.32 0.57 0.82 0.60 15 0.60 14.18 0 14.69 -0.03 15 -0.60 0.16 -0.35 0.32 -2.53 0.32 -4.90 0 -3.98 0.06 -4.33 0.73 -5.09 0.44 -0.54 1.23 -0.95 2.12 -1.14 0.79 -0.13 6.13 -0.25 11.84 -0.28 11.40 0 11.50 -0.03 12.19 -1.86 0.19 -0.44 1.11 -3.66 2.02 -7.14 7.49 -27.95 12.92 -47.69 13.58 -49.30 0.35 -0.88 0.60 -1.11 1.17 -1.01 0.57 0.06 0.85 0.57 1.58 2.91 0.82 2.50 6.60 22.39 9.22 31.68 0.54 1.93 1.26 3.82 1.58 4.17 0.57 0.63 0.95 0.66 6.79 0.66 7.07 0 8.34 0.22 9.19 1.67 0.60 0.98 0.63 1.90 0.63 35.38 l0 34.40 -1.07 1.07 -1.07 1.07 -28.87 0 c-25.62 0 -28.93 0.06 -29.56 0.51 -0.66 0.44 -0.69 0.69 -0.69 4.71 0 3.70 0.06 4.26 0.57 4.55 0.35 0.22 11.91 0.32 35.15 0.25 28.81 -0.06 34.71 -0.13 35.12 -0.51z"/>  
 </g>  
</svg>  
        <span>Diesel Lab</span>  
      </div>  
    </div>  
  </div>  
</section>  
  
<!-- PROCESS -->  
  
<section id="processo" style="background: var(--darker);">  
  <div style="text-align:center; margin-bottom: 1rem;">  
    <div class="section-label" style="justify-content: center;">Como trabalhamos</div>  
    <h2 class="section-title">Nosso Processo</h2>  
    <p class="section-sub" style="margin-left: auto; margin-right: auto; text-align: center;">Quatro etapas simples para resolver qualquer problema na injeção eletrônica diesel.</p>  
  </div>  
  <div class="process process-steps">  
    <div class="process-step">  
      <div class="step-num">01</div>  
      <h4>Contato Inicial</h4>  
      <p>Entre em contato via WhatsApp e descreva o problema. Faremos uma triagem técnica gratuita.</p>  
    </div>  
    <div class="process-step">  
      <div class="step-num">02</div>  
      <h4>Diagnóstico</h4>  
      <p>Recebemos o componente e realizamos leitura completa com equipamentos especializados.</p>  
    </div>  
    <div class="process-step">  
      <div class="step-num">03</div>  
      <h4>Orçamento</h4>  
      <p>Enviamos orçamento detalhado com prazo de entrega e garantia antes de iniciar qualquer reparo.</p>  
    </div>  
    <div class="process-step">  
      <div class="step-num">04</div>  
      <h4>Entrega</h4>  
      <p>Componente calibrado, reparado e testado. Entregamos com laudo técnico e nota fiscal.</p>  
    </div>  
  </div>  
</section>  
  
<!-- CTA -->  
  
<section id="contato" class="cta-section">  
  <h2>PRONTO PARA<br>RESOLVER SEU PROBLEMA?</h2>  
  <p>Fale agora com um especialista e receba uma triagem técnica gratuita para o seu motor diesel.</p>  
  <a href="https://wa.me/5567996342998?text=Olá!%20Gostaria%20de%20uma%20consultoria%20em%20injeção%20eletrônica%20diesel.">  
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#CC2200"><path d="M20.52 3.48A12 12 0 0 0 2.33 18.9L.5 24l5.25-1.38A12 12 0 1 0 20.52 3.48zm-8.53 18a10 10 0 0 1-5.1-1.39l-.37-.22-3.8 1 1-3.7-.24-.38A10 10 0 1 1 12 21.48z"/><path d="M16.88 14.6c-.26-.13-1.53-.75-1.76-.84s-.41-.13-.58.13-.67.84-.82 1-.3.2-.56.07a7 7 0 0 1-2.06-1.27 7.7 7.7 0 0 1-1.42-1.77c-.15-.26 0-.4.11-.53s.26-.3.39-.46a1.8 1.8 0 0 0 .26-.43.48.48 0 0 0 0-.46c-.07-.13-.58-1.4-.8-1.92s-.42-.44-.58-.45h-.49a.94.94 0 0 0-.68.32A2.87 2.87 0 0 0 8 10.5a5 5 0 0 0 1.05 2.65 11.45 11.45 0 0 0 4.38 3.87 14.67 14.67 0 0 0 1.46.54 3.52 3.52 0 0 0 1.61.1 2.64 2.64 0 0 0 1.73-1.22 2.14 2.14 0 0 0 .15-1.22c-.07-.11-.24-.18-.5-.3z"/></svg>  
    Falar no WhatsApp Agora  
  </a>  
</section>  
  
<!-- FOOTER -->  
  
<footer>  
  <div class="footer-logo">SNX DIESEL<span>LAB</span></div>  
  <p>© 2026 Diesel Lab · Todos os direitos reservados</p>  
  <p>Consultoria em Injeção Eletrônica Diesel</p>  
</footer>  
  
<!-- WHATSAPP FLOAT -->  
  
<a href="https://wa.me/5567996342998?text=Olá!%20Gostaria%20de%20uma%20consultoria%20em%20injeção%20eletrônica%20diesel." class="whatsapp-float" target="_blank" rel="noopener">  
  <span class="whatsapp-label">Falar no WhatsApp</span>  
  <div class="whatsapp-btn">  
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="white" width="30" height="30">  
      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.737 5.486 2.027 7.788L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.858l-.486-.29-5.002 1.193 1.224-4.874-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.97c-.398-.2-2.355-1.162-2.72-1.294-.365-.133-.63-.2-.896.2-.265.398-1.029 1.294-1.261 1.56-.232.265-.465.298-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.363-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.2-.232.265-.398.398-.664.133-.265.066-.497-.033-.697-.1-.2-.896-2.16-1.228-2.957-.323-.776-.651-.67-.896-.683-.232-.012-.497-.015-.763-.015s-.697.1-1.062.497c-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.12c.2.265 2.808 4.287 6.803 6.014.95.41 1.692.655 2.27.838.953.303 1.821.26 2.507.158.765-.114 2.355-.963 2.687-1.893.332-.93.332-1.727.232-1.893-.1-.166-.365-.265-.763-.465z"/>  
    </svg>  
  </div>  
</a>  
  
</body>  
</html>   
![Desenho](Attachments/BF8E6377-3CDC-4AF6-9F9E-D3B1414EF36F.png)  
