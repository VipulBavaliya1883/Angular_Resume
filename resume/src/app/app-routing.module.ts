import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { ProductComponent } from './product/product.component';
import { ResultComponent } from './result/result.component';
import { SkillComponent } from './skill/skill.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  { path: 'personal', component: PersonalComponent },
  { path: 'result', component: ResultComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'product', component: ProductComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'productdetails/:id', component: ProductdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
