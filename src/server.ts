import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode, ServerRoute } from '@angular/ssr';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'register', renderMode: RenderMode.Prerender },
  { path: 'personal', renderMode: RenderMode.Prerender },
  { path: 'personal/potential', renderMode: RenderMode.Prerender },
  { path: 'personal/projects', renderMode: RenderMode.Prerender },
  { path: 'personal/neurons', renderMode: RenderMode.Prerender },
  { path: 'personal/kutumb', renderMode: RenderMode.Prerender },
  { path: 'personal/future', renderMode: RenderMode.Prerender },
  { path: 'personal/create', renderMode: RenderMode.Prerender },
  { path: 'personal/advertise', renderMode: RenderMode.Prerender },
  { path: 'personal/demand', renderMode: RenderMode.Prerender },
  { path: 'personal/supply', renderMode: RenderMode.Prerender },
  { path: 'personal/edit', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];

const serverConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
});

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(App, serverConfig, context);

export default bootstrap;
