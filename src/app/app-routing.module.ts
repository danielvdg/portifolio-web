import { Routes , RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { AboutMeComponent } from "./core/about-me/about-me.component";
import { NgModule } from "@angular/core";
import { SkillComponent } from "./core/skill/skill.component";
import { ExperienceComponent } from "./core/experience/experience.component";

const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'about', component : AboutMeComponent},
    {path: 'skill', component : SkillComponent},
    {path: 'experience', component : ExperienceComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}