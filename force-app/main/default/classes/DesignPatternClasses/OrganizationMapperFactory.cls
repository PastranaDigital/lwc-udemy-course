public with sharing class OrganizationMapperFactory {
  @TestVisible
  private static OrganizationMapper instance;

  public static OrganizationMapper getInstance() {
    if (instance != null) {
      return instance;
    }

    FeatureWall.FeatureGate userPersonGate = FeatureWall.getInstance()
      .getUserPersonGate();

    if (userPersonGate.isEnabled()) {
      instance = new OrganizationMapperAccount();
    } else {
      instance = new OrganizationMapperAccount();
    }

    return instance;
  }
}
