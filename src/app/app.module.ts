import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import {NgxAutoScrollModule} from "ngx-auto-scroll";
//services
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

//media plugins
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/File/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
//import { ImageModalPageModule } from './pages/image-modal/image-modal.module';

import { AES256 } from '@ionic-native/aes-256/ngx';
import { FileTransfer} from '@ionic-native/file-transfer/ngx';
import { Camera} from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DatePipe } from '@angular/common';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
//import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Dialogs } from '@ionic-native/dialogs/ngx';

import { BackgroundMode } from '@ionic-native/background-mode/ngx';

import { AppUpdate } from '@ionic-native/app-update/ngx';
import {AutosizeModule} from 'ngx-autosize';
import { NativeKeyboard } from '@ionic-native/native-keyboard/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


const config: SocketIoConfig = { url: 'http://localhost:3000', options : {} };

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      scrollAssist: true,
      scrollPadding: true
    }),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    NgxAutoScrollModule,
    TranslateModule.forRoot({
      loader : {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AutosizeModule
    
  ],
exports:[
 
],
providers: [  
    StatusBar,    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    Base64ToGallery,
    ImagePicker,
    File,
    MediaCapture,
    Media,
    PhotoViewer,
    AES256,
    FileTransfer,
    Camera,
    WebView,
    DatePipe,
    Clipboard,
    OneSignal,
    QRScanner,
    BarcodeScanner,
    Dialogs,
    BackgroundMode,
    AppUpdate,
    NativeKeyboard,
    SplashScreen,
    AndroidPermissions,
    NativeAudio
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule {}
