import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'sigin', loadChildren: './pages/sigin/sigin.module#SiginPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'generate-qr/:id', loadChildren: './pages/generate-qr/generate-qr.module#GenerateQrPageModule' },
  { path: 'transfer-with-qr/:id', loadChildren: './pages/transfer-with-qr/transfer-with-qr.module#TransferWithQrPageModule' },
  { path: 'enroll-account/:id', loadChildren: './pages/enroll-account/enroll-account.module#EnrollAccountPageModule' },
  { path: 'add-product/:id', loadChildren: './pages/add-product/add-product.module#AddProductPageModule' },
  { path: 'add-productcorriente/:id', loadChildren: './pages/add-productcorriente/add-productcorriente.module#AddProductcorrientePageModule' },
  { path: 'transferenrroll/:id', loadChildren: './pages/transferenrroll/transferenrroll.module#TransferenrrollPageModule' },
  { path: 'transferprops/:id', loadChildren: './pages/transferprops/transferprops.module#TransferpropsPageModule' },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
