import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { HeaderComponent } from './components/header/header.component';
import { IconComponent } from './components/icon/icon.component';
import { NoTitleSectionComponent } from './components/no-title-section/no-title-section.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ShrinkPipe } from './shrink.pipe';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    BannerComponent,
    BlogComponent,
    CustomersComponent,
    FooterComponent,
    RecommendationsComponent,
    HeaderComponent,
    IconComponent,
    NoTitleSectionComponent,
    DestinationComponent,
    ShrinkPipe,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
