import {NgModule} from "@angular/core";
import {Route, RouterModule } from "@angular/router";
import {PokeComponent} from "./components/poke/poke.component";
import {HomeComponent} from "./components/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {
    RouteChangesExampleComponent
} from "./route-changes-example/route-changes-example/route-changes-example.component";

const routes: Route[] = [
    {
        path: 'pokemon',
        component: PokeComponent,
    },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'pokemon-by-path-parameter',
        component: RouteChangesExampleComponent, // this is the component with the <router-outlet> in the template
    },
    {
        path: 'pokemon-by-path-parameter/:poke-name',
        component: RouteChangesExampleComponent, // this is the component with the <router-outlet> in the template
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}