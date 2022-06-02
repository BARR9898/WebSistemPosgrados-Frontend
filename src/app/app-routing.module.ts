import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { AdminLayoutComponent } from './admin/components/layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './public/components/public-layout/public-layout.component';
import { SelectMasterComponent } from './public/components/select-master/select-master.component';
import { PublicModule } from './public/public.module';
import { GuardsGuard } from './core/guards/guards.guard';
import { AdminGuardGuard } from './core/guards/admin-guard.guard';
import { LoginComponent } from './public/components/login/login.component';
const routes: Routes = [



  {

    path: 'admin',
    component:AdminLayoutComponent,
    children: [
      {
        path: '' ,
        loadChildren: () => import('./admin/admin.module').then(m => AdminModule )
      }
    ],
    canActivate: [GuardsGuard],


  },
  {
    path: 'select-master',
    component: SelectMasterComponent,
  },
  {
    path: 'public/:id/:master',
    component: PublicLayoutComponent,
    children: [
      {
        path: '' ,
        loadChildren: () => import('./public/public.module').then(m => PublicModule )
      }
    ]

  },
  {
    path: 'public/login',
    component: LoginComponent
  },
  {
    path: '',
    component: SelectMasterComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
