export class CustomValidator {

    // valdator for ratingCountField 
    static ratingCountValidator(number): any {
      // check if form field lost focus
      if (number.pristine) {
        return null;
      }

      // check if value is null or undefined
      if (!number.value) {
        return {
          required: true
        };
      }

      // check if form field value is integer
      if (!Number.isInteger(number.value)) {
        return {
          notInteger: true
        };
      }

      // check if number belongs to <5,15>
      if (number.value < 5 || number.value > 15) {
        return {
          wrongValue: true
        };
      }

      // if everything is correct
      return null;
    }

  // validator for nameField 
  static nameValidator(name): any {
    // check if form field lost focus
    if (name.pristine) {
      return null;
    }

    // check if value is null or undefined
    if (!name.value) {
      return {
        required: true
      };
    }

    // check if value is null or undefined
    if (!name.value) {
      return {
        required: true
      };
    }
    // check name length
    if (name.value.length < 2 || name.value.length > 24) {
      return {
        invalidLength: true
      };
    }

    const nameRegExp = new RegExp("^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$");
    if (!nameRegExp.test(name.value)) {
      return {
        invalidPattern: true
      };
    }

    // if everything is correct
    return null;
  }
}
