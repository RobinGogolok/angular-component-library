import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediaMainPageComponent} from "./pages/media-main-page/media-main-page.component";

const routes: Routes = [
    {
        path: 'media', children: [
            {path: '', redirectTo: 'image-gallery', pathMatch: 'full'},
            {path: 'image-gallery', component: MediaMainPageComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MediaRoutingModule {
}
