import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  {
    path: "home/upload.php",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "location-targetting",
    loadChildren: () =>
      import("./location-targetting/location-targetting.module").then(
        (m) => m.LocationTargettingPageModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterPageModule),
  },
  {
    path: "chat",
    loadChildren: () =>
      import("./chat/chat.module").then((m) => m.ChatPageModule),
  },
  {
    path: "searchTab",
    loadChildren: () =>
      import("./searchTab/searchTab.module").then((m) => m.SearchTabPageModule),
  },
  {
    path: "tabs2",
    loadChildren: () =>
      import("./tabs2/tabs2.module").then((m) => m.Tabs2PageModule),
  },
  {
    path: "tabs3",
    loadChildren: () =>
      import("./tabs3/tabs3.module").then((m) => m.Tabs3PageModule),
  },
  {
    path: "personal-chat",
    loadChildren: () =>
      import("./personal-chat/personal-chat.module").then(
        (m) => m.PersonalChatPageModule
      ),
  },
  {
    path: "notificationchat/:thread_id/:image_path/:name",
    loadChildren: () =>
      import("./notificationchat/notificationchat.module").then(
        (m) => m.NotificationchatPageModule
      ),
  },
  {
    path: "search-result/:post",
    loadChildren: () =>
      import("./search-result/search-result.module").then(
        (m) => m.SearchResultPageModule
      ),
  },
  {
    path: "detail/:name/:mail/:uid",
    loadChildren: () =>
      import("./detail/detail.module").then((m) => m.DetailPageModule),
  },
  {
    path: "elipsispipe",
    loadChildren: () =>
      import("./elipsispipe/elipsispipe.module").then(
        (m) => m.ElipsispipePageModule
      ),
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./welcome/welcome.module").then((m) => m.WelcomePageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "optional-detail",
    loadChildren: () =>
      import("./optional-detail/optional-detail.module").then(
        (m) => m.OptionalDetailPageModule
      ),
  },
  {
    path: "popup/:uid",
    loadChildren: () =>
      import("./popup/popup.module").then((m) => m.PopupPageModule),
  },
  {
    path: 'new-message/:uid/:name',
    loadChildren: () => import('./new-message/new-message.module').then( m => m.NewMessagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
