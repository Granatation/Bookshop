import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "../book/profile/profile.component";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: false
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: false
        }
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true
        }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true
        }
    }
];

export const AuthRoutingModule = RouterModule.forChild(routes);