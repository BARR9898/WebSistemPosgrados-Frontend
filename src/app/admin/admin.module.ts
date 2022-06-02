import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/layouts/admin-layout/admin-layout.component'
import { AdminSharedModule } from './modules/shared/admin-shared.module';
import { Router, RouterModule } from '@angular/router';
import { MastersListComponent } from './components/masters-list/masters-list.component';
import { CreateComponentComponent } from './components/create-component/create-component.component';
import { EditMasterComponent } from './components/edit-master/edit-master.component';
import { UserComponent } from './components/user/user.component';
import { ImageFormComponent } from './components/images/image-form/image-form.component';
import { ImagesListComponent } from './components/images/images-list/images-list.component';
import { ImagePreviewComponent } from './components/images/image-preview/image-preview.component';
import { ViewMasterImagesComponent } from './components/images/view-master-images/view-master-images.component';
import { FilesListComponent } from './components/files/files-list/files-list.component';
import { ViewMasterFileComponent } from './components/files/view-master-file/view-master-file.component';
import { FileFormComponent } from './components/files/file-form/file-form.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [ MastersListComponent,CreateComponentComponent, EditMasterComponent, UserComponent, ImageFormComponent, ImagesListComponent, ImagePreviewComponent, ViewMasterImagesComponent, FilesListComponent, ViewMasterFileComponent, FileFormComponent, AdminLayoutComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AdminSharedModule,
    RouterModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,




  ]


})
export class AdminModule { }
