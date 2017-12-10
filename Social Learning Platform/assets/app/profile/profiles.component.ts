import { Component } from "@angular/core";

@Component({
    selector: 'app-profiles',
    template: `

        <div class="row">
            <app-profile-list></app-profile-list>
        </div>
        <hr>
        <div class="row">
            <app-profile-input></app-profile-input>
        </div>

`
})
export class ProfilesComponent {

}