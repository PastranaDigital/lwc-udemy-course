public with sharing class PersonMapperFactory {
  @TestVisible
  private static PersonMapper instance;

  public static PersonMapper getInstance() {
    if (instance != null) {
      return instance;
    }

    FeatureWall.FeatureGate userPersonGate = FeatureWall.getInstance()
      .getUserPersonGate();

    if (userPersonGate.isEnabled()) {
      instance = new PersonMapperUser();
    } else {
      instance = new PersonMapperContact();
    }

    return instance;
  }
}
