import {Component, OnInit} from '@angular/core';
import {Image} from "../../../../core/interfaces/image.interface";

@Component({
    selector: 'app-media-main-page',
    templateUrl: './media-main-page.component.html',
    styleUrls: ['./media-main-page.component.scss']
})
export class MediaMainPageComponent implements OnInit {

    readonly images: Image[] = [
        { url: 'https://via.placeholder.com/750x300', description: 'Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.' },
        { url: 'https://via.placeholder.com/850x819', description: '' },
        { url: 'https://via.placeholder.com/620x300', description: 'Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui.' },
        { url: 'https://via.placeholder.com/980x600', description: 'Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' },
        { url: 'https://via.placeholder.com/550x300', description: 'Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus.' },
        { url: 'https://via.placeholder.com/450x200', description: 'Nulla vitae elit libero, a pharetra augue.' },
        { url: 'https://via.placeholder.com/550x800', description: '' },
        { url: 'https://via.placeholder.com/150x100', description: 'Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.' },
        { url: 'https://via.placeholder.com/150x123', description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper.' },
        { url: 'https://via.placeholder.com/650x592', description: 'Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.' },
        { url: 'https://via.placeholder.com/350x100', description: '' },
        { url: 'https://via.placeholder.com/110x380', description: '' },
    ];

    public registeredLightBoxFn: {
        open: () => {},
        close: () => {},
    };
    public selectedImageIndex: number;

    constructor() {
    }

    ngOnInit() {
    }

    public onImageClick(selectedImageIndex: number): void {
        this.selectedImageIndex = selectedImageIndex;
        this.registeredLightBoxFn.open();
    }
}
