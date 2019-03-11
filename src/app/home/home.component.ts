import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages_1: NgxGalleryImage[];
    galleryImages_2: NgxGalleryImage[];
    galleryImages_3: NgxGalleryImage[];
    model = {
        left: true,
        middle: false,
        right: false
    };
    fondos = [
        "assets/img/image1.jpg",
        "assets/img/image2.jpg",
        "assets/img/image3.jpg",
        "assets/img/image4.jpg",
        "assets/img/image5.jpg"
    ]
    i = 0;
    focus;
    focus1;
    constructor() { }


    ngOnInit() {
        this.cambioFondo();
        this.cargaCarrusel();
    }
    public get fondoActual(): string {
        return this.fondos[this.i];
    }
    private cambioFondo() {
        setTimeout(() => {
            this.i = Math.floor(Math.random() * 5)
            console.log(this.i); 
            this.cambioFondo();
        }, 3000);
    }
    private cargaCarrusel() {
        this.galleryOptions = [
            {
                width: '100%',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                previewCloseOnClick: true,
                previewCloseOnEsc: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: true
            }
        ];
 
        this.galleryImages_1 = [
            {
                small: 'assets/img/social_1.JPG',
                medium: 'assets/img/social_1.JPG',
                big: 'assets/img/social_1.JPG'
            },
            {
                small: 'assets/img/social_2.JPG',
                medium: 'assets/img/social_2.JPG',
                big: 'assets/img/social_2.JPG'
            },
            {
                small: 'assets/img/social_3.JPG',
                medium: 'assets/img/social_3.JPG',
                big: 'assets/img/social_3.JPG'
            },
            {
                small: 'assets/img/social_4.JPG',
                medium: 'assets/img/social_4.JPG',
                big: 'assets/img/social_4.JPG'
            },
            {
                small: 'assets/img/social_5.jpg',
                medium: 'assets/img/social_5.jpg',
                big: 'assets/img/social_5.jpg'
            }
        ];

        this.galleryImages_2 = [
            {
                small: 'assets/img/novia_1.JPG',
                medium: 'assets/img/novia_1.JPG',
                big: 'assets/img/novia_1.JPG'
            },
            {
                small: 'assets/img/novia_2.JPG',
                medium: 'assets/img/novia_2.JPG',
                big: 'assets/img/novia_2.JPG'
            },
            {
                small: 'assets/img/novia_3.JPG',
                medium: 'assets/img/novia_3.JPG',
                big: 'assets/img/novia_3.JPG'
            },
            {
                small: 'assets/img/novia_4.JPG',
                medium: 'assets/img/novia_4.JPG',
                big: 'assets/img/novia_4.JPG'
            }
        ];

        this.galleryImages_3 = [
            {
                small: 'assets/img/xv_1.JPG',
                medium: 'assets/img/xv_1.JPG',
                big: 'assets/img/xv_1.JPG'
            },
            {
                small: 'assets/img/xv_2.JPG',
                medium: 'assets/img/xv_2.JPG',
                big: 'assets/img/xv_2.JPG'
            },
            {
                small: 'assets/img/xv_3.JPG',
                medium: 'assets/img/xv_3.JPG',
                big: 'assets/img/xv_3.JPG'
            }
        ];
    }
}
