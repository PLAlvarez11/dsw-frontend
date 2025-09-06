import { Routes } from '@angular/router';
import { PersonComponent } from './pages/person/person.component';
import { OrderCreateComponent } from './pages/order/order-create.component';

export const routes: Routes = [
    { path: '', redirectTo: 'persons', pathMatch: 'full' },
    { path: 'persons', component: PersonComponent },
    { path: 'orders/create', component: OrderCreateComponent },
];
