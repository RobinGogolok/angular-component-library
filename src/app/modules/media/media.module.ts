import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaMainPageComponent} from "./pages/media-main-page/media-main-page.component";
import {LightBoxComponent} from "./components/light-box/light-box.component";
import {MediaRoutingModule} from "./media-routing.module";

@NgModule({
    declarations: [
        MediaMainPageComponent,
        LightBoxComponent,
    ],
    imports: [
        CommonModule,
        MediaRoutingModule,
    ]
})
export class MediaModule {
}
