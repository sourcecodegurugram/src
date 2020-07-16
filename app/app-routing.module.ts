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



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
