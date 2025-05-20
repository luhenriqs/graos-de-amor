<<<<<<< HEAD
// src/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes, withDebugTracing()),  // opcional: tracing ajuda no debug
  ]
=======
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
>>>>>>> e48320c739815a3dacc8aab3dc42f5ac4f4fc015
};
