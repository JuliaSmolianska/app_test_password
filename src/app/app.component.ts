import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class PasswordCheckerComponent {
  password: string = '';
  name: string = '';
  isEmpty: boolean = false;
  isEasy: boolean = false;
  isShort: boolean = false;
  isModerate: boolean = false;
  isStrong: boolean = false;

  checkPasswordStrength() {
    const password = this.password.trim();
    const passwordLength = password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSpecialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
      this.password
    );
    this.isShort = passwordLength >= 1 && passwordLength < 8;
    console.log('isShort: ' + this.isShort);

    this.isEmpty = passwordLength === 0;
    console.log('isEmpty: ' + this.isEmpty);

    this.isEasy =
      passwordLength >= 8 &&
      ((hasLetters && !hasNumbers && !hasSpecialChars) ||
        (hasNumbers && !hasLetters && !hasSpecialChars) ||
        (hasSpecialChars && !hasNumbers && !hasLetters));
    console.log('isEasy: ' + this.isEasy);

    this.isModerate =
      passwordLength >= 8 &&
      ((hasLetters && hasNumbers && !hasSpecialChars) ||
        (hasLetters && hasSpecialChars && !hasNumbers) ||
        (hasNumbers && hasSpecialChars && !hasLetters));
    console.log('isModerate: ' + this.isModerate);

    this.isStrong =
      passwordLength >= 8 && hasLetters && hasNumbers && hasSpecialChars;
    console.log('isStrong: ' + this.isStrong);
  }
}
