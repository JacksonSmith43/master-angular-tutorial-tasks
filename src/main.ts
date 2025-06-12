import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err)); //  { providers: [TasksService] } replaces @Injectable({providedIn: "root", }) from within tasks.service.ts.
