import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { ModalComponent } from './components/modal/modal.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"cadastrar",
        component:CadastrarComponent
    },
    {
        path:"listar",
        component:ListarComponent
    },
   /* {
        path: 'payments/:id/edit',
        component: ModalComponent
      }*/
      
];
