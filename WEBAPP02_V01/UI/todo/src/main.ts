import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Define your app configuration with providers
const appConfiguration = {
  providers: [
    provideHttpClient(),  // Provide HttpClient through environment providers
    // You can add other providers here if needed
  ]
};

bootstrapApplication(AppComponent, appConfiguration)
  .catch((err) => console.error(err));
