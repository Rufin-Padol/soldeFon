import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/parian/parian.component').then((m) => m.ParianComponent),
  },
  {
    path: 'retrait',
    loadComponent: () =>
      import('./features/transation-retraire/transation-retraire.component').then((m) => m.TransationRetraireComponent),
  },
  {
    path: 'Marchants',
    loadComponent: () =>
      import('./features/marchant/marchant.component').then((m) => m.MarchantComponent),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./features/transation1/transation1.component').then((m) => m.Transation1Component),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./features/user/user.component').then((m) => m.UserComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/public/inscription/inscription.component').then((m) => m.InscriptionComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/public/enregistrer/enregistrer.component').then((m) => m.EnregistrerComponent),
  },
  // {
  //   path: 'activation/:id',
  //   loadComponent: () =>
  //     import('./features/public/activation-compte/activation-compte.component').then((m) => m.ActivationCompteComponent),
  //     data: { renderMode: 'client' }

  // },
  {
    path: 'verifier-email',
    loadComponent: () =>
      import('./features/public/verifier-email/verifier-email.component').then((m) => m.VerifierEmailComponent),
  },
  {
    path: 'code-verification',
    loadComponent: () =>
      import('./features/public/code-recu/code-recu.component').then((m) => m.CodeRecuComponent),
  },
  // {
  //   path: 'new-password/:id',
  //   loadComponent: () =>
  //     import('./features/public/new-pass-word/new-pass-word.component').then((m) => m.NewPassWordComponent),
  // },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/main/main.component').then((m) => m.MainComponent),
      },
      {
        path: 'utilisateurs',
        loadComponent: () =>
          import('./features/admin/utilisateurs/utilisateurs.component').then((m) => m.UtilisateursComponent),
      },
      {
        path: 'marchands',
        loadComponent: () =>
          import('./features/admin/marchant/marchant.component').then((m) => m.MarchantComponent),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./features/admin/transation/transation.component').then((m) => m.TransationComponent),
      },
    ],
  },
//   {
//     path: 'notification/:userId',
//     loadComponent: () =>
//       import('./features/notifications/notifications.component').then((m) => m.NotificationsComponent),
// data: { renderMode: 'client' }
//   },
//   {
//     path: 'marchand/:userId/:type',
//     loadComponent: () =>
//       import('./components/dasboard/marchant/marchant.component').then((m) => m.MarchantComponent),
//  data: { renderMode: 'client' }

//   },
  {
    path: 'client',
    loadComponent: () =>
      import('./components/dasboard/client/client.component').then((m) => m.ClientComponent),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
