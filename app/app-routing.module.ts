import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
 


  {
    path: "chat",
    loadChildren: () =>
      import("./chat/chat.module").then((m) => m.ChatPageModule),
  },
  {
    path: "searchTab",
    loadChildren: () =>
      import("./chat/searchUser/searchUser.module").then((m) => m.searchUserPageModule),
  },
  {
    path: 'ChatsThreadListing',
    loadChildren: () => import('./chat/ChatsThreadListing/ChatsThreadListing.module').then( m => m.ChatsThreadListingPageModule)
  },
  {
    path: "tabs3",
    loadChildren: () =>
      import("./chat/FavoriteUsers/FavoriteUsers.module").then((m) => m.FavoriteUsersPageModule),
  },

  {
    path: "notificationchat/:thread_id/:image_path/:name",
    loadChildren: () =>
      import("./chat/ChatsThreadListing/notificationchat/notificationchat.module").then(
        (m) => m.NotificationchatPageModule
      ),
  },
 
  {
    path: "detail/:name/:mail/:uid",
    loadChildren: () =>
      import("./welcome/detail/detail.module").then((m) => m.DetailPageModule),
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
      import("./Signin/signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "optional-detail",
    loadChildren: () =>
      import("./Signin/optional-detail/optional-detail.module").then(
        (m) => m.OptionalDetailPageModule
      ),
  },
  {
    path: "popup/:uid",
    loadChildren: () =>
      import("./chat/userDetail/userDetail.module").then((m) => m.userDetailPageModule),
  },
  {
    path: 'new-message/:uid/:name',
    loadChildren: () => import('./chat/searchUser/new-message/new-message.module').then( m => m.NewMessagePageModule)
  },
  {
    path: 'find-friends',
    loadChildren: () => import('./Signin/find-friends/find-friends.module').then( m => m.FindFriendsPageModule)
  },

  {
    path: 'edit-profile',
    loadChildren: () => import('./Navigation/MyProfile/MyProfile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./Navigation/AccountSettings/account-setting.module').then( m => m.AccountSettingPageModule)
  },

  {
    path: 'searchuserresult/:gender/:meet/:activity/:Postcode',
    loadChildren: () => import('./chat/searchUser/searchUserResult/search-user-result.module').then( m => m.SearchUserResultPageModule)
  },
  {
    path: 'blockedusers',
    loadChildren: () => import('./Navigation/blockedusers/blockedusers.module').then( m => m.BlockedusersPageModule)
  },
  {
     path: 'topHobbies',
     loadChildren: () => import('./Signin/tophobbies/tophobbies.module').then( m => m.TophobbiesPageModule),
  },
  {
    path: 'chatsupport/:pmtId',
    loadChildren: () => import('./Navigation/chatsupport/chatsupport.module').then( m => m.ChatsupportPageModule)
  },
  {
    path: 'newchatsupport',
    loadChildren: () => import('./Navigation/newchatsupport/newchatsupport.module').then( m => m.NewchatsupportPageModule)
  },
  {
    path: 'noresult',
    loadChildren: () => import('./welcome/no-result-found/no-result-found.module').then( m => m.NoResultFoundPageModule)
  },

  {
    path: 'notLoggedIn',
    loadChildren: () => import('./welcome/not-logged-popup/not-logged-popup.module').then( m => m.NotLoggedPopupPageModule)
  },
  {
    path: 'becomevrified',
    loadChildren: () => import('./Signin/becomeverified/becomeverified.module').then( m => m.BecomeverifiedPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./Signin/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'moreinfo/:uid',
    loadChildren: () => import('./Navigation/moreinfo/moreinfo.module').then( m => m.MoreinfoPageModule)
  },

  {
    path: 'trialover',
    loadChildren: () => import('./Signin/trial-over/trial-over.module').then( m => m.TrialOverPageModule)
  },
  {
    path: 'paypal',
    loadChildren: () => import('./Signin/pay-pal/pay-pal.module').then( m => m.PayPalPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./Signin/pay-pal/success-page/success-page.module').then( m => m.SuccessPagePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
