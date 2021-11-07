public with sharing class PersonServiceFactory {
  @TestVisible
  private static PersonService instance;

  public static PersonService getInstance() {
    if (instance != null) {
      return instance;
    }

    FeatureWall.FeatureGate userPersonGate = FeatureWall.getInstance()
      .getUserPersonGate();

    if (userPersonGate.isEnabled()) {
      instance = new PersonServiceUser();
    } else {
      instance = new PersonServiceContact();
    }

    return instance;
  }
}
