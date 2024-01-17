export class CustomRegex {
  public static password =
    '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';
  public static onlyText = '[a-zA-Z]*';
  public static username = '^[a-zA-Z ]*$';
  public static onlyNumber = /^\d+$/;
  public static phone = '^((\\+91-?)|0)?[0-9]{10}$';
  public static email = '^[a-zA-Z0-9.-]+@[a-zA-Z0-9-.]+\\.[a-zA-Z]{3,100}$';
  public static updateEmail =
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,9}))$/';
}
