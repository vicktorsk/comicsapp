import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'busqueda/:termino', component: BusquedaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true})

/* @NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */

/* 
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu-tabs', loadChildren: './pages/menu-tabs/menu-tabs.module#MenuTabsPageModule' },
  { path: 'mensajes', loadChildren: './pages/mensajes/mensajes.module#MensajesPageModule' },
  { path: 'galeria', loadChildren: './pages/galeria/galeria.module#GaleriaPageModule' },
  { path: 'asistentes', loadChildren: './pages/asistentes/asistentes.module#AsistentesPageModule' },
  { path: 'clima', loadChildren: './pages/clima/clima.module#ClimaPageModule' },
  { path: 'personal-agenda', loadChildren: './pages/personal-agenda/personal-agenda.module#PersonalAgendaPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'mapas', loadChildren: './pages/mapas/mapas.module#MapasPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
  { path: 'conversacion', loadChildren: './pages/chat/conversacion/conversacion.module#ConversacionPageModule' },
  { path: 'notificaciones', loadChildren: './pages/notificaciones/notificaciones.module#NotificacionesPageModule' },
  { path: 'paginaweb', loadChildren: './pages/paginaweb/paginaweb.module#PaginawebPageModule' },
  { path: 'configuracion', loadChildren: './pages/configuration/configuration.module#ConfigurationPageModule' },
  { path: 'documentos', loadChildren: './pages/documentos/documentos.module#DocumentosPageModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqPageModule' },
  { path: 'traductor', loadChildren: './pages/traductor/traductor.module#TraductorPageModule' },
  { path: 'itinerario', loadChildren: './pages/itinerario/itinerario.module#ItinerarioPageModule' },
  { path: 'ponentes', loadChildren: './pages/ponentes/ponentes.module#PonentesPageModule' },
  { path: 'encuestas', loadChildren: './pages/encuestas/encuestas.module#EncuestasPageModule' },
  { path: 'videos', loadChildren: './pages/videos/videos.module#VideosPageModule' },
  { path: 'slido', loadChildren: './pages/slido/slido.module#SlidoPageModule' },
  { path: 'nuevogrupo', loadChildren: './pages/chat/nuevogrupo/nuevogrupo.module#NuevogrupoPageModule' },
  { path: 'genericsections', loadChildren: './pages/genericsections/genericsections.module#GenericsectionsPageModule' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 */


