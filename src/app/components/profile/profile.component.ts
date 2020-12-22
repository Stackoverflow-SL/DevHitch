import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  public profileForm: FormGroup;

  constructor(private fb: FormBuilder, public profileService: ProfileService) {
    this.generateProfileForm();
  }

  ngOnInit(): void {
    this.fetchUserProfileData();
  }



  /**
   * Generate profile form
   */
  public generateProfileForm() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      bio: ['', [Validators.required]],
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      image: ['', []]
    })
  }


  /**
   * Fetches user data for the profile template
   */
  public fetchUserProfileData() {
    this.profileService.getProfileData().subscribe((userData) => {
      if (userData) {
        this.user = userData;
        this.profileForm.patchValue({
          name: userData.firstName + userData.lastName,
          location: userData.location,
          email: userData.email,
          bio: userData.bio
        })
      }
    }, error => {
      console.log('error occurred while fetching user data.')
    })
  }

  /**
   *TODO : Submit profile update
   */
  public profileFormHandler() {
    let user = this.profileForm.value;
    this.profileService.updateProfileData(user).subscribe((response) => {

    },
      error => {
        console.log('error occurred while updating user')
      })
  }

  /**
   * TODO : Handles password change event
   */
  public changePasswordHandler() {
    this.profileService.updatePassword().subscribe((response) => {

    }, error => {
      console.log('error occurred while updating user password')
    })
  }

  /**
   * TODO : Handles account delete event.
   */
  public deleteAccountHandler() {
    this.profileService.deleteAccount().subscribe((response) => {

    }, error => {
      console.log('error occurred while deleting user account')
    })
  }
}
