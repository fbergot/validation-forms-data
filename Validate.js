/**
 * Validation forms data
 * by florian.B
 * @class Validate
 */
class Validate {
  /**
   * Creates an instance Validate.
   *
   * @param {Number} limitMinCharsForName
   * @param {Number} limitMaxCharsForName
   * @param {Number} limitMinCharsForPassword
   * @param {Number} [limitMaxCharsForPassword=20] by default 20 chars
   * @memberof Validate
   */
  constructor(
    limitMinCharsForName,
    limitMaxCharsForName,
    limitMinCharsForPassword,
    limitMaxCharsForPassword = 20
  ) {
    this.regexEmail = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
      "gi"
    );
    this.regexPassword = new RegExp(
      `^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{${limitMinCharsForPassword},${limitMaxCharsForPassword}}$`,
      "gi"
    );
    this.regexNumber = new RegExp("^[0-9]*$", "gi");
    this.regexChar = new RegExp("^[a-bA-B]*$", "gi");
    this.limitMinCharsForName = limitMinCharsForName;
    this.limitMaxCharsForName = limitMaxCharsForName;
    this.dangerousChars = ["<", ">", ".php", ".js"];
    this.verifNotEmptyOrNullish = (value) => {
      if (value === "" || value === undefined || value === null) {
        return null;
      }
    };
  }

  /**
   * For verif if email is valid or not
   *
   * @param {String} email
   * @returns {Boolean|null}
   * @memberof Validate
   */
  verifEmail(email) {
    //return null if email is empty or nullish
    this.verifNotEmptyOrNullish(email);

    if (this.regexEmail.test(email)) {
      return true;
    }
    return false;
  }

  /**
   * For verif password (limit min/max) chars gived in constructor and 1 or + number(s)
   *
   * @param {Strting} password
   * @returns {Boolean|null}
   * @memberof Validate
   */
  verifPassword(password) {
    //return null if password is empty or nullish
    this.verifNotEmptyOrNullish(password);

    if (this.regexPassword.test(password)) {
      return true;
    }
    return false;
  }

  /**
   * For verif length of name
   *
   * @param {String} name
   * @returns {Boolean|null}
   * @memberof Validate
   */
  verifLengthName(name) {
    //return null if name is empty or nullish
    this.verifNotEmptyOrNullish(name);

    if (
      name.length > this.limitMinCharsForName &&
      name.length <= this.limitMaxCharsForName
    ) {
      return true;
    }
    return false;
  }

  /**
   * detection bad chars in input
   *
   * @param {String} string
   * @returns {Boolean|null}
   * @memberof Validate
   */
  detectCharDangerous(string) {
    this.verifNotEmptyOrNullish(string);

    for (let chars of this.dangerousChars) {
      if (string.indexOf(chars) !== -1) {
        return false;
      }
    }
    return true;
  }

  /**
   * Verif is string is number
   *
   * @param {String} string
   * @returns {Boolean|null}
   * @memberof Validate
   */
  verifIsNumbers(string) {
    this.verifNotEmptyOrNullish(string);

    if (this.regexNumber.test(string)) {
      return true;
    }
    return false;
  }

  /**
   * Verif is string
   *
   * @param {String} string
   * @returns {Boolean|null}
   * @memberof Validate
   */
  verifIsChars(string) {
    this.verifNotEmptyOrNullish(string);
    
    if (this.regexChar.test(string)) {
      return true;
    }
    return false;
  }
}
